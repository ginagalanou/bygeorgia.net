import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/index.js';
import { directBookUrl, amazonBookUrl, amazonRegionalUrls, bookUrl } from '../src/book.js';
import { createHash } from 'node:crypto';

const response = (path, env = {}) => worker.fetch(new Request(`https://bygeorgia.net${path}`), env);
test('all page routes, trailing slashes, temporary catalogue redirect and 404', async () => {
  for (const path of ['/', '/family-play', '/family-play/', '/books/when-i-grow-wings', '/books/when-i-grow-wings/']) assert.equal((await response(path)).status, 200, path);
  for (const path of ['/books', '/books/']) {
    const result = await response(path);
    assert.equal(result.status, 302);
    assert.equal(result.headers.get('location'), bookUrl);
  }
  assert.equal((await response('/does-not-exist')).status, 404);
});
test('book canonical, social metadata, structured data and safe purchase links', async () => {
  const html = await (await worker.fetch(new Request('https://preview.example/books/when-i-grow-wings'), {})).text();
  assert.ok(html.includes(`<link rel="canonical" href="${bookUrl}">`));
  assert.ok(html.includes('https://bygeorgia.net/when-i-grow-wings-og.png'));
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(schema.isbn, '9798348317522');
  assert.equal(schema.author.length, 2);
  assert.equal(schema.numberOfPages, 18);
  assert.equal(schema.image, 'https://bygeorgia.net/when-i-grow-wings-cover.jpg');
  assert.equal(schema.url, bookUrl);
  assert.equal(directBookUrl, 'https://shop.ingramspark.com/b/084?params=6ENstpOCBkciZ66BVMHF4iKw8Yih3PRPxVJ1pUthQiC');
  assert.equal(amazonBookUrl, 'https://www.amazon.com/When-Grow-Wings-Georgia-Luchen/dp/B0DTTH1P5M');
  for (const url of [directBookUrl, amazonBookUrl, ...amazonRegionalUrls.map(({url}) => url)]) assert.equal(html.split(`href="${url}" target="_blank" rel="noopener noreferrer"`).length - 1, 2);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
});
test('static assets are delegated to the existing assets binding', async () => {
  for (const path of ['/editorial.css', '/when-i-grow-wings-artwork.jpg', '/when-i-grow-wings-artwork-small.jpg', '/when-i-grow-wings-og.png', '/when-i-grow-wings-cover.jpg', '/when-i-grow-wings-cover-small.jpg', '/wings-encouragement.jpg', '/wings-friend-small.jpg', '/wings-growing-small.jpg']) {
    const result = await response(path, { ASSETS: { fetch: request => new Response(new URL(request.url).pathname) } });
    assert.equal(await result.text(), path);
  }
});
test('Family Play HTML matches the approved support page with download CTA', async () => {
  // Whitespace-normalized approved baseline, independent of local git history.
  const html = await (await response('/family-play')).text();
  assert.equal(createHash('sha256').update(html.replace(/\s+/g, ' ')).digest('hex'), '978f882391f1601096425b2fe9d3ab867341c8d46425750a746c3325bd8c621e');
});

test('the book has its own favicon without changing the hub or Family Play', async () => {
  const book = await (await response('/books/when-i-grow-wings')).text();
  assert.ok(book.includes('<link rel="icon" href="/when-i-grow-wings-favicon.svg">'));
  for (const path of ['/', '/family-play']) {
    const html = await (await response(path)).text();
    assert.ok(html.includes('<link rel="icon" href="/favicon.png">'));
  }
});

test('Family Play offers the verified App Store download as its primary action', async () => {
  const html = await (await response('/family-play')).text();
  const appStoreUrl = 'https://apps.apple.com/us/app/family-play-screen-free-games/id6804775809';
  assert.ok(html.includes(`href="${appStoreUrl}" target="_blank" rel="noopener noreferrer"`));
  assert.ok(html.includes('Download on the App Store'));
  assert.ok(html.includes(`href="mailto:galanouconsulting@gmail.com">Email Support</a>`));
});
