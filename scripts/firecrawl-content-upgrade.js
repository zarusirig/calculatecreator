const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load env vars, overriding any existing bash variables
dotenv.config({ path: '.env.local', override: true });
dotenv.config({ path: '.env', override: true });

const apiKey = process.env.FIRECRAWL_API_KEY;
if (!apiKey) {
    console.error("FIRECRAWL_API_KEY is missing. Please set it in .env.local");
    process.exit(1);
}

const BASE_URL = 'https://tiktokcalculator.net';
const CONTENT_DIR = path.join(process.cwd(), 'content');

async function getMdxFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const stat = fs.statSync(path.join(dir, file));
        if (stat.isDirectory()) {
            getMdxFiles(path.join(dir, file), fileList);
        } else if (file.endsWith('.mdx')) {
            fileList.push(path.join(dir, file));
        }
    }
    return fileList;
}

function filepathToUrl(filepath) {
    const relativePath = path.relative(CONTENT_DIR, filepath);
    let routePath = relativePath.replace(/\.mdx$/, '');
    return `${BASE_URL}/${routePath}/`;
}

async function extractFromFirecrawl(liveUrl) {
    // We use native fetch to call the v1 extract endpoint which behaves better with credits
    const response = await fetch("https://api.firecrawl.dev/v1/extract", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            urls: [liveUrl],
            prompt: "You are an expert SEO auditor correcting a page for tiktokcalculator.net based on recent audits. Fix spammy titles, generic descriptions, add direct answers, and missing FAQS. Extract the improved components.",
            schema: {
                type: "object",
                properties: {
                    seoOptimizedTitle: {
                        type: "string",
                        description: "A keyword-optimized title tag under 60 characters without spammy repetitive words."
                    },
                    metaDescription: {
                        type: "string",
                        description: "A compelling meta description under 155 characters that drives clicks, with unique information."
                    },
                    directAnswerIntro: {
                        type: "string",
                        description: "The new first paragraph for the article that DIRECTLY answers the search intent in the first 50 words. Write in Markdown."
                    },
                    missingFaqsMarkdown: {
                        type: "string",
                        description: "Generate 3-5 high-value FAQ questions and answers based on typical 'People Also Ask' for this topic. Format beautifully in Markdown using h3 headings."
                    }
                },
                required: ["seoOptimizedTitle", "metaDescription", "directAnswerIntro", "missingFaqsMarkdown"]
            }
        })
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const { id } = await response.json();
    return id;
}

async function waitForExtraction(id) {
    let status = "processing";
    while (status !== "completed" && status !== "failed") {
        await new Promise(r => setTimeout(r, 2000));
        const res = await fetch(`https://api.firecrawl.dev/v1/extract/${id}`, {
            headers: { "Authorization": `Bearer ${apiKey}` }
        });
        const data = await res.json();
        status = data.status;
        if (status === "completed") {
            return data.data;
        }
        if (status === "failed") {
            throw new Error(`Extraction failed for job ${id}`);
        }
    }
}

async function upgradeContent(filepath) {
    console.log(`\n=== Upgrading Content: ${path.basename(filepath)} ===`);
    const liveUrl = filepathToUrl(filepath);
    console.log(`Live URL to extract from: ${liveUrl}`);

    try {
        const localContent = fs.readFileSync(filepath, 'utf-8');

        // Start extraction job
        const jobId = await extractFromFirecrawl(liveUrl);
        console.log(`Job ${jobId} started, waiting for completion...`);

        // Wait for results
        const updatedData = await waitForExtraction(jobId);
        console.log("Extraction successful!");

        let newContent = localContent;

        newContent = newContent.replace(/title:\s*["']?(.*?)["']?(\n|$)/, `title: "${updatedData.seoOptimizedTitle}"\n`);

        if (newContent.includes('metaDescription:')) {
            newContent = newContent.replace(/metaDescription:\s*["']?(.*?)["']?(\n|$)/, `metaDescription: "${updatedData.metaDescription}"\n`);
        } else {
            newContent = newContent.replace(/(title:.*?\n)/, `$1metaDescription: "${updatedData.metaDescription}"\n`);
        }

        newContent = newContent.replace(/(---\s*\n)/, `$1\n${updatedData.directAnswerIntro}\n\n`);

        newContent += `\n\n## Frequently Asked Questions\n\n${updatedData.missingFaqsMarkdown}\n`;

        fs.writeFileSync(filepath, newContent, 'utf-8');
        console.log(`Successfully upgraded ${path.basename(filepath)}!`);

        return true;
    } catch (error) {
        console.error(`Error processing ${filepath}: `, error.message);
        return false;
    }
}

async function runBatchUpgrade() {
    const files = await getMdxFiles(CONTENT_DIR);
    console.log(`Found ${files.length} MDX files to process.`);

    // Process test batch
    const batch = files.slice(0, 5); // processing first 5 as proof of concept

    let successCount = 0;
    for (const file of batch) {
        const ok = await upgradeContent(file);
        if (ok) successCount++;
    }

    console.log(`\nBatch upgrade complete. Success: ${successCount}/${batch.length}`);
    console.log("Check the results. You can modify 'batch.slice()' to run on all files.");
}

runBatchUpgrade();
