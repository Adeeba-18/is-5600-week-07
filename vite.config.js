import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      '5ad29637-4a65-4988-8162-5126666dbdd3-00-2f6zivy75razr.janeway.replit.dev',
      'localhost'
    ]
  }
})
