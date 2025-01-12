import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vite.dev/config/
/* eslint-env node */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
      "@scss": path.resolve(__dirname, "./src/assets/scss"),
      "@typings": path.resolve(__dirname, "./src/typings"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@theming": path.resolve(__dirname, "./src/theming"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@thunks": path.resolve(__dirname, "./src/thunks"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@interceptors": path.resolve(__dirname, "./src/interceptors"),
      "@environments": path.resolve(__dirname, "./src/environments"),
      "@images/": path.resolve(__dirname, "./public/images"),
    }
  },
})
