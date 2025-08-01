import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
   plugins: [react(), tailwindcss()],
   resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
         app: path.resolve(__dirname, 'src/app'),
         pages: path.resolve(__dirname, 'src/pages'),
         features: path.resolve(__dirname, 'src/features'),
         entities: path.resolve(__dirname, 'src/entities'),
         shared: path.resolve(__dirname, 'src/shared'),
         widgets: path.resolve(__dirname, 'src/widgets'),
      },
   },
   build: {
      outDir: 'dist',
      emptyOutDir: true,
   },
   publicDir: 'public',
   server: {
      host: true,
   },
});
