# TAC Plan HTML Examples

These are full HTML examples copied from recent `gbauto/gbautomation` commits so this repo preserves the actual TAC plan surface, not just a simplified approximation. They include the inline CSS, color palette, typography, collapsible sections, pill grammar, and long-form plan density that the `collapsible-report-kit` skill should conform to when rendering TAC-style plans or reports.

## Examples

- `official-gbauto-tac-plan-template.html` — Official GBAuto TAC plan template (`c1316366:resources/skills/tac-plan/references/official-gbauto-tac-plan-template.html`): Smallest canonical source reference for the approved plan shell, colors, typography, and collapsible details grammar.
- `tac-exemplar-library.html` — TAC Exemplar Library (`c65872b2:artifacts/plan-renders/2026-09-30-tac-exemplar-library/2026-09-30-tac-exemplar-library.html`): Recent full-size TAC plan render with complete inline HTML/CSS and long-section behavior.
- `job-outreach-pipeline.html` — Job Outreach Pipeline (`4d80d392:artifacts/plan-renders/2026-09-30-job-outreach-pipeline/2026-09-30-job-outreach-pipeline.html`): Recent production-style TAC plan with full plan depth, section density, pills, and report-scale typography.
- `meet-transcript-pipeline-completion.html` — Meet Transcript Pipeline Completion (`e375a550:artifacts/plan-renders/adopted-plans/2026-09-22-meet-transcript-pipeline-completion.html`): Adopted-plan example showing approval-oriented copy and long implementation sections in the same visual shell.

## Conformance rule

Do not treat the simplified examples in `examples/basic-report.html` or `examples/bundle-report.html` as the visual authority for TAC plan styling. They are starter demos. The files in this directory are the visual authority for TAC-style plan/report conformance.
