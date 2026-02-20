import FirecrawlApp from '@mendable/firecrawl-js';

// Initialize the Firecrawl client
// Make sure you have your FIRECRAWL_API_KEY environment variable set 
// in your .env or .env.local file

const apiKey = process.env.FIRECRAWL_API_KEY;

export const firecrawlApp = new FirecrawlApp({
    apiKey: apiKey || '',
});

// Helper examples
/**
 * Scrape a specific URL
 * @param url The URL to scrape
 */
export async function scrapeUrl(url: string) {
    if (!apiKey) {
        throw new Error('Firecrawl API key not set. Please set FIRECRAWL_API_KEY environment variable.');
    }

    try {
        const scrapeResult = await firecrawlApp.scrape(url, {
            formats: ['markdown'],
        });

        return scrapeResult;
    } catch (error) {
        console.error('Error in scrapeUrl:', error);
        throw error;
    }
}
