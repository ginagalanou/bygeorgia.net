// Keep purchase destinations together so future editions/listings are easy to update.
export const directBookUrl = 'https://shop.ingramspark.com/b/084?params=6ENstpOCBkciZ66BVMHF4iKw8Yih3PRPxVJ1pUthQiC';
export const amazonBookUrl = 'https://www.amazon.com/When-Grow-Wings-Georgia-Luchen/dp/B0DTTH1P5M';
export const amazonRegionalUrls = [
  { label: 'Amazon UK', url: 'https://www.amazon.co.uk/When-Grow-Wings-Georgia-Luchen/dp/B0DTTH1P5M' },
  { label: 'Amazon Germany', url: 'https://www.amazon.de/-/en/When-Grow-Wings-Georgia-Luchen/dp/B0DTTH1P5M' },
];
export const bookPath = '/books/when-i-grow-wings';
export const bookUrl = `https://bygeorgia.net${bookPath}`;
export const bookDescription = 'A story about growing in your own time. Discover When I Grow Wings, a children’s book created by mother and son Georgia G. Luchen and Vasileios G. Luchen.';
export const bookSchema = {
  '@context': 'https://schema.org', '@type': 'Book', name: 'When I Grow Wings',
  author: [{ '@type': 'Person', name: 'Georgia G. Luchen' }, { '@type': 'Person', name: 'Vasileios G. Luchen' }],
  isbn: '9798348317522', bookFormat: 'https://schema.org/Hardcover', numberOfPages: 18,
  datePublished: '2025-01-20', publisher: { '@type': 'Organization', name: 'Nous & Kosmos' },
  inLanguage: 'en', image: 'https://bygeorgia.net/when-i-grow-wings-artwork.jpg', url: bookUrl,
};

function purchaseLinks(escape) {
  return `<div class="purchase-links">
    <div><a class="purchase primary" href="${escape(directBookUrl)}" target="_blank" rel="noopener noreferrer">Buy Direct <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a><small>Purchase through the publisher</small></div>
    <div><a class="purchase" href="${escape(amazonBookUrl)}" target="_blank" rel="noopener noreferrer">Buy on Amazon <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a><small>View available Amazon options</small></div>
  </div><div class="regional-purchases" aria-label="Other Amazon stores">${amazonRegionalUrls.map(({ label, url }) => `<a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)}<span class="sr-only"> (opens in a new tab)</span></a>`).join('<span aria-hidden="true"> · </span>')}</div>`;
}

export function renderBookBody(escape) {
  return `<a class="skip-link" href="#main">Skip to content</a>
<header class="editorial-nav wrap"><a class="wordmark" href="/">ByGeorgia<span class="brand-dot">.</span></a><nav aria-label="Book navigation"><a class="movement" href="/">#ByGeorgia</a><a href="#story">The story</a><a href="#purchase">Get the book <span aria-hidden="true">↗</span></a></nav></header>
<main id="main" class="book-page">
  <section class="book-hero wrap" aria-labelledby="book-title">
    <div class="book-intro"><div class="hero-heading"><p class="kicker">A children’s book by a mother and son</p>
      <h1 id="book-title">When I<br>Grow <em>Wings</em></h1>
      <p class="byline">Georgia G. Luchen &amp; Vasileios G. Luchen</p>
      </div><div class="hero-description"><p class="positioning">A story about growing<br>in your own time.</p>
      <p class="intro-copy">A young caterpillar struggles to keep pace with the world around him until he discovers that transformation does not happen on anyone else’s schedule.</p>
      ${purchaseLinks(escape)}
    </div></div>
    <figure class="artwork-presentation"><div class="artwork-halo" aria-hidden="true"></div><img src="/when-i-grow-wings-artwork.jpg" srcset="/when-i-grow-wings-artwork-small.jpg 640w, /when-i-grow-wings-artwork.jpg 1280w" sizes="(max-width: 760px) 88vw, 46vw" width="1280" height="1280" fetchpriority="high" alt="Illustration from When I Grow Wings: a smiling green caterpillar with luminous, colourful butterfly wings in a sunlit landscape."><figcaption>A little courage. A whole world of possibility.</figcaption></figure>
  </section>
  <section class="story-section wrap" id="story" aria-labelledby="story-title"><p class="kicker">The Story</p><div><h2 id="story-title">Every child grows wings<br>in their <em>own time.</em></h2><p>When his friends begin to fly, a young caterpillar wonders why his own wings haven’t arrived. With a little encouragement, he keeps learning, growing, and trying — until his own moment comes.</p><p><cite>When I Grow Wings</cite> celebrates children finding their own path, their own beauty, and their own moment to become. For every caterpillar destined to become a butterfly, the world is richer for their differences.</p></div></section>
  <section class="together-section" aria-labelledby="together-title"><div class="wrap together-grid"><div><p class="kicker">Behind the Book</p><h2 id="together-title">Written by <br>a mother <br><em>and son.</em></h2><div class="wing-lines" aria-hidden="true"></div></div><div class="together-copy"><p><cite>When I Grow Wings</cite> began as something Georgia and her son Vasilis created together. What emerged was a story for children finding their own way through a world that can be very quick to tell them where they should be and when they should get there.</p><p class="dedication">Dedicated to Georgia’s children, who shine in their own remarkable ways, and to all the little caterpillars following their own perfect pace and carving their unique paths in this world.</p></div></div></section>
  <section class="themes wrap" aria-label="Ideas at the heart of the book"><p><span class="theme-seed" aria-hidden="true"></span>Grow at your <br><em>own pace</em></p><p><span class="theme-leaf" aria-hidden="true"></span>Find beauty <br><em>in difference</em></p><p><span class="theme-wings" aria-hidden="true"></span>Become in <br><em>your own time</em></p></section>
  <section class="details-section wrap" aria-labelledby="details-title"><div><p class="kicker">A closer look</p><h2 id="details-title">The book</h2></div><dl>${[['Title','When I Grow Wings'],['Written by','Georgia Galanou Luchen and Vasileios Galanos Luchen'],['Illustrations','Illustrations generated with the assistance of Gemini, a large language model.'],['Format','Hardcover'],['Pages','18'],['Language','English'],['Publication date','January 20, 2025'],['ISBN','9798348317522'],['Publisher','Nous & Kosmos']].map(([key,value])=>`<div><dt>${escape(key)}</dt><dd>${escape(value)}</dd></div>`).join('')}</dl></section>
  <section class="authors-section wrap" aria-labelledby="authors-title"><p class="kicker">The people behind the pages</p><h2 id="authors-title">About the Authors</h2><div class="authors-grid"><article><h3>Georgia G. Luchen</h3><p>Georgia G. Luchen is a writer, creator, and mother who is interested in the stories we tell about growth, identity, family, and becoming. <cite>When I Grow Wings</cite> was written together with her son and dedicated to her children.</p></article><article><h3>Vasileios G. Luchen</h3><p>Vasileios G. Luchen is a young creator and co-author of <cite>When I Grow Wings</cite>. He is wise beyond his years and a passionate, creative problem solver. He inspired this story, managed the creative direction of the designs, and helped develop the narrative from prototype to execution.</p></article></div></section>
  <section class="closing" id="purchase" aria-labelledby="closing-title"><div class="wrap"><p class="kicker">A story to grow with</p><h2 id="closing-title">For every little one<br><em>growing wings.</em></h2><p><cite>When I Grow Wings</cite> is available to purchase directly or through Amazon.</p>${purchaseLinks(escape)}</div></section>
</main><footer class="editorial-footer wrap"><a class="wordmark" href="/">ByGeorgia<span class="brand-dot">.</span></a><p>Books, apps, and things made with care.</p><a href="/">Explore ByGeorgia <span aria-hidden="true">↗</span></a></footer>`;
}
