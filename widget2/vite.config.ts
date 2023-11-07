import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002
  },
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      name: 'widget2',
      entry: path.resolve(__dirname, 'src/main.tsx')
    },
    rollupOptions: {
      output: [
        {
          dir: './dist',
          esModule: true,
          format: 'esm',
          chunkFileNames: '[name].[hash].js',
          entryFileNames: 'widget2.esm.js',
          sourcemap: true,
          minifyInternalExports: true,
        }
      ]
    }
  }
})
