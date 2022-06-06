/// <reference types="vitest" />

import { defineConfig } from 'vite'

export default defineConfig({
  // esbuild: {
  //   target: 'node14',
  //   format: 'cjs'
  // },
  test: {
    // deps: {
    //   interopDefault: false
    // },
    globals: true,
    environment: 'happy-dom'
  }
})
