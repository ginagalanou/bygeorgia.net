const supportEmail = "galanouconsulting@gmail.com";

const css = `
:root {
  --background: #eef4f5;
  --foreground: #1c1c1c;
  --brand-teal: #39b9be;
  --deep-teal: #1e5f68;
  --mint: #d8fcf7;
  --soft-mint: #effffc;
  --orange: #ff8e43;
  --orange-border: #ff7f2a;
  --soft-orange: #fff1e6;
  --paper: #fbfdfd;
  --border: #d9e6e8;
  --muted: #5b6b6e;
}

* {
  box-sizing: border-box;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

main {
  min-height: 100vh;
  overflow-x: hidden;
}

.hero {
  background:
    radial-gradient(circle at 16% 22%, rgba(255, 184, 140, 0.38), transparent 28%),
    linear-gradient(135deg, var(--mint) 0%, #ffffff 52%, var(--soft-orange) 100%);
  border-bottom: 1px solid rgba(30, 95, 104, 0.16);
  padding: 18px clamp(18px, 4vw, 56px) 38px;
}

.hub-page {
  align-items: center;
  background:
    radial-gradient(circle at 18% 18%, rgba(216, 252, 247, 0.9), transparent 34%),
    linear-gradient(135deg, #ffffff 0%, var(--background) 52%, var(--soft-orange) 100%);
  display: flex;
  min-height: 100vh;
  padding: clamp(24px, 5vw, 64px);
}

.hub-hero {
  margin: 0 auto;
  max-width: 820px;
  width: 100%;
}

.hub-hero h1 {
  max-width: 780px;
}

.product-link {
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(30, 95, 104, 0.16);
  border-radius: 8px;
  box-shadow: 0 18px 40px rgba(13, 31, 36, 0.09);
  color: var(--deep-teal);
  display: flex;
  gap: 20px;
  justify-content: space-between;
  max-width: 520px;
  min-height: 104px;
  padding: 22px;
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    border-color 160ms ease;
}

.product-link:hover {
  border-color: rgba(30, 95, 104, 0.32);
  box-shadow: 0 22px 48px rgba(13, 31, 36, 0.12);
  transform: translateY(-2px);
}

.product-link span {
  display: grid;
  gap: 6px;
}

.product-link strong {
  font-size: 1.35rem;
  line-height: 1.2;
}

.product-link small {
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.4;
}

.topbar,
.hero-grid,
.quick-help,
.content-band,
.split-band,
.contact-band {
  margin: 0 auto;
  max-width: 1120px;
}

.topbar {
  align-items: center;
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.brand {
  align-items: center;
  color: var(--deep-teal);
  display: inline-flex;
  font-weight: 800;
  gap: 10px;
  min-width: 0;
}

.brand-mark {
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 8px 18px rgba(13, 31, 36, 0.16);
  display: inline-flex;
  flex: 0 0 auto;
  height: 48px;
  justify-content: center;
  overflow: hidden;
  width: 48px;
}

.brand-mark img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.nav-actions {
  align-items: center;
  color: var(--deep-teal);
  display: flex;
  flex-wrap: wrap;
  font-size: 0.94rem;
  font-weight: 700;
  gap: 16px;
  justify-content: flex-end;
}

.small-button,
.primary-button,
.secondary-button {
  align-items: center;
  border-radius: 8px;
  display: inline-flex;
  font-weight: 800;
  gap: 9px;
  justify-content: center;
  line-height: 1;
  min-height: 44px;
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    border-color 160ms ease;
  white-space: nowrap;
}

.small-button {
  background: var(--deep-teal);
  color: #ffffff;
  padding: 0 14px;
}

.primary-button {
  background: var(--orange);
  border: 1px solid var(--orange-border);
  box-shadow: 0 12px 24px rgba(255, 142, 67, 0.22);
  color: #ffffff;
  padding: 0 20px;
}

.secondary-button {
  background: #ffffff;
  border: 1px solid rgba(30, 95, 104, 0.18);
  color: var(--deep-teal);
  padding: 0 18px;
}

.small-button:hover,
.primary-button:hover,
.secondary-button:hover {
  transform: translateY(-1px);
}

.hero-grid {
  align-items: center;
  display: grid;
  gap: clamp(28px, 5vw, 72px);
  grid-template-columns: minmax(0, 1.02fr) minmax(280px, 0.76fr);
  padding-top: clamp(44px, 8vw, 86px);
}

.hero-copy {
  max-width: 650px;
}

.eyebrow {
  align-items: center;
  color: var(--deep-teal);
  display: inline-flex;
  font-size: 0.84rem;
  font-weight: 900;
  gap: 8px;
  letter-spacing: 0;
  margin: 0 0 14px;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  color: var(--deep-teal);
  font-size: clamp(3rem, 8vw, 5.5rem);
  line-height: 0.94;
  letter-spacing: 0;
  margin-bottom: 22px;
  max-width: 780px;
}

.lead {
  color: #273f44;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  line-height: 1.55;
  margin-bottom: 30px;
  max-width: 620px;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.app-card {
  justify-self: center;
  position: relative;
  width: min(100%, 360px);
}

.app-card::before {
  background: var(--brand-teal);
  border-radius: 8px;
  content: "";
  height: 76%;
  left: -10%;
  opacity: 0.18;
  position: absolute;
  top: 12%;
  transform: rotate(-8deg);
  width: 120%;
}

.phone-shell {
  background: #183f47;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 28px;
  box-shadow: 0 28px 54px rgba(13, 31, 36, 0.2);
  padding: 12px;
  position: relative;
}

.phone-screen {
  aspect-ratio: 9 / 16;
  background: var(--mint);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.phone-screen img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.screen-panel {
  background: rgba(251, 253, 253, 0.94);
  border: 1px solid rgba(30, 95, 104, 0.16);
  border-radius: 8px;
  bottom: 14px;
  box-shadow: 0 12px 28px rgba(13, 31, 36, 0.14);
  color: var(--deep-teal);
  left: 14px;
  padding: 14px;
  position: absolute;
  right: 14px;
}

.screen-panel span {
  color: var(--muted);
  display: block;
  font-size: 0.78rem;
  font-weight: 800;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.screen-panel strong {
  display: block;
  font-size: 1.05rem;
  line-height: 1.25;
}

.quick-help {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 28px clamp(18px, 4vw, 0px);
}

.help-item {
  background: var(--paper);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(13, 31, 36, 0.06);
  min-height: 188px;
  padding: 20px;
}

.help-item .icon {
  color: var(--orange);
  display: block;
  font-size: 1.35rem;
  margin-bottom: 18px;
}

.help-item h2 {
  color: var(--deep-teal);
  font-size: 1.08rem;
  line-height: 1.25;
  margin-bottom: 8px;
}

.help-item p {
  color: var(--muted);
  font-size: 0.96rem;
  line-height: 1.5;
  margin-bottom: 0;
}

.content-band,
.split-band,
.contact-band {
  padding: clamp(34px, 5vw, 64px) clamp(18px, 4vw, 0px);
}

.section-heading {
  max-width: 720px;
}

.section-heading h2,
.split-band h2,
.contact-band h2 {
  color: var(--deep-teal);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.04;
  letter-spacing: 0;
  margin-bottom: 26px;
}

.faq-list {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.faq-item {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 22px;
}

.faq-item h3 {
  color: var(--deep-teal);
  font-size: 1.12rem;
  line-height: 1.25;
  margin-bottom: 10px;
}

.faq-item p,
.privacy-copy p,
.contact-band p,
.not-found p {
  color: #334b50;
  line-height: 1.65;
  margin-bottom: 0;
}

.split-band {
  align-items: start;
  background: transparent;
  border-top: 1px solid rgba(30, 95, 104, 0.12);
  display: grid;
  gap: 34px;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
}

.privacy-copy {
  background: var(--soft-mint);
  border: 1px solid rgba(30, 95, 104, 0.14);
  border-radius: 8px;
  display: grid;
  gap: 16px;
  padding: 26px;
}

.contact-band {
  align-items: center;
  background: linear-gradient(135deg, var(--deep-teal), #287b82);
  border-radius: 8px;
  color: #ffffff;
  display: grid;
  gap: 24px;
  grid-template-columns: minmax(0, 1fr) auto;
  margin-bottom: 34px;
}

.contact-band .eyebrow,
.contact-band h2,
.contact-band p {
  color: #ffffff;
}

.contact-band h2 {
  margin-bottom: 12px;
}

.contact-actions {
  display: grid;
  gap: 12px;
  justify-items: stretch;
}

.not-found {
  margin: 0 auto;
  max-width: 720px;
  padding: 80px 24px;
}

@media (max-width: 860px) {
  .hero-grid,
  .split-band,
  .contact-band {
    grid-template-columns: 1fr;
  }

  .quick-help,
  .faq-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-actions {
    justify-items: start;
  }
}

@media (max-width: 620px) {
  .hero {
    padding-top: 14px;
  }

  .topbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .nav-actions {
    justify-content: flex-start;
    width: 100%;
  }

  .nav-actions > a:not(.small-button) {
    display: none;
  }

  .hero-grid {
    padding-top: 34px;
  }

  h1 {
    font-size: 3.1rem;
  }

  .quick-help,
  .faq-list {
    grid-template-columns: 1fr;
  }

  .help-item {
    min-height: auto;
  }

  .primary-button,
  .secondary-button {
    white-space: normal;
  }

  .product-link {
    align-items: flex-start;
  }
}
`;

const familyPlayFaqs = [
  {
    question: "How do I find a game?",
    answer:
      "Tap Find Games for Me from the home screen, then choose the supplies, age range, activity level, noise level, or number of players that fit your moment.",
  },
  {
    question: "Can I search by instructions?",
    answer:
      "Yes. Browse search looks at game names, supplies, age ranges, and instruction text.",
  },
  {
    question: "Can I add my own games?",
    answer:
      "Yes. Use the Add tab to save a family favorite. Custom games appear in Browse and can be edited or deleted later.",
  },
  {
    question: "Why did my custom games disappear?",
    answer:
      "Custom games and favorites are saved with the app install. If the app is deleted, reset, or moved to a new device, those saved items may not be available.",
  },
];

const quickHelp = [
  {
    icon: "Search",
    title: "Find the right game",
    text: "Filter by supplies, age range, players, activity, and noise level.",
  },
  {
    icon: "Star",
    title: "Keep favorites handy",
    text: "Save games you replay often and come back to recently played ideas.",
  },
  {
    icon: "Add",
    title: "Add family games",
    text: "Create custom games for your own routines, traditions, and house rules.",
  },
  {
    icon: "Local",
    title: "Local by design",
    text: "Favorites and custom games are stored on the device with the app install.",
  },
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = cleanPathname(url.pathname);

    if (isAssetPath(pathname)) {
      return env.ASSETS.fetch(request);
    }

    if (pathname === "/") {
      return htmlResponse(renderHubPage(url.origin));
    }

    if (pathname === "/family-play") {
      return htmlResponse(renderFamilyPlayPage(url.origin));
    }

    return htmlResponse(renderNotFoundPage(url.origin), 404);
  },
};

function cleanPathname(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function isAssetPath(pathname) {
  return /\.(png|jpg|jpeg|webp|gif|svg|ico|css|js|map|txt|woff2?)$/i.test(pathname);
}

function htmlResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=120",
    },
  });
}

function pageShell({ title, description, origin, path, body }) {
  const canonical = `${origin}${path}`;
  const ogImage = `${origin}/og.png`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/favicon.png">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${ogImage}">
  <style>${css}</style>
</head>
<body>${body}</body>
</html>`;
}

function renderHubPage(origin) {
  return pageShell({
    title: "ByGeorgia",
    description: "A home for apps, projects, and support from ByGeorgia.",
    origin,
    path: "/",
    body: `<main class="hub-page">
  <section class="hub-hero" aria-labelledby="hub-title">
    <p class="eyebrow">ByGeorgia</p>
    <h1 id="hub-title">Apps and support, all in one place.</h1>
    <p class="lead">This domain is set up to host product pages and support resources as the ByGeorgia catalog grows.</p>
    <a class="product-link" href="/family-play">
      <span>
        <strong>Family Play</strong>
        <small>Support for the screen-free family games app</small>
      </span>
      <span aria-hidden="true">-&gt;</span>
    </a>
  </section>
</main>`,
  });
}

function renderFamilyPlayPage(origin) {
  return pageShell({
    title: "Family Play Support",
    description:
      "Support, common questions, and contact information for the Family Play screen-free games app.",
    origin,
    path: "/family-play",
    body: `<main>
  <section class="hero" aria-labelledby="hero-title">
    <nav class="topbar" aria-label="Support navigation">
      <a class="brand" href="/family-play" aria-label="Family Play Support home">
        <span class="brand-mark"><img src="/family-play-app-icon.png" alt=""></span>
        <span>Family Play Support</span>
      </a>
      <div class="nav-actions">
        <a href="#faq">FAQ</a>
        <a href="#privacy">Privacy</a>
        <a class="small-button" href="mailto:${supportEmail}">Contact</a>
      </div>
    </nav>

    <div class="hero-grid" id="top">
      <div class="hero-copy">
        <p class="eyebrow">Help for the screen-free family games app</p>
        <h1 id="hero-title">Family Play Support</h1>
        <p class="lead">Find answers about browsing games, saving favorites, adding your own activities, and getting help from Galanou Consulting.</p>
        <div class="cta-row" aria-label="Primary support actions">
          <a class="primary-button" href="mailto:${supportEmail}">Email Support</a>
        </div>
      </div>

      <div class="app-card" aria-label="Family Play app preview">
        <div class="phone-shell">
          <div class="phone-screen">
            <img src="/family-game-intro-current.png" alt="Family Play intro artwork">
            <div class="screen-panel">
              <span>Ready when the room needs an idea</span>
              <strong>Games by age, supplies, players, and noise.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="quick-help" aria-label="Common app tasks">
    ${quickHelp.map(renderHelpItem).join("")}
  </section>

  <section class="content-band" id="faq" aria-labelledby="faq-title">
    <div class="section-heading">
      <p class="eyebrow">Common Questions</p>
      <h2 id="faq-title">Quick answers for families</h2>
    </div>
    <div class="faq-list">
      ${familyPlayFaqs.map(renderFaqItem).join("")}
    </div>
  </section>

  <section class="split-band" id="privacy" aria-labelledby="privacy-title">
    <div>
      <p class="eyebrow">Privacy and Data</p>
      <h2 id="privacy-title">Saved items stay tied to the app install</h2>
    </div>
    <div class="privacy-copy">
      <p>Family Play stores favorites, recently played games, and custom games locally on the device. Deleting, resetting, or moving the app to a new device may remove those saved items.</p>
      <p>The app is designed for screen-free family play and does not require an account to browse the built-in game library.</p>
    </div>
  </section>

  <section class="contact-band" aria-labelledby="contact-title">
    <div>
      <p class="eyebrow">Contact</p>
      <h2 id="contact-title">Need more help?</h2>
      <p>Send a note with the device type, app version if available, and what happened before the issue appeared.</p>
    </div>
    <div class="contact-actions">
      <a class="primary-button" href="mailto:${supportEmail}">${supportEmail}</a>
    </div>
  </section>
</main>`,
  });
}

function renderHelpItem(item) {
  return `<article class="help-item">
  <span class="icon" aria-hidden="true">${escapeHtml(item.icon)}</span>
  <h2>${escapeHtml(item.title)}</h2>
  <p>${escapeHtml(item.text)}</p>
</article>`;
}

function renderFaqItem(item) {
  return `<article class="faq-item">
  <h3>${escapeHtml(item.question)}</h3>
  <p>${escapeHtml(item.answer)}</p>
</article>`;
}

function renderNotFoundPage(origin) {
  return pageShell({
    title: "Page Not Found",
    description: "This ByGeorgia page was not found.",
    origin,
    path: "/404",
    body: `<main class="not-found">
  <p class="eyebrow">ByGeorgia</p>
  <h1>Page not found</h1>
  <p>The page you are looking for is not available.</p>
  <p><a class="primary-button" href="/">Go home</a></p>
</main>`,
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
