# CalculateCreator.com AdSense Fix - Claude Code Prompts

## Overview
This package contains 14 prompts designed to fix the "low-value content" AdSense rejection for calculatecreator.com using Claude Code.

**Estimated Time:** 14-20 hours (vs 60-80 hours manual)
**Prompts:** 14 total
**Pages Affected:** 36 calculators + FAQ + About

## Quick Start

### 1. Setup Claude Code Project
```bash
# Navigate to your project
cd /path/to/calculatecreator

# Copy CLAUDE.md to your project root
cp CLAUDE.md /path/to/calculatecreator/CLAUDE.md
```

### 2. Run Prompts in Order
Execute prompts sequentially. Each prompt file contains the full context and instructions.

## Prompt Sequence

| # | File | Purpose | Time |
|---|------|---------|------|
| 01 | `01-codebase-analysis.md` | Understand project structure | 15-30 min |
| 02 | `02-faq-page-critical.md` | **CRITICAL:** Fix empty FAQ | 45-60 min |
| 03 | `03-author-attribution-component.md` | Create author component | 20-30 min |
| 04 | `04-calculator-content-template.md` | Create content templates | 45-60 min |
| 05 | `05-batch1-monetization-calculators.md` | Enrich 6 calculators | 90-120 min |
| 06 | `06-batch2-engagement-calculators.md` | Enrich 6 calculators | 90-120 min |
| 07 | `07-batch3-growth-calculators.md` | Enrich 6 calculators | 90-120 min |
| 08 | `08-batch4-business-calculators.md` | Enrich 6 calculators | 90-120 min |
| 09 | `09-batch5-currency-calculators.md` | Enrich 6 calculators | 90-120 min |
| 10 | `10-batch6-advanced-calculators.md` | Enrich 6 calculators | 90-120 min |
| 11 | `11-about-page-enhancement.md` | Enhance About page | 30-45 min |
| 12 | `12-technical-audit.md` | Run technical audit | 45-60 min |
| 13 | `13-final-content-review.md` | Quality review | 60-90 min |
| 14 | `14-adsense-submission-guide.md` | Submit to AdSense | 30-45 min |

## How to Use Each Prompt

### Option A: Copy-Paste Full Prompt
1. Open the prompt file
2. Copy the content inside the ``` code block under "## Prompt"
3. Paste into Claude Code
4. Let Claude execute

### Option B: Reference File
1. In Claude Code, reference the file: "Follow the instructions in 02-faq-page-critical.md"
2. Claude will read and execute

## Execution Tips

### Before Starting
- [ ] Commit your current codebase (create backup branch)
- [ ] Have your project open in Claude Code
- [ ] Copy CLAUDE.md to project root

### During Execution
- Run one prompt at a time
- Review output before proceeding
- Test functionality after each batch
- Commit after each successful prompt

### Quality Checkpoints
After prompts 05-10 (calculator batches):
- [ ] Verify calculator still functions
- [ ] Check word count (target: 800+)
- [ ] Review mobile layout
- [ ] Test internal links

## File Structure

```
calculatecreator-prompts/
├── CLAUDE.md                          # Project context (copy to your repo)
├── README.md                          # This file
├── 01-codebase-analysis.md           # Foundation
├── 02-faq-page-critical.md           # Critical fix
├── 03-author-attribution-component.md # E-E-A-T component
├── 04-calculator-content-template.md  # Content template
├── 05-batch1-monetization-calculators.md  # 6 calculators
├── 06-batch2-engagement-calculators.md    # 6 calculators
├── 07-batch3-growth-calculators.md        # 6 calculators
├── 08-batch4-business-calculators.md      # 6 calculators
├── 09-batch5-currency-calculators.md      # 6 calculators
├── 10-batch6-advanced-calculators.md      # 6 calculators
├── 11-about-page-enhancement.md       # E-E-A-T page
├── 12-technical-audit.md              # QA check
├── 13-final-content-review.md         # Final review
└── 14-adsense-submission-guide.md     # Submission
```

## Success Metrics

### Minimum Requirements for AdSense
- [ ] All 36 calculator pages: 800+ words
- [ ] FAQ page: 35+ answered questions
- [ ] About page: Team section with bios
- [ ] Author attribution on all calculators
- [ ] All existing functionality preserved
- [ ] Mobile responsive
- [ ] PageSpeed 80+ on mobile

### Expected Outcomes
- **Approval Rate:** 85-90% after fixes
- **Timeline:** 2-4 weeks for AdSense review
- **Traffic Impact:** 40-60% organic growth from enriched content

## Troubleshooting

### Claude Code Runs Too Long
- Break large prompts into smaller chunks
- Focus on 3 calculators at a time instead of 6
- Run during off-peak hours

### Calculator Breaks After Changes
- Check JavaScript console for errors
- Verify component imports
- Test with original input values
- Rollback and try again if needed

### Content Doesn't Match Styling
- Share existing calculator component code with Claude
- Reference specific CSS classes
- Include screenshot of desired outcome

### Word Count Not Meeting Target
- Ask Claude to expand specific sections
- Add more tips (8 → 12)
- Expand real examples
- Add more FAQ questions

## Support

If you encounter issues:
1. Review the specific prompt's "Expected Output" section
2. Run the technical audit (Prompt 12) to identify problems
3. Check the final review (Prompt 13) for quality gaps

## License
These prompts are provided for use with the CalculateCreator.com project.

---

**Good luck with your AdSense approval!**
