import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://harmattansolar.com.ng',
  integrations: [sitemap()],
});
