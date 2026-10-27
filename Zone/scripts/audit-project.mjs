import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SOURCE_EXTENSIONS = new Set(['.js', '.jsx', '.mjs', '.ts', '.tsx']);

const lineForIndex = (source, index) => source.slice(0, index).split('\n').length;

function addMatches(issues, file, source, rule, pattern, message) {
  const flags = pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`;
  const regex = new RegExp(pattern.source, flags);
  let match;
  while ((match = regex.exec(source)) !== null) {
    issues.push({ rule, file, line: lineForIndex(source, match.index), message });
    if (match[0].length === 0) regex.lastIndex += 1;
  }
}

export function scanSourceText(file, source) {
  const issues = [];

  addMatches(issues, file, source, 'empty-link', /(?:href|to)=["'](?:#|\s*)["']/gi, 'Empty or hash-only navigation target.');
  addMatches(issues, file, source, 'dangerous-html', /dangerouslySetInnerHTML/gi, 'Avoid raw HTML injection in public UI.');
  addMatches(issues, file, source, 'router-bypass', /window\.history\.(?:replaceState|pushState)/g, 'Use React Router rather than the History API directly.');
  addMatches(issues, file, source, 'removed-social', /https?:\/\/(?:www\.)?(?:instagram\.com|tiktok\.com|twitter\.com|x\.com)\//gi, 'Removed social network still appears in source.');
  addMatches(issues, file, source, 'placeholder-config', /YOUR_(?:SERVICE_ID|TEMPLATE_ID|PUBLIC_KEY)/g, 'EmailJS placeholder credential remains in source.');
  addMatches(issues, file, source, 'internal-placeholder', /\bTODO\b|Pending Approval|Case Study Placeholder|\[Pending\]|Pending stock confirmation/g, 'Internal or unapproved placeholder remains in public source.');
  addMatches(issues, file, source, 'dynamic-code', /\beval\s*\(|\bnew\s+Function\s*\(/g, 'Dynamic code execution should not be used in the frontend.');
  addMatches(
    issues,
    file,
    source,
    'oversized-live-image',
    /assets\/(?:album\/Highlights\/(?:DSC08000|DSC08108|DSC08103|DSC08086|DSC08126)\.jpg|background\/(?:Aperson|pest-library)\.png)/g,
    'Live route imports an oversized source image instead of an optimized derivative.',
  );

  const anchorRegex = /<a\b[^>]*target=["']_blank["'][^>]*>/gi;
  let anchorMatch;
  while ((anchorMatch = anchorRegex.exec(source)) !== null) {
    if (!/rel=["'][^"']*noopener[^"']*noreferrer[^"']*["']/i.test(anchorMatch[0])) {
      issues.push({
        rule: 'unsafe-new-tab',
        file,
        line: lineForIndex(source, anchorMatch.index),
        message: 'target="_blank" link is missing rel="noopener noreferrer".',
      });
    }
  }

  const insecureUrlRegex = /http:\/\/(?!www\.w3\.org)[^\s"'`)]+/gi;
  addMatches(issues, file, source, 'insecure-url', insecureUrlRegex, 'Public source contains an insecure HTTP URL.');

  return issues;
}

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectSourceFiles(fullPath));
    } else if (SOURCE_EXTENSIONS.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

export async function auditProject(rootDirectory = process.cwd()) {
  const sourceRoot = path.join(rootDirectory, 'src');
  const files = await collectSourceFiles(sourceRoot);
  const issues = [];

  for (const filePath of files) {
    const source = await readFile(filePath, 'utf8');
    issues.push(...scanSourceText(path.relative(rootDirectory, filePath), source));
  }

  return { filesScanned: files.length, issues };
}

async function main() {
  const result = await auditProject();
  if (result.issues.length === 0) {
    console.log(`Project source audit passed (${result.filesScanned} files scanned, 0 blockers).`);
    return;
  }

  console.error(`Project source audit found ${result.issues.length} blocker(s):`);
  for (const issue of result.issues) {
    console.error(`- [${issue.rule}] ${issue.file}:${issue.line} - ${issue.message}`);
  }
  process.exitCode = 1;
}

const entryUrl = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : '';
if (import.meta.url === entryUrl) {
  await main();
}
