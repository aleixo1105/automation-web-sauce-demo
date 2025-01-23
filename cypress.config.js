const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'reports/mochawesome',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      reportFilename: 'mochawesome-report', 
      merge: true,
    },
    async setupNodeEvents(on, config) {
      console.log('TAGS:', config.env.TAGS); 

      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [
            createEsbuildPlugin(config),
          ],
        })
      );

      return config;
    },
  },
});
