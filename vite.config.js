import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import Unfonts from 'unplugin-fonts/vite';


export default defineConfig({
  plugins: [
    react(),
    Unfonts({ 
      google: {
        families: ['Manrope']}
    }),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  server: {
    open: "/pet-app-frontend",
    port: 8000,
  },
  base: "/pet-app-frontend",
});
