
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        nested: resolve(import.meta.dirname, 'menu.html'),
      },
    },
  },
});

