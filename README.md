# Omnignis Technologies — full website

A complete static site. No server, no build step, no Python. A host just serves
these files, so once deployed it runs 24/7 — your Mac is only used to upload it.

## Pages
- `index.html` — home
- `about.html` — about / the story
- `services.html` — the three offerings + how-it-works
- `contact.html` — contact form
- `cart.html` — placeholder "store coming soon" (remove anytime)
- `404.html` — page-not-found
- `assets/styles.css` — **all styling lives here.** Edit once, every page updates.
- `assets/` — also holds the emblem images, favicon, and social-share image

All pages link the same stylesheet, so changing a color or font in
`assets/styles.css` updates the entire site at once.

---

## Preview it locally
Because pages link to each other and to `assets/`, run a tiny local server
(don't just double-click — links to `/assets/` resolve better through a server):

```
cd /Users/christianrobinson/Desktop/Ominignis/Site
npx serve .        # then open the URL it prints (or:)
python3 -m http.server 8000   # then open http://localhost:8000
```

---

## Step 1 — Connect the contact form (2 minutes)
The form needs a free service to receive submissions (a static site can't email on its own).

1. Make a free account at https://formspree.io
2. Create a form; copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`
3. In `contact.html`, find `action="https://formspree.io/f/YOUR_FORM_ID"` and
   replace `YOUR_FORM_ID` with your real ID.

That's it — submissions land in your inbox, and the page shows a "Message sent"
confirmation. (Prefer no account? https://web3forms.com works the same way with
an access key.)

---

## Step 2 — Put it online (free, runs 24/7)
Pick one:
- **Vercel** — vercel.com → Add New → Project → import this folder/repo →
  Framework: **Other** → Deploy. (Note: Vercel's free tier is non-commercial;
  for a business site use a paid plan, or use one of the two below.)
- **Cloudflare Pages** — pages.cloudflare.com → upload this folder. Free tier
  allows commercial use.
- **Netlify** — drag this folder onto app.netlify.com/drop.

All three give free SSL and a live URL instantly.

---

## Step 3 — Point omnignis.com at it
1. In your host, add the custom domain `omnignis.com` (and `www`).
2. It shows the exact DNS records to add (an A record and/or a CNAME).
3. Add those in your **Squarespace Domains** dashboard (where your Google
   domain migrated). SSL turns on automatically.
4. **Leave the MX records alone** — those run your Google Workspace email.
   You're only touching the A/CNAME records for the website.

---

## Editing tips
- Text and links: edit the relevant `.html` file directly.
- Colors, fonts, spacing: `assets/styles.css`, top of the file (the `:root` block).
- Your contact email appears in the footer of every page and on the contact page
  — search for `hello@omnignis.com` to change it everywhere.
- The "M.S. / 100% / 3" stats and the About copy use placeholder wording — make
  them yours.
