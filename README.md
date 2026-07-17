# Omnignis website (v3, porcelain)

Static site, no build step. Edit files, `git push`, Vercel auto-deploys.

## What changed in v3
- **House style: no em dashes anywhere in site copy.** Use commas, colons, periods, or parentheses instead.
- **One design system, every page.** All pages now share `assets/styles.css`, derived from the dental page: porcelain background, blue-slate ink, ember accent, Bricolage Grotesque + Public Sans + IBM Plex Mono. The old dark Fraunces theme is gone.
- **Repositioned: cybersecurity first.** Nav brand reads OMNIGNIS / CYBERSECURITY. Services page leads with Assess & Harden → Ongoing Protection → Custom Software (on request) → Churches. "Security Snapshot" renamed **Cybersecurity Snapshot**.
- **Header:** black link text, `Home` link on every page, brand mark always returns home. `Dental` added to the nav and footer site-wide.
- **New pages on the system:** index and dental now use the shared stylesheet (was inline CSS); services, about, contact, book, churches, privacy, terms, data-deletion, and 404 all restyled.
- **"What we don't do"** (cameras/alarms, 24/7 IR, investigations) now appears on index AND services. Keep this; it's a legal guardrail, not just copy.
- **CTA wording unified to "Book a call".** The Calendly event is 30 minutes, so pages no longer promise a "15-minute" call.
- **Nav mark is an inline SVG flame** (matches the dental page), with no dependency on emblem-nav.webp contrast against the light background. `assets/emblem.webp` is still used on About (and can be swapped back into the nav if it reads well on porcelain).

## Files in this bundle
```
index.html  dental.html  services.html  about.html  contact.html
book.html   churches.html  privacy.html  terms.html  data-deletion.html
404.html    assets/styles.css   assets/nav.js (unchanged)
```
Not included (unchanged, keep yours): `vercel.json`, `assets/` images (favicon.png, og-image.png, emblem.webp, emblem-nav.webp).

## Deploy
```
cd ~/Desktop/Ominignis/Site/omnignis-full
# unzip omnignis-site-v3.zip here (it overwrites the html + assets/styles.css + assets/nav.js)
git add .
git commit -m "v3: porcelain design system site-wide, cybersecurity-first, dental in nav"
git push
```
Vercel redeploys in ~20 seconds. Refresh omnignis.com in a private window to skip the cache.

## Before you send the dental link to anyone
1. Confirm the BU degree line on index + about ("master's in computer science, cybersecurity concentration"); if not yet conferred, add "(2026)".
2. Click through the Calendly embed on /book once end-to-end.
3. Send `omnignis.com/dental`. That's the page for the phone calls.

## Note on the church portal
Unchanged: the Churches page describes the service; the actual app lives at
portal.omnignis.com (separate build, pending Meta business verification).
