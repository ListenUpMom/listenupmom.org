# Listen Up, Mom!

A Glossier-inspired website for mother-daughter hearing health awareness. This is a Girl Scout Gold Award Project.

## Overview

Listen Up, Mom! celebrates the bond between mothers and daughters while raising awareness about women's hearing health. The site features:

- **Interactive data visualizations** showing hearing loss statistics by age, treatment gaps, and global impact
- **Triple perspective content** (For Daughters / For Moms / For Policymakers toggle)
- **WHO H.E.A.R.I.N.G. framework** — 7 evidence-based policy actions for policymakers
- **Country Brief PDF download** — branded 2-page PDF with country-specific data + policy asks + adoption checkmarks
- **Per-country H.E.A.R.I.N.G. adoption tracking** — checkmarks for adopted policies, highlighted opportunities
- **Evidence-based information** with proper citations to WHO, NIDCD, and peer-reviewed sources
- **Beautiful Glossier-inspired design** with millennial pink, cream, and lavender palette

## Key Features

### Public Pages
- **Homepage (/)**: Hero section, data visualizations, global perspective with country spotlight, brain health, listening connection, perspective toggle (daughters/moms/policymakers), audience-aware CTA, our story, citations

### Hidden Prototype Pages (development only, excluded from production build)
- **/prototype**: Sound wave jewelry concept - upload/record audio and see it as Kendra Scott-inspired jewelry mockups
- **/research**: Placeholder visualizations for future DFW Metroplex survey data from university partnership
- **/assets**: Brand assets page (logos, letterhead)
- These routes are removed from `App.tsx` so they are not included in the production bundle

### PDF Country Brief
- **2-page branded PDF** generated client-side via jspdf, designed to print double-sided on one sheet
- **Header**: Logo icon + "Listen Up, Mom!" bold text + tagline in italic + contact info (text-based, no letterhead PNG)
- **Numbered APA references** [1]-[9] inline in cards, full APA citations in "References" section at bottom of each page (bounded to avoid overflow into footer)
- **Icons drawn next to each card title** matching website's lucide-react icons (Users, Heart, Brain, Globe, etc.)
- **Readable font sizes**: 7-18pt range, chart labels 6.5-7pt, body 7-8pt, titles 11pt, stat numbers 14-18pt
- **Dynamic layout**: card heights (68/48/68/20mm), references measured before placement, content capped to prevent page overflow
- **Page 1 — General Advocacy Data** (DataVisualizations + BrainHealth):
  - "Hearing Loss by Age" drawn line chart + "The Treatment Gap" grouped bar chart (legend above chart, no overlap)
  - "Global Overview" stacked rows + "The Path Forward" stat blocks
  - Three brain health cards: "#1 Risk Factor" (horizontal bars), "Risk Multiplier" (line chart), "Investment Comparison" (bar chart + cost rows)
  - Three bottom stat boxes: 48%, $30, 45%
- **Page 2 — Country Data** (matches website Country Spotlight layout):
  - Country name + region badge
  - Two side-by-side cards: "Hearing Loss Overview" + "Women & Girls" (with properly wrapped bold inline labels — no text overlaps)
  - "The Dementia Connection" card with 3 stat boxes
  - "Notable Findings" card (if data exists)
  - "H.E.A.R.I.N.G. Framework Progress" card (if adoption data) with badge pills
  - For countries without adoption data: italic note referencing page 1
  - Logo + footer with contact info
- **File**: `client/src/lib/generate-country-pdf.ts`
- **Assets**: `client/src/lib/pdf-assets.ts` (logo base64)
- **Download button** appears in Country Spotlight when a country is selected

### WHO H.E.A.R.I.N.G. Framework (For Policymakers tab)
- **H** — Hearing Screening: mandate newborn/school/adult screening
- **E** — Ear Disease Prevention: fund prevention campaigns, expand immunization
- **A** — Access to Technology: include hearing aids in insurance/subsidy programs
- **R** — Rehabilitation Services: train primary care workers, integrate audiology
- **I** — Improved Communication: require captioning, fund sign language programs
- **N** — Noise Reduction: legislate sound levels, regulate device output
- **G** — Greater Community Engagement: normalize hearing checks, reduce stigma
- Source: WHO World Report on Hearing, 2021
- Data file: `client/src/lib/hearing-data.ts` (policymakerActions array)
- Type: `PolicymakerAction` in `shared/schema.ts`

### H.E.A.R.I.N.G. Adoption Tracking
- Per-country data on which H.E.A.R.I.N.G. pillars are adopted vs remaining
- Interface: `HearingFrameworkAdoption` in `client/src/lib/country-hearing-data.ts`
- 15 countries populated: Australia, Brazil, China, Denmark, France, Germany, Greece, India, Japan, Norway, South Korea, Sweden, Switzerland, UK, US
- Shown in Country Spotlight UI with checkmarks/badges + hyperlinked source (WHO World Report on Hearing, 2021)
- Shown in PDF Page 1 with colored ADOPTED/OPPORTUNITY badge pills (ASCII-safe, no Unicode)
- Countries without adoption data show italic note: "Country-specific adoption data not yet available"
- All enriched findings have credible hyperlinked source URLs (no empty URLs)

### ROI Statistics (Distinct)
- **$16 return**: WHO economic ROI — every $1 invested in ear and hearing care returns $16 in economic benefits over 10 years (WHO H.E.A.R.I.N.G. framework)
- **$30 saved**: Dementia-related care savings — every $1 spent on hearing treatment saves $30 in dementia-related care costs (PMC analysis)
- Both numbers appear in PDF; labels are distinct to avoid confusion

## Deployment

### GitHub Pages (Production)
- **Workflow**: `.github/workflows/deploy.yml` auto-deploys on push to `main`
- **Build**: `npx vite build` outputs to `dist/public/`
- **SPA routing**: `404.html` is a copy of `index.html` for client-side routing fallback
- **Custom domain**: `client/public/CNAME` contains `listenupmom.org`
- **Hidden pages excluded**: `/prototype`, `/research`, `/assets` routes removed from `App.tsx` — Vite tree-shaking excludes their code from the production bundle
- **All data is client-side**: No backend API needed; all hearing data, country data, and PDF generation runs in the browser

### GoDaddy DNS Setup
1. Push code to GitHub and enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
2. Add custom domain `listenupmom.org` in GitHub Pages settings
3. At GoDaddy, add DNS records:
   - CNAME: `www` → `<username>.github.io`
   - A records for apex domain: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Wait for DNS propagation and GitHub's automatic SSL certificate

### Development (Replit)
- `npm run dev` starts Express + Vite dev server on port 5000
- Hidden prototype pages (`/prototype`, `/research`, `/assets`) still exist as source files but are not routed in the app
- All changes made here; push to GitHub to deploy

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom Glossier-inspired color palette
- **Charts**: Recharts for data visualizations
- **PDF**: jspdf for client-side PDF generation
- **Animation**: Framer Motion
- **Backend**: Express.js (development only — not needed for production)

## Design System

### Colors (Light Mode)
- Primary: Millennial pink (345 50% 45% — WCAG compliant)
- Secondary: Soft lavender (270 30% 94%)
- Accent: Soft peach (20 50% 95%)
- Background: Soft cream (30 50% 98%)
- Chart-5 accent green: used for policymaker content

### Typography
- Sans: Plus Jakarta Sans / Inter
- Serif: Playfair Display (headings, taglines)
- Mono: JetBrains Mono

## Citations & Sources

All statistics are properly cited with links to:
- NIDCD (National Institute on Deafness and Other Communication Disorders)
- WHO (World Health Organization)
- PAHO (Pan American Health Organization)
- Lancet Commission on Dementia Prevention, 2024
- Peer-reviewed journal articles

## Recent Changes

- February 2026: PDF pages reversed — Page 1 = general advocacy data, Page 2 = country-specific data
- February 2026: PDF header redesigned with logo icon + text branding (no letterhead PNG)
- February 2026: PDF font sizes increased to readable print sizes (9-22pt, minimum 7.5pt)
- February 2026: PDF sources converted to full APA-style references
- February 2026: PDF icons drawn next to each card title matching website's lucide-react icons
- February 2026: Fixed all PDF text overlaps (Women & Girls bold labels, Key insight text, chart legend)
- February 2026: Treatment Gap chart legend moved above chart to avoid overlapping data bars
- February 2026: Complete PDF redesign — Page 1 matches website Country Spotlight layout, Page 2 shows general advocacy data with drawn charts
- February 2026: Added source citations to Hearing Loss Overview and Women & Girls cards on website
- February 2026: Hyperlinked H.E.A.R.I.N.G. Framework Progress source citation on website
- February 2026: Fixed all empty source URLs in enriched findings (11 findings across 8 countries now have credible hyperlinked sources)
- February 2026: PDF uses ASCII-safe badge pills (no Unicode) for Adopted/Opportunity badges
- February 2026: Countries without adoption data show explicit note in PDF
- February 2026: Added per-country H.E.A.R.I.N.G. adoption tracking (15 countries with checkmarks/opportunity badges in UI + PDF)
- February 2026: Clarified $16 vs $30 ROI statistics (distinct labels: economic benefits vs dementia-related care)
- February 2026: Increased Dementia Connection stat font sizes (text-3xl for #1 and 2-5x, text-2xl for "Stronger in women")
- February 2026: Added branded letterhead/logo to PDF (base64 embedded via pdf-assets.ts)
- February 2026: Added "For Policymakers" tab with WHO H.E.A.R.I.N.G. framework (7 evidence-based policy actions)
- February 2026: Added 2-page PDF Country Brief download (jspdf, client-side generation)
- February 2026: Made "Ready to Listen Up?" CTA section audience-aware (For Families / For Policymakers toggle)
- February 2026: Removed milestone cards (Silver Award / Gold Award / CSW70) from Our Story
- Homepage section order: Hero → Data Visualizations → Global Perspective → Brain Health → Listening Connection → Perspective Toggle → Call to Action → Our Story → Citations
- Photo Interlude removed entirely (diluted impact, stacked too many photo sections)
- Strategic photography (2 photos only, each earning its place):
  - Hero: No photo — clean typographic hero with warm gradient background (from-primary/5)
  - Brain Health: Grandmother-granddaughter hug (IMG_7577) as circular portrait in narrative card
  - Our Story: Single Jenny Watts professional photo (founders.jpg)
  - Listening Connection: No photo — clean 3-column card grid
- Interactive Country Spotlight in Global Perspective section:
  - Searchable dropdown with 205 countries/territories from GBD 2021 data
  - Shows per-country: prevalence rate, estimated affected, 30-year trend, hearing aid adoption
  - Women & Girls section: estimated women affected, treatment gap, youth at risk, menopause connection
  - Dementia Connection section: #1 modifiable risk factor, 2-5x risk multiplier, stronger link in women
  - H.E.A.R.I.N.G. Framework Progress section (when adoption data available)
  - Download Country Brief button when country is selected
  - Country data file: `client/src/lib/country-hearing-data.ts`

## User Preferences

- Tagline "Because every I love you deserves to be heard" is central to brand
- All content must have proper academic citations
- Narrative + data hybrid approach for maximum impact
- Site maintained by teenager - avoid features requiring constant content updates
- Origin story based on founder's own words from presentations (authentic voice)
- No CSW70 references on PDF or public-facing content badges
- No personal information about founder (she is a minor)
- Contact: hello@listenupmom.org (organization email, parent-monitored)
- Domain: listenupmom.org (preferred for advocacy), listenupmom.com (redirect)
- Domain registrar: GoDaddy
