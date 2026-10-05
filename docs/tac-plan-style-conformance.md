# TAC Plan Style Conformance

This kit now includes full HTML TAC plan examples under `examples/tac-plan-html/`. Those examples are the style authority for TAC-plan-derived reports. The generic examples are only simplified starter pages.

## Required visual language

A TAC-style report should preserve the feel of the source plans:

- Cream page background: `#F3F1E7`
- Panel background: `#E6E4D9`
- Stone borders: `#D6D4C8`
- Ink text: `#191919`
- Terracotta accent: `#D97757`
- Terracotta hover/deep accent: `#B75F43`
- Blue status accent: `#3D6EA8`
- Muted body text: `#5C5C5C` / `#8C8A84`
- Sans font: Inter
- Serif display font: Newsreader

## Required interaction grammar

- Native collapsible `<details>` sections.
- Sticky/side section navigation when practical.
- Compact taxonomy/status pills in the hero.
- Section index + section title + word/count/meta cue in each summary row.
- Open/close-all behavior as progressive enhancement only.
- Print and reduced-motion handling.

## Planning separation

This repo still does not force anyone to adopt the TAC planning process. The examples are visual/style references. External planning libraries may feed this report surface, but the report kit owns only the rendered surface, bundle conventions, and section grammar.

## Source examples

See `examples/tac-plan-html/manifest.json` for commit/path provenance.
