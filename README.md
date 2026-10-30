# whoami

Personal portfolio of Priyanshu, cybersecurity professional. Two ways in:

- **Terminal mode** (`terminal.html`): a shell where visitors type commands (`help`, `whoami`, `experience`, `sudo hire priyanshu`, ...).
- **Portfolio mode** (`portfolio.html`): a plain-language, scroll-through page.

All content lives in [`assets/data.js`](assets/data.js); both views render from it. Add CTF writeups or blog posts to the `writeups` array there.

Static site, no build step. Preview locally with `python3 -m http.server` and open http://localhost:8000.
