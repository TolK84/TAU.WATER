import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// preview.html — dev-only харнесс: намеренно не указан в build.rollupOptions.input,
// поэтому в dist попадает только index.html.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
