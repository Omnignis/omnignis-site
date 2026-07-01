# Omnignis Technologies — website (v2)

Static site, no build step. Edit files, `git push`, Vercel auto-deploys.

## Pages
- `index.html` — home (Cybersecurity & Software Development)
- `services.html` — the two focuses + church reporting
- `about.html` — about
- `churches.html` — livestream reports for churches (explainer)
- `book.html` — schedule a Zoom call (Calendly)
- `contact.html` — contact form
- `404.html` — not found
- `assets/styles.css` — all styling, one file

## What changed from v1
- Repositioned around **Cybersecurity & Software Development** (two focuses, not three).
- Removed the "All fire / All systems / All secure" tagline everywhere.
- Email is now **info@omnignis.com** site-wide.
- Added **Book a call** (Calendly) and a **Churches** page for the livestream-report service.
- Dropped the old `cart.html`.

## Two things to connect (both free, ~2 min each)

### 1. Booking — book.html
1. Make a free account at https://calendly.com
2. Create a 30-minute event, and under **Integrations** connect **Zoom** (so each booking auto-creates a Zoom link).
3. Copy your event link, e.g. `https://calendly.com/omnignis/30min`
4. In `book.html`, replace `YOUR-CALENDLY` in the `data-url` with your link (keep the `?hide_gdpr_banner=...` part — it themes the calendar to match the site).

### 2. Contact form — contact.html
1. Make a free form at https://formspree.io
2. Copy the endpoint, e.g. `https://formspree.io/f/abcdwxyz`
3. In `contact.html`, replace `YOUR_FORM_ID` in the `action="..."` line.

## Updating + publishing
```
cd /Users/christianrobinson/Desktop/Ominignis/Site/omnignis-full
# copy the new files in, then:
git rm cart.html        # removes the old page (only needed once)
git add .
git commit -m "Redesign: cybersecurity + software dev, booking, churches page"
git push
```
Vercel redeploys in ~20 seconds. Refresh omnignis.com in a private window to skip the cache.

## Note on the church portal
The Churches page describes the service and points people to reach out. The actual
sign-in + "Connect Facebook" + automated Sunday report is a **separate app**
(portal.omnignis.com) — it can't live in this static site. That build is next.
