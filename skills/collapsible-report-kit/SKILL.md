---
name: collapsible-report-kit
description: Use when creating a branded but logo-free collapsible HTML report or report bundle with scope approval, implementation evidence, artifact links, and section explanations.
version: 1.0.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [reports, html, css, bundles, approvals, deliverables]
    related_skills: []
---

# Collapsible Report Kit

## Overview

Use this skill to create polished report surfaces with the Collapsible Report Kit. The kit provides a logo-free CSS/JavaScript shell for report briefs, approval gates, implementation summaries, evidence sections, and bundled deliverables.

The default pattern is a **bundle**: optional plan/scope artifact first, implementation evidence second, final report third. This keeps the report readable while preserving proof for audit or handoff without forcing teams to use one specific planning framework.

## When to Use

- You need a public-safe report style without private company logos or internal SVG diagrams.
- You want a collapsible HTML report with a sticky section nav and open/close controls.
- You need to explain the lifecycle from scope request to scope approval to implementation to final report.
- You are packaging several artifacts together: plan, implemented report, PDF export, screenshots, test receipts, and links.
- You want another company to adopt the same report feel with their own colors and brand text.

Do not use this kit for raw log dumps, secret-bearing evidence, or reports that require private runtime services to render.

## Report Bundle Contract

A report bundle is a directory or release package with:

1. `plan.html` or `plan.md` — approved scope, assumptions, non-goals, and acceptance criteria.
2. `report.html` — the implemented collapsible report.
3. `report.pdf` — optional export for email or chat platforms.
4. `evidence/` — sanitized receipts, screenshots, test summaries, source URLs, and readbacks.
5. `manifest.json` — optional machine-readable index with status, owner, generated time, paths, and version identifiers.

Keep the bundle small enough to review. Link to large artifacts instead of embedding raw logs.

## Approval Flow

Use this sequence before implementation:

1. **Scope request** — capture the desired outcome, audience, constraints, and non-goals.
2. **Scope approval** — obtain explicit human approval for the bounded scope.
3. **Implementation** — do only the approved work and collect validation evidence.
4. **Implemented report** — summarize what changed, what passed, what remains risky, and where artifacts live.

Never let an implemented report imply approval that did not happen. If scope was not approved, label the report as a draft or readiness package.

## Implemented Report Sections

Default sections:

1. **Overview** — what changed, why it matters, status, and top-level outcome.
2. **Scope and approvals** — who approved what, when, assumptions, and non-goals.
3. **Implementation summary** — concrete work performed, grouped by component or workflow.
4. **Reuse and provenance** — existing templates, components, patterns, prior reports, libraries, or assets reused; what was newly created; and where each came from.
5. **Validation evidence** — tests, smoke checks, screenshots, public readbacks, and source links.
6. **Artifacts and deliverables** — HTML, PDF, bundle files, deploy URLs, and source paths.
7. **Risks and next actions** — known gaps, owner decisions, and follow-up tasks.

## Planning Separation

This kit is a report surface, not a planning scale or implementation methodology. It can display approval state and plan artifacts, but a full planning/approval library should live separately. See `docs/planning-separation.md`.

## HTML Starter

```html
<link rel="stylesheet" href="src/report-style.css" />
<script type="module" src="src/report-style.js"></script>
<body class="crk-document">
  <main class="crk-layout">
    <aside class="crk-section-menu" data-crk-nav></aside>
    <div class="crk-sections">
      <details class="crk-section" open>
        <summary>
          <span class="crk-section-index">01</span>
          <span class="crk-section-title">Overview</span>
          <span class="crk-section-count">overview - 120 words</span>
        </summary>
        <div class="crk-section-body"><p>Report content.</p></div>
      </details>
    </div>
  </main>
</body>
```

## Custom Branding

Override CSS variables instead of editing the core stylesheet:

```css
:root {
  --crk-accent-warm: #7C3AED;
  --crk-accent: #0F766E;
  --crk-bg: #F8F7F4;
  --crk-panel: #ECE8DF;
}
```

Use `.crk-brand-mark` for text initials or replace the lockup with your own logo image. Do not ship another company's logo in this public kit.

## Verification Checklist

- [ ] The report opens without JavaScript and uses native `<details>` sections.
- [ ] `src/report-style.js` enhances the section nav without breaking static HTML.
- [ ] The scope approval state is explicit: approved, draft, readiness, or implemented.
- [ ] Evidence is summarized and sanitized; raw secrets and private logs are excluded.
- [ ] The bundle manifest or README points to every artifact.
- [ ] Print/PDF output is readable.
- [ ] `npm run check` passes in this repository.
