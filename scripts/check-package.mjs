import fs from 'node:fs';
import path from 'node:path';

const required = [
  'src/report-style.css',
  'src/report-style.js',
  'examples/basic-report.html',
  'examples/custom-brand.html',
  'examples/bundle-report.html',
  'docs/bundle-pattern.md',
  'skills/collapsible-report-kit/SKILL.md',
  'README.md',
  'LICENSE'
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const css = fs.readFileSync('src/report-style.css', 'utf8');
for (const token of ['--crk-accent-warm', '.crk-section', '.crk-bundle-grid', '.crk-flow-steps', '@media print', 'prefers-reduced-motion']) {
  if (!css.includes(token)) throw new Error(`CSS missing ${token}`);
}
for (const htmlFile of ['examples/basic-report.html', 'examples/custom-brand.html', 'examples/bundle-report.html']) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  for (const marker of ['class="crk-document"', 'data-crk-nav', 'crk-section']) {
    if (!html.includes(marker)) throw new Error(`${htmlFile} missing ${marker}`);
  }
}
console.log('package check passed');
