# Lazat Catering

A static catering website I built to practice HTML, CSS, and JavaScript around
Indo-Pakistani food. I kept a cream, red, and black colour scheme and a sample menu.
This is a student demo, not a live business listing or ordering service.

## Try it

```sh
python3 -m http.server 8000
```

Open the served page in a browser. There are no packages to install. The mobile
menu supports keyboard navigation and Escape. The enquiry form validates input and
shows a local preview; it does **not** send email or store details. Use fictional
input. With JavaScript disabled, the menu links and content remain available and
the preview button is disabled.

I practiced responsive grids, form labels, native dialogs, focus handling, and
using `textContent` to display input safely. The layout keeps the food cards
visible without scroll animations and respects reduced-motion preferences.

Photos come from Unsplash URLs in `index.html` and are illustrative, not photos of
this business's dishes. Google Fonts and Unsplash need Internet access; system
fonts and photo notices are the fallback. Prices and the service area are samples.
Real contact details, business claims, original photos, and a working enquiry
backend would need verification before using this as an actual catering site.

Basic checks: `node --check script.js`, then test the navigation and form in a
browser at narrow and wide widths. No build step or automated test runner is required.
