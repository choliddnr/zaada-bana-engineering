// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  devToolbar: {
    enabled: true,
    autoinject: true,
    apps: [
      {
        id: 'astro:audit',
        enabled: false
      }
    ]
  }
});
