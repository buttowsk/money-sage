import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente
dotenv.config();

export default defineConfig({
  base: '/money-sage/',
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0'
  },
  define: {
    'process.env': process.env
  }
});
