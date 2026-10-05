# Collapsible Report Kit

A lightweight, logo-free CSS and JavaScript kit for polished collapsible HTML reports: sticky top bar, report hero, taxonomy/status pills, side navigation, `<details>` sections, metric cards, print styles, and reduced-motion support.

It packages the reusable look and feel of a high-signal internal report format without shipping company logos, SVG diagrams, private data, build tooling, or external service dependencies.

## What is included

- `src/report-style.css` — design tokens, layout, typography, pills, cards, collapsible sections, print/mobile rules.
- `src/report-style.js` — optional progressive enhancement for section nav, open/close all, active nav state.
- `examples/basic-report.html` — copy-paste starter report.
- `examples/custom-brand.html` — shows how another company can override colors, brand text, and source label.

## Quick start

```html
<link rel="stylesheet" href="src/report-style.css" />
<script type="module" src="src/report-style.js"></script>
```

Use normal HTML `<details class="crk-section">` blocks:

```html
<details class="crk-section" open>
  <summary>
    <span class="crk-section-index">01</span>
    <span class="crk-section-title">Executive summary</span>
    <span class="crk-section-count">summary - 120 words</span>
  </summary>
  <div class="crk-section-body">
    <p>Your report content goes here.</p>
  </div>
</details>
```

## Brand overrides

Set CSS variables on `:root` or a wrapper class. No logo is required.

```css
:root {
  --crk-accent: #3D6EA8;
  --crk-accent-warm: #D97757;
  --crk-ink: #191919;
  --crk-bg: #F3F1E7;
  --crk-panel: #E6E4D9;
  --crk-line: #D6D4C8;
  --crk-font-sans: Inter, system-ui, sans-serif;
  --crk-font-serif: Newsreader, Georgia, serif;
}
```

## Minimal document structure

```html
<body class="crk-document">
  <div class="crk-topbar">
    <div class="crk-topbar-inner">
      <div class="crk-brand-lockup"><span class="crk-brand-mark">AC</span><span>Acme Reports</span></div>
      <div class="crk-source-name">Quarterly Operations Review</div>
    </div>
  </div>

  <header class="crk-hero">
    <div>
      <p class="crk-eyebrow">Report Brief</p>
      <h1>Quarterly Operations Review</h1>
      <p class="crk-subtitle">A concise, collapsible report surface for leadership review.</p>
      <div class="crk-pills">
        <span class="crk-pill crk-pill-status"><span>Status</span><strong>Ready</strong></span>
      </div>
    </div>
  </header>

  <main class="crk-layout">
    <aside class="crk-section-menu" data-crk-nav></aside>
    <div class="crk-sections">
      <!-- details.crk-section blocks -->
    </div>
  </main>
</body>
```

## Notes

- Works without JavaScript: native `<details>` still open and close.
- JavaScript only builds the side nav and open/close buttons.
- Print mode hides navigation and preserves readable content.
- The kit is intentionally logo-free; use text or your own image asset in `.crk-brand-lockup`.

## License

MIT
