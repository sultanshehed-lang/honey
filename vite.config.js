import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  optimizeDeps: {
    noDiscovery: true,
    include: ['react', 'react-dom/client'],
  },
});
