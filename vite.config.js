import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: "build",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/admin/main.jsx"),
      output: {
        entryFileNames: "admin.js",
        assetFileNames: "admin.css",
      },
    },
  },
});
