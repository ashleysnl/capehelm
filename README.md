# Capehelm Website

Official product website for Capehelm, a local-first personal-finance application for Mac with an iPhone companion.

## Stack

- TypeScript and React
- vinext / Vite
- Cloudflare Workers-compatible Sites output
- Static product content with no database, authentication, or finance-data processing
- Google Analytics for public website traffic measurement; no application or personal finance content is sent

## Development

```bash
npm install
npm run dev
```

Open the local address printed by the development server.

## Verification and production build

```bash
npm run lint
npm test
```

`npm test` creates the production build, verifies all public routes render,
and checks the published robots and sitemap files.

## Project map

- `app/` — Home, Features, Privacy and Download routes, global metadata and styling
- `components/` — shared site chrome, product screenshots and landing-page presentation
- `config/pageMetadata.ts` — canonical, Open Graph and Twitter/X metadata shared by public pages
- `config/site.ts` — product name, navigation and availability status
- `public/CNAME` — GitHub Pages custom-domain declaration for `capehelm.com`
- `public/robots.txt` — crawler access rules and production sitemap declaration
- `public/sitemap.xml` — canonical production URLs for all public marketing pages
- `public/brand/` — approved Capehelm logo, mark and app icon copied from the product repository
- `public/assets/capehelm-social-1200x630.png` — canonical social-sharing card using the approved Dashboard screenshot

All finance UI displayed on the website uses approved current Capehelm screenshots with clearly fictional demonstration data. No product screenshots containing personal finance information are used.

## Download configuration

Edit `config/site.ts`:

- `macAppStoreUrl`: the production Capehelm listing used by every App Store CTA and structured-data install link.
- `download.status`, `download.url`, link handling and public availability copy are resolved from the shared site configuration.
- `version`: internal product version; it is intentionally not shown in marketing copy.

Capehelm is available from the Mac App Store. The website links to the shared production listing rather than a version-specific download.

## SEO and deployment

The GitHub Pages workflow sets `NEXT_PUBLIC_SITE_URL` to the canonical `https://capehelm.com` origin. The production export is served from the root path, so asset and navigation URLs must not include the former `/capehelm` project prefix. GitHub Pages copies `public/CNAME`, `public/robots.txt`, and `public/sitemap.xml` into the deployed site root. Hosting configuration is maintained in `.openai/hosting.json` by Sites.

## Technical SEO regression checks

Run `npm run test:seo:live` for public production checks. Build checks remain in `npm test`; production checks run after the Pages deployment and verify the deployed commit before checking routes, assets, headers, redirects and 404s. See [docs/seo/REGRESSION_CHECKS.md](docs/seo/REGRESSION_CHECKS.md) for commands, coverage and limitations.
