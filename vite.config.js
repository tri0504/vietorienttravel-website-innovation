// Vite configuration for the React application.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Enables JSX transformation and React Fast Refresh during development.
  plugins: [react()],
});
