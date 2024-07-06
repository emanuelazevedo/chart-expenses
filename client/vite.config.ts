import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": "/src/components/index.ts",
      "@/hooks": "/src/hooks/index.ts",
      "@/types": "/src/types/types.ts",
      "@/constants": "/src/constants/index.ts",
    },
  },
});
