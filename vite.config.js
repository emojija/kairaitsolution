// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // important for relative paths in production
  plugins: [tailwindcss()],
})
