# Planning Separation

This repository intentionally separates the report surface from any planning framework.

## What this kit owns

- Visual style for collapsible reports.
- Report section grammar.
- Bundle packaging conventions.
- Optional placeholders for approval state, evidence, artifacts, and reuse/provenance.

## What this kit does not own

- A required planning scale.
- A required approval system.
- A required agent workflow.
- A required implementation methodology.

## Integration pattern

If a team already has a planning library, it can feed this kit with plain report data:

1. Plan library produces an approved scope or plan artifact.
2. Implementation process produces evidence and deliverables.
3. Collapsible Report Kit renders the final report and bundle.

If no planning library exists, the report can still use the same sections. Mark the scope state honestly: `draft`, `requested`, `approved`, `implemented`, or `readiness only`.

## Reuse/provenance without forcing a plan

The report can include a **Reuse and provenance** section without adopting a full reuse policy. Keep it descriptive:

- Reused: existing components, templates, prior reports, libraries, or design patterns.
- New: assets or code created specifically for this report.
- Source: repository path, URL, package name, or local source note.
- Confidence: verified, inferred, or unverified.
