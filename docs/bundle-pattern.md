# Bundle Pattern

A bundle is a folder or release package that keeps the plan and the implemented report together.

## Recommended files

- `plan.html` or `plan.md` — approved scope, assumptions, acceptance criteria, and explicit non-goals.
- `report.html` — implemented collapsible report using the kit.
- `report.pdf` — optional print/export version for email or messaging platforms.
- `evidence/` — summarized receipts, screenshots, public URLs, test readbacks, and source links.
- `manifest.json` — optional machine-readable index with artifact paths, generated time, owner, status, and commit/version identifiers.

## Approval flow

1. **Scope request** — define the desired outcome, audience, constraints, and non-goals.
2. **Scope approval** — get human approval before implementation begins.
3. **Implementation** — execute only inside the approved boundary and collect receipts.
4. **Implemented report** — publish a report that separates claims, evidence, risks, and next actions.

## Implemented report sections

Use these sections as a default:

1. Overview
2. Scope and approvals
3. Implementation summary
4. Validation evidence
5. Artifacts and deliverables
6. Risks and next actions

Keep raw logs, private data, and credentials out of the report. Link to sanitized evidence instead.
