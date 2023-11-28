import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  server: {
    port: 3001
  },
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      name: 'widget1',
      entry: path.resolve(__dirname, 'src/main.tsx')
    },
    rollupOptions: {
      output: [
        {
          dir: './dist',
          esModule: true,
          format: 'esm',
          chunkFileNames: '[name].[hash].js',
          entryFileNames: 'widget1.esm.js',
          sourcemap: true,
          minifyInternalExports: true,
        }
      ]
    }
  }
})
