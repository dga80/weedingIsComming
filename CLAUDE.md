# Developer Notes & Policies

## Git Policy
- **Automatic Commits**: After making any changes/modifications to the code, style, or assets, you MUST commit the changes with a concise commit message and push them to the remote repository on GitHub:
  ```bash
  git add .
  git commit -m "<message>"
  git push
  ```

## Build & Test Commands
- **Local Dev Server**: Run a local HTTP server to preview changes:
  ```bash
  python3 -m http.server 8080 --bind 127.0.0.1
  ```
