import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@app": "/src/app",
      "@shared": "/src/shared",
      "@widgets": "/src/widgets",
      "@entities": "/src/entities",
    },
  },
});
