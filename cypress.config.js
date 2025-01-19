const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild'); 

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: false,
    async setupNodeEvents(on, config) {

      await addCucumberPreprocessorPlugin(on, config);

  
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)], 
        })
      );

      return config;
    },
  },
});
