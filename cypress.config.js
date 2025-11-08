const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      })

      on('file:preprocessor', bundler)
      preprocessor.addCucumberPreprocessorPlugin(on, config)

      return config
    },
    baseUrl: 'https://ernx-consumer.vercel.app',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    video: false,
    screenshotOnRunFailure: true
  },
})