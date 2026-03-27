import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Layihənin kök qovluqdan başladığını dəqiqləşdiririk
  build: {
    outDir: 'dist', // Vercel-in hara baxacağını bildiyindən əmin oluruq
  }
})