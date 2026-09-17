# Capehelm Website

Official product website for Capehelm, a local-first personal-finance application for Mac with an iPhone companion.

## Stack

- TypeScript and React
- vinext / Vite
- Cloudflare Workers-compatible Sites output
- Static product content with no database, authentication, analytics, or finance-data processing

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

`npm test` creates the production build and verifies all four public routes render.

## Project map

- `app/` — Home, Features, Privacy and Download routes, global metadata and styling
- `components/` — shared site chrome and synthetic product visuals
- `config/site.ts` — product name, navigation and availability status
- `public/brand/` — approved Capehelm logo, mark and app icon copied from the product repository
- `public/og.png` — bespoke social-sharing card

All finance UI displayed on the website is constructed from clearly synthetic demonstration data. No product screenshots containing personal finance information are used.

## Download configuration

Edit `config/site.ts`:

- `download.status`: keep `coming-soon` until public distribution is approved.
- `download.url`: keep `null` until a notarized, approved public artifact exists.
- `download.label` and `download.note`: public-facing release status.
- `version`: internal product version; it is not shown while Capehelm is unavailable.

Capehelm is not yet available from the Mac App Store or as a direct download. The website deliberately makes no release-date commitment and does not link an installable binary.

## SEO and deployment

Open Graph URLs are derived from the incoming request host. Set `NEXT_PUBLIC_SITE_URL` to the final canonical origin when a permanent hostname is assigned so `sitemap.xml` uses it. Hosting configuration is maintained in `.openai/hosting.json` by Sites.
