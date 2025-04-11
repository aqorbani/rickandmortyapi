import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'Rick and Morty App',
        short_name: 'R&M',
        description: 'A Rick and Morty character browser',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/img/rm.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        navigateFallback: '/index.html',
      },
    }),
  ],
});
