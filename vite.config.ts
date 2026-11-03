import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using relative base ensures static assets load correctly both on GitHub Pages subpaths (e.g. /easyflow-website/) and on custom apex/root domains
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        promptflow: resolve(__dirname, 'promptflow/index.html'),
        promptflowPrivacyPolicy: resolve(__dirname, 'promptflow/privacy-policy/index.html'),
        spendoraDeleteAccount: resolve(__dirname, 'spendora/delete-account/index.html'),
        spendoraPrivacyPolicy: resolve(__dirname, 'spendora/privacy-policy/index.html'),
      },
    },
  },
});
