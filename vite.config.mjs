import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: "0.0.0.0",
    fs: {
      strict: false,
    },
  },
  build: {
    sourcemap: true,  // מאפשר יצירת source maps
    minify: false,     // מבטל מיזעור כדי לראות שגיאות בצורה ברורה יותר
  },
  plugins: [react()],
});
