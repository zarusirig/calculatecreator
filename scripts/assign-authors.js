#!/usr/bin/env node
/**
 * Script to assign topic-specific authors to blog MDX frontmatter.
 * Run: node scripts/assign-authors.js
 */
const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'content', 'blog');

// Author assignment rules: first matching pattern wins
const RULES = [
    // Emily Thompson — tax & finance
    { pattern: /tax|deduction|finance|business.?structure|cpa/i, author: 'Emily Thompson, CPA' },

    // David Kim — shop, affiliate, e-commerce, ads
    { pattern: /shop|affiliate|e.?commerce|product|spark.?ad/i, author: 'David Kim' },

    // Jessica Rodriguez — LIVE streaming, engagement
    { pattern: /live|engagement|gift|streaming|community/i, author: 'Jessica Rodriguez' },

    // Michael Chen — creator fund, RPM, earnings reports, data
    { pattern: /creator.?fund|rpm|earnings?.?report|creator.?reward|payout|worth.?it|vs.?youtube|100k.?income/i, author: 'Michael Chen' },

    // Sarah Johnson — brand deals, monetization, income, niches, side hustle
    { pattern: /brand.?deal|sponsorship|negotiat|influencer.?market|monetization.?feature|income.?stream|side.?hustle|money|niche|quit.?job/i, author: 'Sarah Johnson' },

    // Alex Martinez — algorithm, growth, viral, trends, ban, new features, strategy
    { pattern: /algorithm|growth|viral|trend|ban|update|feature|strategy|lemon8|content.?idea/i, author: 'Alex Martinez' },
];

function getAuthorForSlug(slug) {
    for (const rule of RULES) {
        if (rule.pattern.test(slug)) {
            return rule.author;
        }
    }
    return 'CalculateCreator Team'; // fallback
}

const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
let changed = 0;

for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    const slug = file.replace('.mdx', '');
    const newAuthor = getAuthorForSlug(slug);

    // Replace author line in frontmatter
    const updated = content.replace(
        /^author:\s*".+?"$/m,
        `author: "${newAuthor}"`
    );

    if (updated !== content) {
        fs.writeFileSync(filePath, updated, 'utf-8');
        changed++;
        console.log(`✅ ${file} → ${newAuthor}`);
    } else {
        console.log(`⏭️  ${file} — no change`);
    }
}

console.log(`\nDone! Updated ${changed} of ${files.length} files.`);
