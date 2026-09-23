import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/index.js';
import { directBookUrl, amazonBookUrl, bookUrl } from '../src/book.js';
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
  assert.equal(schema.url, bookUrl);
  assert.equal(directBookUrl, 'https://shop.ingramspark.com/b/084?params=6ENstpOCBkciZ66BVMHF4iKw8Yih3PRPxVJ1pUthQiC');
  assert.equal(amazonBookUrl, 'https://www.amazon.com/s?k=9798348317522');
  for (const url of [directBookUrl, amazonBookUrl]) assert.equal(html.split(`href="${url}" target="_blank" rel="noopener noreferrer"`).length - 1, 2);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
});
test('static assets are delegated to the existing assets binding', async () => {
  for (const path of ['/editorial.css', '/when-i-grow-wings-cover.jpg', '/when-i-grow-wings-cover-small.jpg', '/when-i-grow-wings-og.png']) {
    const result = await response(path, { ASSETS: { fetch: request => new Response(new URL(request.url).pathname) } });
    assert.equal(await result.text(), path);
  }
});
test('Family Play HTML remains identical to the pre-book implementation', async () => {
  // Whitespace-normalized baseline from commit 5c1264c; independent of local git history.
  const html = await (await response('/family-play')).text();
  assert.equal(createHash('sha256').update(html.replace(/\s+/g, ' ')).digest('hex'), '1276c492288615463dbf0dc2304694041d7d93f6f5dfd6d6d2e825c584f8c180');
});
