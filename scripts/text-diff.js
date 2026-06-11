/**
 * text-diff.js
 * Compares screen-visible text vs print-visible text.
 * Reports what the print stylesheet hides (intentionally or otherwise).
 *
 * Usage: node scripts/text-diff.js
 */

const { chromium } = require('playwright-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const ROOT = path.resolve(__dirname, '..');
const INDEX_PATH = path.join(ROOT, 'index.html');

function tokenise(text) {
  return new Set(
    text
      .replace(/\s+/g, ' ')
      .trim()
      .split(/\b/)
      .map(t => t.trim())
      .filter(t => t.length > 2)
  );
}

async function getVisibleText(page) {
  return page.evaluate(() => {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const el = node.parentElement;
          if (!el) return NodeFilter.FILTER_REJECT;
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden') {
            return NodeFilter.FILTER_REJECT;
          }
          // Walk up to check ancestors
          let ancestor = el.parentElement;
          while (ancestor && ancestor !== document.body) {
            const as = window.getComputedStyle(ancestor);
            if (as.display === 'none' || as.visibility === 'hidden') {
              return NodeFilter.FILTER_REJECT;
            }
            ancestor = ancestor.parentElement;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const parts = [];
    let node;
    while ((node = walker.nextNode())) {
      const t = node.textContent.trim();
      if (t) parts.push(t);
    }
    return parts.join(' ');
  });
}

async function getHiddenElements(page) {
  return page.evaluate(() => {
    const hidden = [];
    const HIDE_SELECTORS = [
      '.toc',
      '.section-tools',
      '.tool-link',
      '.verified-stamp',
      '.site-footer',
    ];
    for (const sel of HIDE_SELECTORS) {
      document.querySelectorAll(sel).forEach(el => {
        const text = el.textContent.trim().replace(/\s+/g, ' ');
        if (text) hidden.push({ selector: sel, text: text.slice(0, 120) });
      });
    }
    return hidden;
  });
}

(async () => {
  const fileUrl = 'file:///' + INDEX_PATH.replace(/\\/g, '/');

  const browser = await chromium.launch({ executablePath: CHROME_PATH, headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(fileUrl, { waitUntil: 'networkidle' });

  // Screen text
  const screenText = await getVisibleText(page);

  // Hidden element inventory (before applying print CSS)
  const hiddenInPrint = await getHiddenElements(page);

  // Print text
  await page.emulateMedia({ media: 'print' });
  const printText = await getVisibleText(page);

  await ctx.close();
  await browser.close();

  const screenTokens = tokenise(screenText);
  const printTokens = tokenise(printText);

  const onlyInScreen = [...screenTokens].filter(t => !printTokens.has(t));
  const onlyInPrint = [...printTokens].filter(t => !screenTokens.has(t));

  console.log('=== INTENTIONALLY HIDDEN IN PRINT ===');
  for (const item of hiddenInPrint) {
    console.log(`\n  [${item.selector}]`);
    console.log(`  "${item.text}${item.text.length >= 120 ? '...' : ''}"`);
  }

  console.log('\n=== TOKEN DIFF ===');
  console.log(`Screen tokens: ${screenTokens.size}`);
  console.log(`Print tokens:  ${printTokens.size}`);
  console.log(`Only in screen (hidden from print): ${onlyInScreen.length} unique tokens`);
  console.log(`Only in print (new in print): ${onlyInPrint.length} unique tokens`);

  if (onlyInPrint.length > 0) {
    console.log('\nTokens that appear in print but NOT screen (unexpected):');
    console.log(onlyInPrint.slice(0, 20).join(', '));
  } else {
    console.log('\n✓ No unexpected content in print that was absent from screen.');
  }

  const unexpectedlyLost = onlyInScreen.filter(t => {
    // Exclude tokens that belong to intentionally hidden elements
    const hiddenText = hiddenInPrint.map(h => h.text).join(' ');
    return !hiddenText.includes(t);
  });

  if (unexpectedlyLost.length > 0) {
    console.log(`\n⚠ Tokens in screen but not print (beyond intentional hiding): ${unexpectedlyLost.length}`);
    console.log('First 30:', unexpectedlyLost.slice(0, 30).join(', '));
  } else {
    console.log('\n✓ No content lost beyond the intentionally hidden chrome.');
  }
})();
