# Decisions

## 2026-06-10 — Plain HTML/CSS over Astro

Plain HTML/CSS, no build step.

**Why:** The brief calls this a "wall chart" — a single static reference page with no interactive tools, no component reuse, no dynamic data. Astro adds a build pipeline and dependency surface with zero benefit for one file. Flat HTML is faster to iterate, simpler to deploy anywhere, and has no toolchain to break.

**How to apply:** Do not add a build step, package.json, or framework unless the scope changes materially (e.g., multi-page site, interactive components).

## 2026-06-11 — LinkedIn launch posts are chat work, not CC

CC-generated LinkedIn copy is generic and misses voice. Launch posts for Lailara artifacts are drafted in chat against the live URL, not generated in a Claude Code session.

**Why:** CC writes weak LinkedIn copy — established as a standing rule this session after considering and rejecting CC-drafted post.

**How to apply:** When a project ships, do not add a "write LinkedIn post" task to PLAN.md. Note instead: "Launch post: drafted in chat against live URL."

**Do not:** Re-add LinkedIn post tasks to project checklists or ask CC to draft them.

## 2026-06-11 — PDF download is plain link; email gate deferred until Buttondown

The PDF at /standards is a plain relative href with no form, no gate, no Formspree endpoint. Fully open.

**Why:** Email-gate wiring requires a confirmed Buttondown account. Shipping a visible form that silently drops emails is worse than no form. The gate is a separate session once Buttondown is confirmed.

**How to apply:** Do not add a Formspree endpoint or email-capture form to /standards until Buttondown is wired in the website repo. The Footer.tsx has a TODO comment marking the exact location.
