#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = process.cwd();
const GUIDES_DIR = path.join(PROJECT_ROOT, 'content', 'guides');
const REPORTS_DIR = path.join(PROJECT_ROOT, 'reports');
const JSON_OUTPUT = path.join(REPORTS_DIR, 'malformed-guides-triage.json');
const MD_OUTPUT = path.join(REPORTS_DIR, 'malformed-guides-triage.md');

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (entry.name.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }
  return files;
}

function analyzeFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');
  const lines = raw.split('\n');

  let blankRun = 0;
  let blankBursts = 0;

  const counts = {
    imagePrefix: 0,
    inlineCreatorPrefix: 0,
    danglingJsx: 0,
    deepIndentText: 0,
    deepIndentMarkup: 0,
    deepIndentNumeric: 0,
    blankBursts: 0,
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (/^TikTok creators:\s*!\[/.test(trimmed)) counts.imagePrefix += 1;
    if (/^TikTok creators:\s*\S/.test(trimmed) && !/^TikTok creators:\s*!\[/.test(trimmed)) {
      counts.inlineCreatorPrefix += 1;
    }
    if (trimmed === ')}') counts.danglingJsx += 1;
    if (/^\s{10,}[A-Za-z(]/.test(line)) counts.deepIndentText += 1;
    if (/^\s{10,}(?:[-*]|\[|!\[|#{1,6}\s)/.test(line)) counts.deepIndentMarkup += 1;
    if (/^\s{10,}[\d$€£¥,.%+\-xX ]+$/.test(line) && trimmed.length <= 32) {
      counts.deepIndentNumeric += 1;
    }

    if (!trimmed) {
      blankRun += 1;
      if (blankRun === 4) blankBursts += 1;
    } else {
      blankRun = 0;
    }
  }

  counts.blankBursts = blankBursts;

  const reasons = [];
  let severityScore = 0;

  if (counts.danglingJsx > 0) {
    severityScore += 5;
    reasons.push('dangling_jsx_artifacts');
  }
  if (counts.deepIndentNumeric >= 8) {
    severityScore += 3;
    reasons.push('metric_card_fragments');
  }
  if (counts.deepIndentText >= 15) {
    severityScore += 3;
    reasons.push('paragraph_indentation_corruption');
  }
  if (counts.deepIndentMarkup >= 10) {
    severityScore += 2;
    reasons.push('list_or_link_indentation_corruption');
  }
  if (counts.imagePrefix > 0 || counts.inlineCreatorPrefix > 0) {
    severityScore += 1;
    reasons.push('creator_label_artifacts');
  }
  if (counts.blankBursts >= 3) {
    severityScore += 1;
    reasons.push('excessive_blank_bursts');
  }

  let classification = 'clean';
  if (severityScore >= 6) classification = 'rewrite_or_quarantine_candidate';
  else if (severityScore >= 2) classification = 'repair_candidate';

  return {
    path: path.relative(PROJECT_ROOT, filePath).replace(/\\/g, '/'),
    severityScore,
    classification,
    reasons,
    counts,
  };
}

function renderMarkdown(report) {
  const lines = [];
  lines.push('# Malformed Guides Triage');
  lines.push('');
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Total guide MDX files scanned: ${report.summary.totalFiles}`);
  lines.push(`- Repair candidates: ${report.summary.repairCandidates}`);
  lines.push(`- Rewrite or quarantine candidates: ${report.summary.rewriteOrQuarantineCandidates}`);
  lines.push(`- Clean files: ${report.summary.cleanFiles}`);
  lines.push('');
  lines.push('## Pattern Totals');
  lines.push('');
  for (const [key, value] of Object.entries(report.summary.patternTotals)) {
    lines.push(`- ${key}: ${value}`);
  }
  lines.push('');
  lines.push('## Rewrite or Quarantine Candidates');
  lines.push('');
  if (report.rewriteOrQuarantineCandidates.length === 0) {
    lines.push('- None');
  } else {
    for (const file of report.rewriteOrQuarantineCandidates) {
      lines.push(`- ${file.path} | score ${file.severityScore} | reasons: ${file.reasons.join(', ')}`);
    }
  }
  lines.push('');
  lines.push('## Repair Candidates');
  lines.push('');
  if (report.repairCandidates.length === 0) {
    lines.push('- None');
  } else {
    for (const file of report.repairCandidates.slice(0, 40)) {
      lines.push(`- ${file.path} | score ${file.severityScore} | reasons: ${file.reasons.join(', ')}`);
    }
  }

  return `${lines.join('\n')}\n`;
}

function main() {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  const files = walk(GUIDES_DIR);
  const analyzed = files.map(analyzeFile).sort((a, b) => b.severityScore - a.severityScore || a.path.localeCompare(b.path));

  const repairCandidates = analyzed.filter(file => file.classification === 'repair_candidate');
  const rewriteOrQuarantineCandidates = analyzed.filter(file => file.classification === 'rewrite_or_quarantine_candidate');
  const cleanFiles = analyzed.filter(file => file.classification === 'clean');

  const patternTotals = analyzed.reduce((acc, file) => {
    for (const [key, value] of Object.entries(file.counts)) {
      acc[key] = (acc[key] || 0) + value;
    }
    return acc;
  }, {});

  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalFiles: analyzed.length,
      repairCandidates: repairCandidates.length,
      rewriteOrQuarantineCandidates: rewriteOrQuarantineCandidates.length,
      cleanFiles: cleanFiles.length,
      patternTotals,
    },
    rewriteOrQuarantineCandidates,
    repairCandidates,
    cleanFiles,
  };

  fs.writeFileSync(JSON_OUTPUT, `${JSON.stringify(report, null, 2)}\n`);
  fs.writeFileSync(MD_OUTPUT, renderMarkdown(report));

  console.log(`Wrote ${JSON_OUTPUT}`);
  console.log(`Wrote ${MD_OUTPUT}`);
}

main();
