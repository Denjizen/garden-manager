import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
<<<<<<< HEAD
  base: '/garden-manager/', // ✅ Correct base
=======
  base: '/garden-manager/', //
>>>>>>> ec244386ebb7e8af204174c1a1ef003bd780d843
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.svg', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'My Garden App',
        short_name: 'GardenApp',
<<<<<<< HEAD
        start_url: '/garden-manager/', // Optional but safer
=======
        start_url: '/garden-manager/', //
>>>>>>> ec244386ebb7e8af204174c1a1ef003bd780d843
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4CAF50',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
