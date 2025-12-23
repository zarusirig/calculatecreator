const fs = require('fs');
const path = require('path');

function checkCanonicalURLs(dirPath, results = { correct: [], incorrect: [], missing: [] }) {
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('_') && !item.startsWith('.')) {
      checkCanonicalURLs(fullPath, results);
    } else if (item === 'index.html' && !fullPath.includes('_next')) {
      const content = fs.readFileSync(fullPath, 'utf8');

      // Extract canonical URL
      const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/);

      // Calculate expected canonical URL
      const relativePath = fullPath.replace('out', '').replace('/index.html', '').replace(/\\/g, '/');
      // Add trailing slash as per Next.js configuration
      const pathWithTrailingSlash = relativePath === '/' ? '/' : relativePath + '/';
      const expectedCanonical = 'https://calculatecreator.com' + pathWithTrailingSlash;

      const pagePath = relativePath || '/';

      if (canonicalMatch) {
        const actualCanonical = canonicalMatch[1];
        if (actualCanonical === expectedCanonical) {
          results.correct.push(pagePath);
        } else {
          results.incorrect.push({ path: pagePath, expected: expectedCanonical, actual: actualCanonical });
        }
      } else {
        results.missing.push(pagePath);
      }
    }
  }

  return results;
}

const results = checkCanonicalURLs('out');

console.log('=== CANONICAL URL VERIFICATION RESULTS ===\n');

console.log('✅ CORRECT (Self-referential):', results.correct.length);
if (results.correct.length <= 10) {
  results.correct.forEach(path => console.log('  ', path));
} else {
  console.log('  (showing first 10...)');
  results.correct.slice(0, 10).forEach(path => console.log('  ', path));
  console.log('  ... and', results.correct.length - 10, 'more');
}

if (results.incorrect.length > 0) {
  console.log('\n❌ INCORRECT:', results.incorrect.length);
  results.incorrect.forEach(item => {
    console.log('  ', item.path);
    console.log('    Expected:', item.expected);
    console.log('    Actual:  ', item.actual);
  });
}

if (results.missing.length > 0) {
  console.log('\n⚠️  MISSING:', results.missing.length);
  results.missing.slice(0, 5).forEach(path => console.log('  ', path));
  if (results.missing.length > 5) {
    console.log('  ... and', results.missing.length - 5, 'more');
  }
}

console.log('\n=== SUMMARY ===');
console.log('Total pages checked:', results.correct.length + results.incorrect.length + results.missing.length);
console.log('Correct:', results.correct.length);
console.log('Incorrect:', results.incorrect.length);
console.log('Missing:', results.missing.length);

if (results.incorrect.length === 0 && results.missing.length === 0) {
  console.log('\n🎉 ALL PAGES HAVE CORRECT SELF-REFERENTIAL CANONICAL URLs!');
} else {
  console.log('\n⚠️  ISSUES FOUND - CANONICAL URLs need fixing');
}
