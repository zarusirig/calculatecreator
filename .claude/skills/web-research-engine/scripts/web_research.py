#!/usr/bin/env python3
"""
Web Research Engine for Semantic SEO Skills
Uses OpenAI's Web Search API (cheapest mode) to fetch real-time data.

Usage:
    python web_research.py --mode search --query "best indoor gardening tools 2026"
    python web_research.py --mode serp_analysis --query "best AI writing tools" --country US
    python web_research.py --mode competitor_scan --query "site:competitor.com indoor gardening"
    python web_research.py --mode fact_check --query "average cost of living in Germany 2026"
    python web_research.py --mode paa_discovery --query "how to grow tomatoes indoors"
    python web_research.py --mode entity_research --query "indoor gardening attributes characteristics"
    python web_research.py --mode keyword_ideas --query "indoor gardening" --country US
    python web_research.py --mode batch --file queries.json --output results.json
    python web_research.py --mode deep_research --query "complete guide to semantic SEO topical maps"

Environment:
    OPENAI_API_KEY - Required. Your OpenAI API key.

Cost estimate (as of 2026):
    - search mode: ~$0.001-0.003 per query (gpt-5-nano + web_search)
    - standard mode: ~$0.005-0.01 per query (gpt-4.1-mini + web_search)
    - deep_research mode: ~$0.05-0.15 per query (reasoning model)
    - batch of 50 queries: ~$0.05-0.15 total
"""

import argparse
import json
import os
import sys
import time
from pathlib import Path

try:
    from openai import OpenAI
except ImportError:
    print("ERROR: openai package not installed. Run: pip install openai --break-system-packages")
    sys.exit(1)


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

# Model tiers — cheapest first
MODELS = {
    "cheap": "gpt-5-nano",            # Ultra-cheap, fastest, great for simple lookups
    "standard": "gpt-4.1-mini",       # Better reasoning, still very affordable
    "deep": "o4-mini",                # Reasoning model for complex research
}

DEFAULT_MODEL = MODELS["cheap"]


def get_client():
    """Initialize OpenAI client."""
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        print("ERROR: OPENAI_API_KEY environment variable not set.")
        print("Set it with: export OPENAI_API_KEY='your-key-here'")
        sys.exit(1)
    return OpenAI(api_key=api_key)


# ---------------------------------------------------------------------------
# Core search function
# ---------------------------------------------------------------------------

def web_search(client, query, model=DEFAULT_MODEL, country=None, city=None,
               allowed_domains=None, context_instructions=None):
    """
    Perform a single web search using OpenAI's web_search tool.

    Args:
        client: OpenAI client
        query: The search query
        model: Model to use
        country: Two-letter ISO country code (e.g., "US", "GB", "DE")
        city: City name for local results
        allowed_domains: List of domains to restrict results to (max 100)
        context_instructions: Additional system instructions for response formatting

    Returns:
        dict with keys: text, citations, sources, raw_response
    """
    # Build the web_search tool config
    tool_config = {"type": "web_search"}

    if allowed_domains:
        tool_config["filters"] = {
            "allowed_domains": allowed_domains[:100]
        }

    if country or city:
        location = {"type": "approximate"}
        if country:
            location["country"] = country
        if city:
            location["city"] = city
        tool_config["user_location"] = location

    # Build the input
    messages_input = query
    if context_instructions:
        messages_input = f"{context_instructions}\n\nQuery: {query}"

    try:
        response = client.responses.create(
            model=model,
            tools=[tool_config],
            input=messages_input,
        )

        # Extract text and citations
        result = {
            "query": query,
            "text": "",
            "citations": [],
            "model": model,
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        }

        for item in response.output:
            if item.type == "message":
                for content in item.content:
                    if hasattr(content, "text"):
                        result["text"] = content.text
                    if hasattr(content, "annotations"):
                        for ann in content.annotations:
                            if hasattr(ann, "url"):
                                result["citations"].append({
                                    "url": ann.url,
                                    "title": getattr(ann, "title", ""),
                                    "start": getattr(ann, "start_index", 0),
                                    "end": getattr(ann, "end_index", 0),
                                })

        return result

    except Exception as e:
        return {
            "query": query,
            "text": f"ERROR: {str(e)}",
            "citations": [],
            "model": model,
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            "error": str(e),
        }


# ---------------------------------------------------------------------------
# Specialized research modes
# ---------------------------------------------------------------------------

def search_mode(client, query, country=None, city=None, domains=None):
    """Basic web search — fast lookup with citations."""
    return web_search(client, query, model=MODELS["cheap"],
                      country=country, city=city, allowed_domains=domains)


def serp_analysis_mode(client, query, country=None):
    """
    Analyze the SERP for a target query.
    Returns: who ranks, what formats appear, featured snippets, PAA questions.
    """
    instructions = """Analyze the current search engine results page (SERP) for this query.
Return a structured analysis with:

1. TOP 10 RANKING PAGES: For each result, provide:
   - Position number
   - Page title
   - URL
   - Content format (listicle, how-to, comparison, guide, product page, etc.)
   - Estimated word count category (short <500, medium 500-2000, long 2000+)

2. FEATURED SNIPPET: Is there one? What format (paragraph, list, table)? What does it contain?

3. PEOPLE ALSO ASK: List all PAA questions visible.

4. SERP FEATURES: Note any: knowledge panel, image pack, video carousel, local pack,
   shopping results, news results, AI overview.

5. CONTENT FORMAT PATTERNS: What format dominates the top 5? What format should new
   content use to compete?

6. GAP OPPORTUNITIES: What's missing from current results that new content could provide?

Be specific and factual. Cite actual URLs and titles you find."""

    return web_search(client, query, model=MODELS["standard"],
                      country=country, context_instructions=instructions)


def competitor_scan_mode(client, query, domains=None):
    """
    Scan competitor content — extract their topical structure, headings,
    content themes.
    """
    instructions = """Research this competitor/topic thoroughly. For each relevant page you find, extract:

1. PAGE TITLE and URL
2. HEADING STRUCTURE: List all H1, H2, H3 headings if visible
3. MAIN TOPICS COVERED: What entities and attributes does the content address?
4. CONTENT FORMAT: How is information structured (tables, lists, paragraphs, FAQs)?
5. INTERNAL LINKS: What other pages on the same site does it link to?
6. CONTENT GAPS: What related topics are NOT covered?
7. ESTIMATED DEPTH: Surface-level overview or deep comprehensive coverage?

Provide as much structural detail as possible — this data will be used to build a
competing topical map."""

    return web_search(client, query, model=MODELS["standard"],
                      allowed_domains=domains, context_instructions=instructions)


def fact_check_mode(client, query, domains=None):
    """
    Verify facts, statistics, dates for content accuracy.
    Returns verified data with sources.
    """
    instructions = """Fact-check this claim or find the most current, accurate data for this query.

Return:
1. THE VERIFIED FACT/DATA: The most current, accurate answer with specific numbers,
   dates, or details.
2. SOURCE QUALITY: Rate each source (official government, academic, reputable news,
   industry report, blog/opinion).
3. CONSENSUS: Do multiple sources agree? Note any conflicting information.
4. RECENCY: How recent is this data? Is it the latest available?
5. CONFIDENCE LEVEL: High (multiple official sources agree), Medium (reputable but
   limited sources), Low (conflicting or unclear data).

Only provide facts you can verify with citations. Never guess or extrapolate."""

    trusted_domains = [
        "wikipedia.org", "statista.com", "worldbank.org", "who.int",
        "un.org", "cia.gov", "europa.eu", "oecd.org", "imf.org",
    ]
    if domains:
        trusted_domains.extend(domains)

    return web_search(client, query, model=MODELS["standard"],
                      allowed_domains=trusted_domains,
                      context_instructions=instructions)


def paa_discovery_mode(client, query, country=None):
    """
    Discover People Also Ask questions and related queries for a topic.
    Used by Skill 3 (Query Networks) and Skill 11 (Question Generation).
    """
    instructions = """For this topic, find as many real "People Also Ask" questions and
related search queries as possible.

Return:
1. PEOPLE ALSO ASK QUESTIONS: List every PAA question you can find for this query
   and closely related queries. Group them by subtopic.

2. RELATED SEARCHES: List all "related searches" and "searches related to" suggestions.

3. AUTOCOMPLETE SUGGESTIONS: What does Google autocomplete suggest when you start
   typing this query?

4. QUESTION CLUSTERS: Group all discovered questions into thematic clusters.
   For each cluster, identify:
   - The canonical question (shortest, most direct version)
   - Variation questions (alternative phrasings)
   - The question type (definitional, boolean, comparative, grouping)

5. QUERY PATHS: What sequence of searches would a user likely follow?
   Map 3-5 realistic query paths starting from the initial query.

Be exhaustive — the more questions and related queries you find, the better."""

    return web_search(client, query, model=MODELS["standard"],
                      country=country, context_instructions=instructions)


def entity_research_mode(client, query):
    """
    Research entity attributes, relationships, and classifications.
    Used by Skill 2 (Entity & Attribute Analysis).
    """
    instructions = """Research this entity/topic thoroughly and provide:

1. ENTITY DEFINITION: What is it? Provide a precise, factual definition.

2. ROOT ATTRIBUTES: List attributes that appear in ALL instances of this entity type.
   (e.g., for "country": population, area, capital, government type, GDP)

3. RARE ATTRIBUTES: List attributes that appear in SOME but not all instances.
   (e.g., for "country": coastline, nuclear program, space agency)

4. UNIQUE ATTRIBUTES: List attributes UNIQUE to this specific entity.
   (e.g., for "France": Eiffel Tower, French Revolution, Louvre)

5. RELATED ENTITIES: List the most closely related entities by type
   (parent entity, sibling entities, child entities).

6. KEY FACTS & STATISTICS: Current numerical data (population, size, rankings, etc.)
   with sources.

7. KNOWLEDGE GRAPH CONNECTIONS: How does this entity connect to broader knowledge
   domains? What contextual domains does it belong to?

Be comprehensive and cite all sources."""

    return web_search(client, query, model=MODELS["standard"],
                      context_instructions=instructions)


def keyword_ideas_mode(client, query, country=None):
    """
    Discover keyword opportunities, search trends, and content gaps.
    Used by Skill 3 (Query Networks) and Skill 22 (Competitive Gap).
    """
    instructions = """Research this topic for keyword and content opportunities.

Return:
1. PRIMARY KEYWORDS: The main keywords/phrases for this topic. For each, note:
   - The keyword phrase
   - Likely search intent (informational, commercial, transactional, navigational)
   - Competition level estimate (high/medium/low based on who's ranking)
   - Content format that dominates results (list, guide, comparison, tool, etc.)

2. LONG-TAIL KEYWORDS: Find 15-20 specific, longer keyword phrases that indicate
   clear intent. Group by intent type.

3. TRENDING TOPICS: Any emerging subtopics, new developments, or growing interest
   areas within this topic? What's getting published NOW?

4. CONTENT GAPS: Based on what currently ranks, what topics or angles are MISSING
   or poorly covered? These are the highest-value opportunities.

5. SEASONAL PATTERNS: Is this topic seasonal? When does interest peak?

6. RELATED NICHES: What adjacent topics could create cross-linking opportunities?

Focus on actionable opportunities, not just data dumps."""

    return web_search(client, query, model=MODELS["standard"],
                      country=country, context_instructions=instructions)


def deep_research_mode(client, query):
    """
    Deep research mode — uses reasoning model for complex, multi-faceted research.
    Slower and more expensive, but much more thorough.
    Used for comprehensive topical research, industry analysis, etc.
    """
    instructions = """Conduct thorough, multi-source research on this topic.
Search broadly, cross-reference sources, and synthesize findings.

Provide a comprehensive research report with:
1. OVERVIEW: Thorough summary of the current state of this topic
2. KEY FACTS: All important data points with citations
3. EXPERT PERSPECTIVES: What do authorities in this field say?
4. RECENT DEVELOPMENTS: What's changed in the last 6-12 months?
5. CONTROVERSIES OR DEBATES: Any disagreements or evolving understanding?
6. DATA TABLES: Organize numerical data into structured tables where possible
7. SOURCES RANKED BY AUTHORITY: List all sources, ranked by reliability

This research will be used to create authoritative content, so accuracy and
comprehensiveness are critical."""

    return web_search(client, query, model=MODELS["deep"],
                      context_instructions=instructions)


def batch_mode(client, queries_file, output_file, mode_name="search",
               country=None, delay=1.0):
    """
    Process multiple queries from a JSON file.
    Input format: [{"query": "...", "mode": "search"}, ...]
    or simple: ["query1", "query2", ...]
    """
    with open(queries_file, "r") as f:
        queries = json.load(f)

    # Normalize input format
    if queries and isinstance(queries[0], str):
        queries = [{"query": q, "mode": mode_name} for q in queries]

    results = []
    total = len(queries)

    mode_functions = {
        "search": search_mode,
        "serp_analysis": serp_analysis_mode,
        "competitor_scan": competitor_scan_mode,
        "fact_check": fact_check_mode,
        "paa_discovery": paa_discovery_mode,
        "entity_research": entity_research_mode,
        "keyword_ideas": keyword_ideas_mode,
        "deep_research": deep_research_mode,
    }

    for i, item in enumerate(queries):
        query = item if isinstance(item, str) else item.get("query", "")
        qmode = item.get("mode", mode_name) if isinstance(item, dict) else mode_name
        domains = item.get("domains", None) if isinstance(item, dict) else None

        print(f"[{i+1}/{total}] {qmode}: {query[:80]}...")

        func = mode_functions.get(qmode, search_mode)
        kwargs = {"client": client, "query": query}
        if qmode in ("search", "serp_analysis", "paa_discovery", "keyword_ideas"):
            kwargs["country"] = country
        if qmode in ("search", "competitor_scan", "fact_check") and domains:
            kwargs["domains"] = domains

        result = func(**kwargs)
        result["mode"] = qmode
        results.append(result)

        # Rate limiting — be respectful
        if i < total - 1:
            time.sleep(delay)

    # Save results
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"\nDone! {total} queries processed. Results saved to: {output_file}")
    return results


# ---------------------------------------------------------------------------
# CLI Interface
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Web Research Engine for Semantic SEO Skills",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Modes:
  search          Basic web search (cheapest, fastest)
  serp_analysis   Analyze SERP for a target query (who ranks, formats, snippets)
  competitor_scan Scan competitor content structure and topics
  fact_check      Verify facts and statistics with trusted sources
  paa_discovery   Discover People Also Ask questions and related queries
  entity_research Research entity attributes and relationships
  keyword_ideas   Discover keyword opportunities and content gaps
  deep_research   Thorough multi-source research (slower, more expensive)
  batch           Process multiple queries from a JSON file

Examples:
  %(prog)s --mode search --query "best AI writing tools 2026"
  %(prog)s --mode serp_analysis --query "indoor gardening tips" --country US
  %(prog)s --mode paa_discovery --query "how to grow tomatoes indoors"
  %(prog)s --mode batch --file queries.json --output results.json
        """
    )

    parser.add_argument("--mode", required=True,
                        choices=["search", "serp_analysis", "competitor_scan",
                                 "fact_check", "paa_discovery", "entity_research",
                                 "keyword_ideas", "deep_research", "batch"],
                        help="Research mode to use")
    parser.add_argument("--query", help="Search query (required for all modes except batch)")
    parser.add_argument("--country", help="Two-letter ISO country code (e.g., US, GB, DE)")
    parser.add_argument("--city", help="City name for local results")
    parser.add_argument("--domains", nargs="+", help="Restrict results to these domains")
    parser.add_argument("--file", help="Input JSON file for batch mode")
    parser.add_argument("--output", default="research_results.json",
                        help="Output file for results (default: research_results.json)")
    parser.add_argument("--delay", type=float, default=1.0,
                        help="Delay between batch queries in seconds (default: 1.0)")
    parser.add_argument("--format", choices=["json", "text"], default="text",
                        help="Output format (default: text)")

    args = parser.parse_args()

    # Validate
    if args.mode != "batch" and not args.query:
        parser.error("--query is required for all modes except batch")
    if args.mode == "batch" and not args.file:
        parser.error("--file is required for batch mode")

    client = get_client()

    # Route to the right mode
    if args.mode == "batch":
        batch_mode(client, args.file, args.output, country=args.country,
                   delay=args.delay)
        return

    mode_functions = {
        "search": lambda: search_mode(client, args.query, args.country,
                                       args.city, args.domains),
        "serp_analysis": lambda: serp_analysis_mode(client, args.query, args.country),
        "competitor_scan": lambda: competitor_scan_mode(client, args.query, args.domains),
        "fact_check": lambda: fact_check_mode(client, args.query, args.domains),
        "paa_discovery": lambda: paa_discovery_mode(client, args.query, args.country),
        "entity_research": lambda: entity_research_mode(client, args.query),
        "keyword_ideas": lambda: keyword_ideas_mode(client, args.query, args.country),
        "deep_research": lambda: deep_research_mode(client, args.query),
    }

    result = mode_functions[args.mode]()

    # Output
    if args.format == "json":
        print(json.dumps(result, indent=2, ensure_ascii=False))
    else:
        print(f"\n{'='*80}")
        print(f"MODE: {args.mode} | QUERY: {args.query}")
        print(f"MODEL: {result.get('model', 'unknown')} | TIME: {result.get('timestamp', '')}")
        print(f"{'='*80}\n")
        print(result.get("text", "No results"))
        if result.get("citations"):
            print(f"\n{'─'*80}")
            print(f"SOURCES ({len(result['citations'])} citations):")
            for i, cite in enumerate(result["citations"], 1):
                print(f"  [{i}] {cite.get('title', 'Untitled')}")
                print(f"      {cite.get('url', '')}")
        if result.get("error"):
            print(f"\n⚠ ERROR: {result['error']}")

    # Also save to file
    with open(args.output, "w") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
    print(f"\nResults saved to: {args.output}")


if __name__ == "__main__":
    main()
