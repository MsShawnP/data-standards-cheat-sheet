# Failures

## 2026-06-11 — PowerShell `&&` chaining breaks in PS 5.1

**What failed:** `cmd1 && cmd2` in PowerShell 5.1 throws `InvalidEndOfLine` — pipeline chain operators don't exist in this version.

**Fix:** Use separate tool calls, or chain with `;` (unconditional) or `if ($?) { ... }` (conditional). Switch to Bash tool for multi-command git operations.

**Tags:** powershell, tooling

---

## 2026-06-11 — PowerShell here-string silently fails for `git commit -m`

**What failed:** `git commit -m @'...'@` — PowerShell here-string with a multi-line message caused git to parse individual words as pathspecs. No parse error shown; git threw confusing "did not match any file" errors.

**Fix:** Write the commit message to a temp file (e.g., `.git/COMMIT_MSG_TMP`) and pass it with `git commit -F <file>`. Delete the temp file after.

**Tags:** powershell, git, tooling

---

## 2026-06-11 — PowerShell `Select-String -SimpleMatch` treats `^` as literal

**What failed:** `Select-String -Pattern "^draft:" -SimpleMatch` returned no matches because `-SimpleMatch` disables regex — `^` is treated as a literal character, not start-of-line. All 26 blog posts appeared to have no `draft` field.

**Fix:** Use the Grep tool (ripgrep) directly, or omit `-SimpleMatch` when using regex anchors.

**Tags:** powershell, grep, tooling

---

## 2026-06-11 — `npm run build | Select-Object -First 50` reports exit code 255

**What failed:** Piping a long-running process to `Select-Object -First 50` kills the pipe when the limit is reached, which PowerShell treats as a broken pipe — the npm process exits non-zero even though the build succeeded.

**Fix:** Run `npm run build` without piping for authoritative exit code. Pipe only to tail the last N lines: `| Select-Object -Last 30`.

**Tags:** powershell, npm, tooling
