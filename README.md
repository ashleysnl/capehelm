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

`npm test` creates the production build, verifies all five public routes render,
and checks the published robots and sitemap files.

## Project map

- `app/` — Home, Features, Privacy and Download routes, global metadata and styling
- `components/` — shared site chrome and synthetic product visuals
- `config/site.ts` — product name, navigation and availability status
- `public/CNAME` — GitHub Pages custom-domain declaration for `capehelm.com`
- `public/robots.txt` — crawler access rules and production sitemap declaration
- `public/sitemap.xml` — canonical production URLs for all public marketing pages
- `public/brand/` — approved Capehelm logo, mark and app icon copied from the product repository
- `public/og.png` — bespoke social-sharing card

All finance UI displayed on the website is constructed from clearly synthetic demonstration data. No product screenshots containing personal finance information are used.

## Download configuration

Edit `config/site.ts`:

- `macAppStoreUrl`: keep `null` until the production `apps.apple.com` listing is live, then set it once to activate every App Store CTA.
- `download.status`, `download.url`, link handling and public availability copy are resolved automatically from `macAppStoreUrl`, with `/download` as the safe pre-launch fallback.
- `version`: internal product version; it is not shown while Capehelm is unavailable.

Capehelm is not yet available from the Mac App Store or as a direct download. The website deliberately makes no release-date commitment and does not link an installable binary.

## SEO and deployment

The GitHub Pages workflow sets `NEXT_PUBLIC_SITE_URL` to the canonical `https://capehelm.com` origin. The production export is served from the root path, so asset and navigation URLs must not include the former `/capehelm` project prefix. GitHub Pages copies `public/CNAME`, `public/robots.txt`, and `public/sitemap.xml` into the deployed site root. Hosting configuration is maintained in `.openai/hosting.json` by Sites.
