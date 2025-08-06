// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://ananda04.github.io/Arnav-site/',
  base: '/Arnav-site/',
  integrations: [tailwind()],
});
