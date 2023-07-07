import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import process from '.eslintrc.cjs';

// Carrega as variáveis de ambiente
dotenv.config();

export default defineConfig({
  base: '/money-sage/',
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    }
  },
  define: {
    'process.env': process.env
  }
});
