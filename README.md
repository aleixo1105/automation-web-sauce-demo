# automationWebSauceDemo Project Structure

# This project is an automation of tests using Cypress with Cucumber for a Sauce Labs demo page.
# The directory structure is as follows:


```
automationWebSauceDemo/
├── cypress/                       
│   ├── e2e/                       
│   │   ├── features/              
│   │   │   ├── login.feature      
│   │   │   ├── productsLayout.feature 
│   │   │   └── productsSorting.feature 
│   ├── pages/                     
│   │   ├── loginPage.js           
│   │   ├── productsLayoutPage.js  
│   │   └── productsSortingPage.js 
│   ├── support/                   
│   │   ├── stepsDefinitions/      
│   │   │   ├── loginSteps.js      
│   │   │   ├── productsSortingSteps.js
│   │   │   └── productsSteps.js   
│   │   └── e2e.js                 
├── .gitignore                     
├── cypress.config.js              
├── cypress.env.json               
├── package.json                   
└── readme.md                      
```


### Descrição das Pastas

- **`e2e/features/`**:                 # Gherkin feature definition files
- **`pages/`**:                        # Page objects for tests
- **`support/stepsDefinitions`**:      # Cucumber step definitions
- **`report`**:                        # Git ignore file
- **`.gitignore `**:                   # Git ignore file
- **`cypress.config.js`**:             # Cypress configuration file
- **`cypress.env.json`**:              # Cypress environment configuration file
- **`package.json`**:                  # Project dependencies and scripts
- **`readme.md`**:                     # This README file



## Libraries and Frameworks

- **@badeball/cypress-cucumber-preprocessor**: Integrates Cucumber with Cypress for Behavior-Driven Development (BDD) style testing.
- **@bahmutov/cypress-esbuild-preprocessor**: A fast bundler for Cypress tests using esbuild for improved performance during preprocessing.
- **cypress**: A popular end-to-end testing framework for web applications, providing tools for testing, running, and debugging tests.
- **del-cli**: A command-line tool for deleting files and folders, used to clean up directories during automation workflows.
- **esbuild**: A fast JavaScript bundler and minifier that helps with building and transforming code for testing purposes.
- **mochawesome**: A reporting tool that generates detailed HTML reports for Mocha-based tests.
- **mochawesome-merge**: Merges multiple Mochawesome JSON reports into a single combined report.
- **mochawesome-report-generator**: Generates HTML reports from Mochawesome JSON files for easy viewing and analysis.





### How to Run the Project
Follow the steps below to run the Cypress tests in the project.

# 1. Clone the Repository
```
git clone https://github.com/your-username/automation-web-sauce-demo.git
```
# 2. Install Dependencies
Navigate to the project directory and install the necessary dependencies:

```
npm install
```

### 3. Run Tests

To run the tests using Cypress with the graphical interface
````
npx cypress open
````


Run the tests using the following command:
````
npm run test
````

For running specific tags (e.g., @layout):
```
npm run test --env TAGS="@layout"
```

### 4. Generate Reports
Merge and generate the test reports:

````
npm run full-report
````
