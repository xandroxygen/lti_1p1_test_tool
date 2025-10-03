import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { vercelPreset } from '@vercel/remix/vite';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 2918,
  },
  plugins: [
    remix({
      presets: [vercelPreset()],
      ignoredRouteFiles: [".*"],
    }), 
    tsconfigPaths()
  ],
});