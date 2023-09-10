import { defineConfig, loadEnv } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig((props) => {
  const env = loadEnv(props.mode, process.cwd());
  const envWithProcessPrefix = {
    'process.env': `${JSON.stringify(env)}`,
  };

  return {
    plugins: [react()],
    build: {
      chunkSizeWarningLimit: 1600,
    },
    server: {
      port: 3030,
    },
    preview: {
      port: 8080,
    },
    define: envWithProcessPrefix,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
