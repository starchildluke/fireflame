import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  integrations: [sitemap()],
  site: "https://www.firefla.me",
  trailingSlash: 'always',
  vite: {plugins: [yaml()]}
});
