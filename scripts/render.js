/**
 * render.js — headless Chrome PDF + screenshot renderer
 * Uses playwright-core + system Chrome (no separate browser download)
 *
 * Usage:
 *   node scripts/render.js [gate1|gate2|pdf]
 *
 *   gate1  — AS-IS render: PDF + screenshots of first 3 pages + SVG pages (no print CSS)
 *   gate2  — Full render: PDF + screenshots of EVERY page
 *   pdf    — Production render: dist/lailara-data-standards-cheat-sheet.pdf only
 */

const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const ROOT = path.resolve(__dirname, '..');
const INDEX_PATH = path.join(ROOT, 'index.html');
const DIST_DIR = path.join(ROOT, 'dist');
const SHOTS_DIR = path.join(DIST_DIR, 'screenshots');

// Letter at 96 DPI = 816 × 1056 px; 0.6 in margins = 57.6 px each side
const LETTER_W = 816;
const LETTER_H = 1056;
const MARGIN = '0.6in';

const MODE = process.argv[2] || 'gate1';

async function openPage(browser, url, viewportW, viewportH) {
  const ctx = await browser.newContext({ viewport: { width: viewportW, height: viewportH } });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  return { page, ctx };
}

async function generatePDF(page, outPath, footer) {
  const opts = {
    path: outPath,
    format: 'Letter',
    margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN },
    printBackground: true,
  };
  if (footer) {
    opts.displayHeaderFooter = true;
    opts.headerTemplate = '<span></span>';
    opts.footerTemplate = footer;
  }
  await page.pdf(opts);
  const bytes = fs.statSync(outPath).size;
  console.log(`PDF → ${path.relative(ROOT, outPath)} (${Math.round(bytes / 1024)} KB)`);
  return bytes;
}

async function scrollShot(page, outPath, scrollY) {
  await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  // brief pause for any lazy images
  await page.waitForTimeout(200);
  await page.screenshot({ path: outPath });
  console.log(`Screenshot → ${path.relative(ROOT, outPath)}`);
}

async function gate1(fileUrl) {
  const subDir = path.join(SHOTS_DIR, 'gate1');
  fs.mkdirSync(subDir, { recursive: true });

  const browser = await chromium.launch({ executablePath: CHROME_PATH, headless: true });

  // PDF — AS-IS (no footer template; see what native @page rules produce)
  const { page: pdfPage, ctx: pdfCtx } = await openPage(browser, fileUrl, LETTER_W, LETTER_H);
  await generatePDF(pdfPage, path.join(DIST_DIR, 'gate1-as-is.pdf'), null);
  await pdfCtx.close();

  // Screenshots — viewport = letter size, scroll to each "page"
  const { page, ctx } = await openPage(browser, fileUrl, LETTER_W, LETTER_H);
  const totalH = await page.evaluate(() => document.documentElement.scrollHeight);
  const totalPages = Math.ceil(totalH / LETTER_H);
  console.log(`Page total height: ${totalH}px → ~${totalPages} print pages`);

  // First 3 pages
  for (let i = 0; i < 3; i++) {
    await scrollShot(page, path.join(subDir, `page-0${i + 1}.png`), i * LETTER_H);
  }

  // SVG locations
  const svgs = await page.evaluate(() =>
    Array.from(document.querySelectorAll('img[src$=".svg"]')).map(img => {
      const rect = img.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      return { name: img.src.split('/').pop(), top: rect.top + scrollY };
    })
  );

  for (const svg of svgs) {
    const pageNum = Math.floor(svg.top / LETTER_H) + 1;
    const snapY = Math.max(0, svg.top - 60); // show a little context above
    const label = svg.name.replace('.svg', '');
    console.log(`SVG "${svg.name}" → page ~${pageNum} (y=${Math.round(svg.top)})`);
    await scrollShot(page, path.join(subDir, `svg-${label}.png`), snapY);
  }

  await ctx.close();
  await browser.close();
  console.log('\nGate 1 done. Files in dist/screenshots/gate1/');
}

async function gate2(fileUrl) {
  const subDir = path.join(SHOTS_DIR, 'gate2');
  fs.mkdirSync(subDir, { recursive: true });

  const FOOTER_TPL = `
    <div style="font-family:'Source Sans 3',Arial,sans-serif;font-size:9pt;color:#595959;
                width:100%;display:flex;justify-content:space-between;padding:0 0.6in;">
      <span>lailarallc.com/standards · Verified June 2026</span>
      <span><span class="pageNumber"></span></span>
    </div>`;

  const browser = await chromium.launch({ executablePath: CHROME_PATH, headless: true });

  // PDF with footer
  const { page: pdfPage, ctx: pdfCtx } = await openPage(browser, fileUrl, LETTER_W, LETTER_H);
  await generatePDF(pdfPage, path.join(DIST_DIR, 'gate2-print.pdf'), FOOTER_TPL);
  await pdfCtx.close();

  // Screenshots — emulate print media so they match the PDF layout
  // (TOC hidden, tool links hidden, page breaks applied)
  const { page, ctx } = await openPage(browser, fileUrl, LETTER_W, LETTER_H);
  await page.emulateMedia({ media: 'print' });

  const totalH = await page.evaluate(() => document.documentElement.scrollHeight);
  const totalPages = Math.ceil(totalH / LETTER_H);
  console.log(`Print-emulated height: ${totalH}px → ${totalPages} pages`);

  for (let i = 0; i < totalPages; i++) {
    const num = String(i + 1).padStart(2, '0');
    await scrollShot(page, path.join(subDir, `page-${num}.png`), i * LETTER_H);
  }

  await ctx.close();
  await browser.close();
  console.log(`\nGate 2 done. ${totalPages} screenshots in dist/screenshots/gate2/`);
}

async function pdf(fileUrl) {
  const FOOTER_TPL = `
    <div style="font-family:'Source Sans 3',Arial,sans-serif;font-size:9pt;color:#595959;
                width:100%;display:flex;justify-content:space-between;padding:0 0.6in;">
      <span>lailarallc.com/standards · Verified June 2026</span>
      <span><span class="pageNumber"></span></span>
    </div>`;

  const browser = await chromium.launch({ executablePath: CHROME_PATH, headless: true });
  const { page, ctx } = await openPage(browser, fileUrl, LETTER_W, LETTER_H);
  const outPath = path.join(DIST_DIR, 'lailara-data-standards-cheat-sheet.pdf');
  const bytes = await generatePDF(page, outPath, FOOTER_TPL);
  await ctx.close();
  await browser.close();

  const kb = Math.round(bytes / 1024);
  const mb = (bytes / 1048576).toFixed(2);
  console.log(`\nProduction PDF: ${kb} KB (${mb} MB)`);
  if (bytes < 10 * 1048576) {
    console.log('✓ Under 10 MB — email-safe');
  } else {
    console.log('✗ Over 10 MB — compress before emailing');
  }
}

(async () => {
  fs.mkdirSync(DIST_DIR, { recursive: true });
  fs.mkdirSync(SHOTS_DIR, { recursive: true });

  const fileUrl = 'file:///' + INDEX_PATH.replace(/\\/g, '/');

  if (MODE === 'gate1') await gate1(fileUrl);
  else if (MODE === 'gate2') await gate2(fileUrl);
  else if (MODE === 'pdf') await pdf(fileUrl);
  else {
    console.error(`Unknown mode: ${MODE}. Use gate1, gate2, or pdf.`);
    process.exit(1);
  }
})();
