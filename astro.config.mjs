import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ananda04.github.io/Arnav-site/',
  base: '/Arnav-site/',
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()], // Only tailwindcss, no autoprefixer
      },
    },
  },
});
