import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eurocall.gr',
  // Static output — δωρεάν Netlify, άριστο SEO, μηδέν συντήρηση.
  output: 'static',
  integrations: [sitemap()],
});
