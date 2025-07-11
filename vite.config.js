import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          'three-addons': ['three-globe']
        }
      }
    }
  },
  esbuild: {
    target: 'esnext',
    supported: {
      'top-level-await': true
    }
  },
  optimizeDeps: {
    include: ['three', 'three-globe'],
    esbuildOptions: {
      target: 'esnext',
      supported: {
        'top-level-await': true
      }
    }
  }
})