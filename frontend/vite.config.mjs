import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No '@tailwindcss/vite' needed for Tailwind to work
export default defineConfig({
  plugins: [react()],
})
