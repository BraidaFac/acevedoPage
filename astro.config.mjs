// @ts-check
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["3ce551e8ffd9.ngrok-free.app", "*"],
    },
    assetsInclude: ["**/*.heic", "**/*.HEIC"],
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  integrations: [react(), icon()],
});
