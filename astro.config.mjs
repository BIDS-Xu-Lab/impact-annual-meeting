// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Production URL — enables canonical links, absolute OG image URLs, and the sitemap.
  // Served at the root of the subdomain, so no `base` is needed.
  site: 'https://annual.impact-mh.org',
  integrations: [sitemap()],
});
