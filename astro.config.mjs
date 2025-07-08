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
      allowedHosts: ["62d2-181-110-151-174.ngrok-free.app", "127.0.0.1"],
    },
  },
  integrations: [react(), icon()],
});
