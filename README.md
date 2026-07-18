# CDC 2026 Workshop Website

Static, responsive workshop webpage for **Generative AI Meets Control and Optimization: Theory, Algorithms, and Systems**.

## Files

- `index.html` — page content and external academic profile links
- `styles.css` — responsive visual design
- `script.js` — mobile navigation and headshot fallbacks
- `workshop.ics` — calendar event
- `assets/workshop-proposal.pdf` — source proposal

## Preview

Open `index.html` in a browser. For local development, run a small web server from this directory, for example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publishing

This folder can be published directly with GitHub Pages, Netlify, or another static-site host.

## Headshots and biographies

The page references public headshots hosted on the organizers’ and speakers’ academic or institutional webpages. Each portrait and name links to the corresponding academic profile. If a remote image cannot load, the page automatically displays the person’s initials.

Before public release, confirm final speaker participation, affiliations, talk titles, schedule, room, and workshop acceptance status.
