import { defineConfig } from 'cypress'
import vitePreprocessor from '@cypress/vite-dev-server'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('dev-server:start', (options) => vitePreprocessor(options))
      return config
    },
    baseUrl: 'http://localhost:5173', // Vite's default port
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
