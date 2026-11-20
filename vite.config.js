import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The recommended repository name is Abinjoseph06.github.io, so the site is served from /.
export default defineConfig({ plugins: [react()], base: '/' });
