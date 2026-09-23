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
`src/book.js`. Amazon currently uses the ISBN search fallback; replace
`amazonBookUrl` with a verified product URL if desired. Family Play's rendering
and styles remain unchanged. The new hub and book share `public/editorial.css`.

The supplied square artwork is preserved without cropping. Local JPEGs at 1280px
and 640px support responsive delivery. The 1200 × 630 social image uses the same
artwork. `scripts/prepare-book-images.py` regenerates these assets with Pillow
(development only), using Georgia/Arial fonts from macOS. Generated images are
committed; deployment needs neither Python nor font files.

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
