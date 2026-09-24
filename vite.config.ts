import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// preview.html — dev-only харнесс: намеренно не указан в build.rollupOptions.input,
// поэтому в dist попадает только index.html.
// base — из VITE_BASE (GitHub Pages: '/TAU.WATER/', задаётся в .github/workflows/deploy.yml);
// без переменной — от корня '/' (dev, preview, собственный домен).
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
})
