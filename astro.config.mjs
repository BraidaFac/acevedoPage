// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["c2df-181-105-91-139.ngrok-free.app", "127.0.0.1"],
    },
  },
  integrations: [react(), icon()],
});
