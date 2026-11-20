import { defineConfig, passthroughImageService } from 'astro/config';

export default defineConfig({
  site: 'https://cotanjant.github.io',
  output: 'static',
  image: {
    service: passthroughImageService(),
  },
});
