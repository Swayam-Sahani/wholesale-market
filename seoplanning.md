# SEO, Analytics, and MCP Setup Plan

## Purpose

Prepare the Tantu Wholesale Studio storefront to attract independent clothing retailers, boutiques, resellers, and online shops looking for wholesale Indian clothing. This document covers the SEO work and the account setup needed for Google Analytics 4 (GA4), Google Search Console (GSC), Microsoft Clarity, and optional MCP access for analysis.

The current site is a concept preview. It does not yet have a production domain or verified product/pricing data. Do not submit the preview to search engines or publish unverified stock, prices, dispatch promises, contact details, or business claims.

## Current project checks

- `app/layout.tsx` currently uses `https://example.com` as its metadata URL fallback. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain before production.
- The same file currently sets `robots: { index: false, follow: false }`. Keep this while the site is a preview. Change to indexable metadata only after launch readiness checks.
- There is not yet an `app/robots.ts` or `app/sitemap.ts`. Add both once the production domain and crawlable page URLs are final.
- The current inquiry form is a front-end concept. Track a successful enquiry only after it is wired to a real submission flow; do not count a button click as a lead.

## Audience and search positioning

### Primary audience

1. Independent boutiques and clothing retailers buying wholesale ethnic wear.
2. Resellers and online clothing stores looking for wholesale suppliers.
3. Retail teams comparing categories, fabric, pack quantities, minimum order requirements, pricing basis, availability, and dispatch terms.

### Keyword themes to validate

Use these as research starting points, not guaranteed search-volume claims. Validate regional language, demand, and wording in Search Console and a keyword research tool after launch.

| Intent | Example phrases |
| --- | --- |
| Supplier discovery | wholesale Indian clothing supplier, wholesale ethnic wear supplier India, clothing wholesaler for boutiques |
| Product categories | wholesale dress materials, wholesale Pakistani suits, wholesale sarees, wholesale kurtis, wholesale ready-made ethnic wear, wholesale kids ethnic wear |
| Retail business needs | buy ethnic wear in bulk for boutique, wholesale clothing for resellers, wholesale clothing supplier for online store |
| Commercial details | wholesale clothing minimum order, ethnic wear wholesale price list, wholesale clothing catalogue for retailers |

Avoid implying a particular city, manufacturer status, low price, minimum order, delivery speed, or stock level unless the business can substantiate it. If the company serves specific regions, create location pages only when each page has real, useful service information.

## SEO implementation plan

### 1. Production launch foundation

- Select and connect the canonical production domain with HTTPS.
- Set `NEXT_PUBLIC_SITE_URL` to that exact origin (for example, `https://www.example.in`) and use one canonical host consistently.
- Replace placeholder metadata and preview copy with the final brand, contact information, wholesale terms, and accurate product facts.
- Keep noindex on staging/preview environments. Enable indexing only for the production environment after the launch checklist below is complete.
- Add a production `robots.txt` that allows public pages and identifies the sitemap. Do not use `robots.txt` as a substitute for a `noindex` directive on pages that should stay out of results.
- Add a sitemap that lists only canonical, indexable URLs. For the current one-page concept, that may initially be just the homepage; add category and product URLs when those pages exist.

### 2. Page and content structure

Build crawlable pages with distinct purpose and useful original copy:

- Homepage: wholesale Indian clothing sourcing for independent retailers; explain who the service is for and how enquiries/orders work.
- Category landing pages: dress materials, Pakistani suits, sarees, kurtis, ready-to-wear, and kidswear only where those categories are genuinely available.
- Product detail pages: unique product name, accurate images and alt text, fabric, sizes, colour/variant, pack quantity, price basis, minimum order, stock status, dispatch information, and enquiry or purchase action.
- Wholesale information: how ordering works, terms, shipping/dispatch, returns or damage policy, payment methods, FAQs, and verified business details.
- About/contact pages: business identity, support channels, operating location/service area, and appropriate trust information.

Write a unique title and meta description for each important page. Use one clear H1 per page, descriptive H2s, sensible internal links, clean URL slugs, and descriptive image alt text. Avoid duplicate category copy and keyword stuffing. Product and category content should be useful even if a buyer has not contacted the business yet.

### 3. Structured data and technical quality

- Add structured data only for information visible on the page and confirmed by the business. Consider `Organization`/`OnlineStore`, `BreadcrumbList`, and `Product` data as relevant pages are implemented.
- Do not publish `Offer`, price, availability, reviews, shipping, or return-policy markup with invented values. Validate structured data with Google's Rich Results Test and Schema Markup Validator.
- Keep important category and product content available in server-rendered HTML. Give images stable dimensions, responsive sizes, and meaningful alt text.
- Check mobile usability, keyboard access, page loading/Core Web Vitals, canonical URLs, broken links, duplicate metadata, and 404 behavior before launch.
- Avoid indexable thin search/filter URLs. Canonicalize or noindex internal search and filter combinations unless they become intentionally curated landing pages.

### 4. Content roadmap

Publish practical answers to wholesale buyer questions: how pack quantities work, how to compare fabric and finishing, what details to check before ordering, how a new boutique can plan an opening assortment, and how to care for the relevant garments. Base claims on the supplier's real process and products. Add category guides that link to matching live products and enquiry options.

## Google Analytics 4 setup

1. Create or select the business-owned Google Analytics account and GA4 property.
2. Add a Web data stream for the final HTTPS domain. Save the Measurement ID (`G-...`) in a secure project/deployment environment variable such as `NEXT_PUBLIC_GA_MEASUREMENT_ID` (the ID is public configuration, not a secret).
3. Choose one installation route: a direct Next.js integration or Google Tag Manager. Avoid installing both GA4 tags for the same stream, which can double-count events. For Next.js, load the tag once through the root layout and make sure App Router client-side navigation produces page views once per route.
4. Configure and document the site's privacy/cookie notice and any required consent controls for its audience and jurisdictions before enabling analytics. Do not send names, email addresses, phone numbers, form text, or other personal data to GA4.
5. Add a small, stable event plan:

| Event | When it fires | Useful parameters |
| --- | --- | --- |
| `view_category` | A visitor opens a category landing page | `category_name` |
| `select_item` | A visitor opens a product detail page | `item_id`, `item_name`, `item_category` |
| `click_wholesale_enquiry` | A visitor starts an enquiry | `placement`, `category_name` if known |
| `generate_lead` | A real enquiry is successfully accepted | `form_name`, `category_name` if known |

Use GA4's recommended event names where suitable, and do not send personally identifying values in event parameters. Set `generate_lead` as a key event after it represents a completed valid submission. Verify events in DebugView and Realtime; then confirm reports after processing time.

## Google Search Console setup

1. Add the final production domain as a **Domain property** when DNS access is available; verify ownership with the DNS TXT record Google provides. A URL-prefix property can be added as a supplementary property if needed.
2. Keep the DNS verification record in place and ensure the business owner retains full owner access. Grant agency or developer access using the least permission needed.
3. Confirm the site is crawlable and indexable on the production host. Inspect the homepage and key category URLs with URL Inspection.
4. Publish the sitemap, submit its exact URL in Search Console, and review sitemap status and indexing reports.
5. After launch, check Performance by query/page/country/device, Page Indexing, Core Web Vitals, Manual Actions, and Security Issues. Review monthly and after major site changes.
6. Optionally link GA4 and Search Console in the GA4 Admin integrations once both use the same production property/domain.

## Microsoft Clarity setup

1. Create a Clarity account/project for the production domain and retain the site's unique Project ID/tracking code.
2. Install the Clarity snippet once in the Next.js root layout or through the chosen tag manager. Keep it out of preview/staging unless those environments are intentionally measured.
3. Review Clarity masking and privacy settings. Keep personal/form inputs masked; do not expose enquiry details or sensitive information in recordings. Publish an appropriate privacy notice and consent behavior.
4. Verify the installation using Clarity's dashboard/realtime view and the network request to `https://www.clarity.ms/collect`. Allow time for dashboard data to appear.
5. Use recordings and heatmaps to identify mobile navigation issues, category discovery friction, and enquiry form drop-offs. Treat recordings as diagnostic, not as proof of why a visitor behaved a certain way.

## MCP connections for analytics and SEO data

MCP connects an AI client to analytics APIs; it does **not** install the website tracking tags or create/verify the service accounts. Finish GA4, Search Console, and Clarity setup first. Keep MCP configuration in the MCP client's user-level settings when possible, and never commit API tokens, OAuth client secrets, credential JSON, or personal ADC files to this repository.

### Google Analytics MCP

- Google publishes an official [Google Analytics MCP server](https://github.com/googleanalytics/google-analytics-mcp); its documentation describes report tools as read-focused, although optional write capabilities exist. Do not enable write mode for routine analysis.
- Follow the repository's current instructions to install its Python runner, enable the Google Analytics Admin API and Data API in the associated Google Cloud project, and create Application Default Credentials for a user/service account that has **Viewer** access to the relevant GA4 property.
- Use the `analytics.readonly` scope. Restrict access to the correct Cloud project and GA4 property. Avoid `--allow-write` and the `analytics.edit` scope for this use case.
- Add the local server to the MCP client used for analysis (for Codex, the user-level `~/.codex/config.toml` is the global settings location; alternatively use the Codex MCP UI/CLI if available). The exact command/config format should follow the current server and Codex documentation. The upstream example uses `pipx run analytics-mcp`, `GOOGLE_APPLICATION_CREDENTIALS`, and `GOOGLE_CLOUD_PROJECT`.
- Confirm it is connected, then test with a read-only request such as: “Report sessions and `generate_lead` key events by landing page for the last 28 days.”

### Google Search Console MCP

- Google Search Console has no official Google-maintained MCP server documented in the Search Console setup guidance. Any GSC MCP server is third-party; review its source, release history, requested OAuth scopes, and data handling before connecting it.
- Prefer a server with read-only Search Console access. Grant the Google account only the Search Console property access required. Do not grant a broad write scope if the server only needs performance reports and inspection.
- An example community project is [jurgisgavenas/search-console-mcp](https://github.com/jurgisgavenas/search-console-mcp), described by its repository as read-only. Re-check its current code and auth scopes before use; this is an example, not an endorsement or guarantee.
- Configure it in the MCP client using the repository's current setup guide. Test queries, pages, country, device, and date filters using requests such as: “Show top non-branded queries by impressions with average position and CTR for the last 28 days.”

### Microsoft Clarity MCP

- Microsoft maintains [`@microsoft/clarity-mcp-server`](https://github.com/microsoft/clarity-mcp-server). It reads Clarity project analytics and recordings through the Clarity Data Export API.
- In Clarity, create an API token for the appropriate project/account. Store it using the MCP client's protected secret facility if supported. The upstream README currently documents passing a token to the server; do not put a real token in a committed config file or paste it into this planning document.
- Add the local server to the MCP client (the upstream package is run with `npx @microsoft/clarity-mcp-server`). Restart/reload the client and verify the server's tools are available.
- Start with aggregated analytics questions (mobile/desktop engagement, top pages, referrers). Only retrieve session recordings when needed, and review recording access/masking practices before doing so.

### MCP connection checklist

- [ ] Use the production-owned accounts and the least-privileged user/service identity.
- [ ] Keep tokens and credential files outside Git; confirm `.gitignore` and secret storage before adding local config.
- [ ] Review each server's official repository, scopes, permissions, and current release instructions before installation.
- [ ] Confirm all three MCP servers connect and can read the intended property/project, with no write tools enabled unless explicitly required.
- [ ] Test with one small date range, verify timezone and property selection, then save reusable reporting prompts.
- [ ] Revoke credentials promptly if a device, config, or token is exposed; rotate them periodically according to account policy.

## Launch checklist and cadence

### Before publishing

- [ ] Confirm real domain, canonical host, HTTPS, business contact details, wholesale policies, categories, images, and product facts.
- [ ] Keep staging noindex; remove production noindex only when the site is ready for public discovery.
- [ ] Add and check `robots.txt`, sitemap, canonical metadata, page titles/descriptions, and social preview metadata.
- [ ] Verify Search Console and Analytics ownership/access; install and verify GA4 and Clarity once each.
- [ ] Test enquiry submission end-to-end and confirm no personal data is sent to analytics.
- [ ] Check mobile layout, page speed, structured data, broken links, accessibility, and 404 page.

### First 90 days

- **Weekly for the first month:** review indexing errors, broken forms, analytics events, and Clarity friction points.
- **Monthly:** compare Search Console impressions/clicks/queries and GA4 landing page sessions/leads; expand useful category content based on actual demand.
- **After changes:** use URL Inspection for important new/updated pages and re-check analytics/Clarity instrumentation.
- **Quarterly:** audit product data, internal links, redirects, access permissions, tracking consent, and unused credentials.

## Official setup references

- [Google Analytics for websites](https://developers.google.com/analytics/devguides/collection/ga4/web)
- [Google Analytics MCP setup and capabilities](https://developers.google.com/analytics/devguides/MCP)
- [Google Analytics MCP source and current installation guide](https://github.com/googleanalytics/google-analytics-mcp)
- [Get started with Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Microsoft Clarity setup and installation](https://learn.microsoft.com/clarity/setup-and-installation/clarity-setup)
- [Microsoft Clarity MCP server](https://github.com/microsoft/clarity-mcp-server)
- [Codex MCP connection guidance](https://developers.openai.com/learn/docs-mcp)
