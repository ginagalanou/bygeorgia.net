# bygeorgia.net

Cloudflare Worker site for ByGeorgia.

## Routes

- `/` is the ByGeorgia product directory.
- `/family-play` is the Family Play support page.

## Cloudflare build settings

- Build command: leave blank
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

## Local development

```bash
npm install
npm run dev
```

## Books and the creative-project hub

- `/` introduces Georgia's books, apps, and creative projects.
- `/books/when-i-grow-wings` is the canonical book page.
- `/books` temporarily redirects there (302), reserving the route for a future catalogue.
- Both book routes accept a trailing slash, matching the existing route convention.

The Worker still renders HTML without client-side JavaScript or a framework. Book
content, structured data, and the `directBookUrl` / `amazonBookUrl` constants live in
`src/book.js`. Amazon uses the supplied US hardcover listing. `amazonRegionalUrls` contains
the supplied UK and Germany hardcover listings, with tracking parameters removed. Family Play's rendering
and styles remain unchanged. The new hub and book share `public/editorial.css`.

The hero and Book metadata use the actual published cover from the supplied
IngramSpark image listing, fetched at 1140 × 1200 and stored locally. The cover's
artwork, title, proportions and author lettering are preserved. A subtle CSS spine
and shadow provide the book presentation without creating a new cover.

Original supplied illustrations appear in the story and inside-art sections. CSS
shapes the story scene's background corners; no characters are redrawn or generated.
The private draft PDF is not published, and no invented interior spread is shown.
`scripts/prepare-story-assets.py` optimizes the original JPEGs and downloaded cover
using Pillow (development only). Pass the original images directory and cover file.
Run it before `scripts/prepare-book-images.py`, which creates the main artwork sizes
and the 1200 × 630 social image using the published cover. Images are committed;
deployment needs neither Python nor system fonts.

## Validation

```bash
npm test
npm run deploy -- --dry-run
# Or run both:
npm run validate
```

Tests cover routing and trailing slashes, the temporary redirect, 404 responses,
metadata, Book JSON-LD, exact purchase URLs and external-link attributes, asset
routing, and a whitespace-normalized SHA-256 regression check of Family Play's
original HTML (baseline commit `5c1264c`).

For visual review, run `npm run dev` and inspect the hub, book, Family Play and a
missing route at desktop, tablet and narrow mobile widths. Check image loading,
keyboard focus, internal anchors, retailer destinations and browser console errors.
The book canonical and sharing URLs always point to production, even in previews.
