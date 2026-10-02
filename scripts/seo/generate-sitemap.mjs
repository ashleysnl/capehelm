import { writeFile } from 'node:fs/promises';
import { publicRoutes, renderSitemap } from './routes.mjs';
const routes=await publicRoutes();
await writeFile(new URL('../../public/sitemap.xml',import.meta.url),renderSitemap(routes));
console.log(`Generated sitemap for ${routes.length} canonical public routes.`);
