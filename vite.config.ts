/* vite.config.ts */

import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// Bun-compatible fileURLToPath
const fileURLToPath = (url: URL | string) => {
  const str = typeof url === "string" ? url : url.toString();
  return str.replace(/^file:\/\//, "");
};

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": fileURLToPath(new URL(".", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/main.scss";`,
      },
    },
  },
});
