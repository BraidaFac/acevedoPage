// @ts-check
import react from "@astrojs/react";
import vercelStatic from "@astrojs/vercel/static";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["623463d441a6.ngrok-free.app", "*"],
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
