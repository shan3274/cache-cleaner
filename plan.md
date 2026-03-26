🎯 Problem You’re Solving

Users face login issues because of:
- Corrupted cookies
- Expired session tokens
- Old cached JS files
- LocalStorage conflicts
- Multiple environment logins (prod + test)

Instead of telling users:
“Clear browser cache and try again”

You create a Smart Edge Extension that:
- Detects login failures
- Clears only required domain cache
- Preserves safe data
- Provides an option for full browser cache clearing
- Auto reloads page

🧠 How Smart Cache Cleaner Should Work

Level 1 – Manual Smart Clean (Current)
- Clear current domain data (Cookies, Cache, LocalStorage).
- Clear entire browser cache for deep troubleshooting.

Level 2 – Auto Detect Login Failure
- Extension detects:
  - 401 / 403 responses
  - “Session expired” text in DOM
  - Redirect loop
- Then shows popup: "Login issue detected. Fix now?"

Level 3 – Enterprise Mode (Advanced)
- Whitelist safe domains
- Don’t clear SSO provider cookies
- Detect Azure AD / Okta conflicts

🏗 Tech Stack for Edge Extension
Microsoft Edge uses Chromium, so same as Chrome Extension.
- Manifest V3
- JavaScript
- chrome.browsingData API
- chrome.cookies API

📁 Folder Structure
- manifest.json: Permissions and configuration.
- background.js: Logic for clearing cache and domain data.
- popup.html: Extension UI with cleaning options.
- popup.js: UI interactions.
- content.js: Page analysis (for Level 2).
- icons/: Extension icons.