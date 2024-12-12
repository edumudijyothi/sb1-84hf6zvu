import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ['@babel/preset-react'],
        babelrc: false,
        configFile: false
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  server: {
    port: 5173,
    host: true
  }
});