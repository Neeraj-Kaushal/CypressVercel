# ERNX Login Page Cypress Automation (BDD)

Minimal Cypress automation for testing ERNX login page email field validation using BDD (Behavior Driven Development) format.

## Project Structure
```
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   └── ernx-login.feature
│   │   └── step_definitions/
│   │       └── ernx-login-steps.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

## Setup

1. Install dependencies:
```bash
npm install
```

## Running Tests

### Run BDD Feature Test
```bash
npm run test:bdd
```

### Run All Feature Tests
```bash
npm test
```

### Open Cypress Test Runner (Interactive)
```bash
npm run cy:open
```

### Run Tests in Headless Mode
```bash
npm run cy:run
```

## BDD Test Structure

### Feature File
- **Location**: `cypress/e2e/features/ernx-login.feature`
- **Format**: Gherkin syntax with Given-When-Then scenarios
- **Content**: Email field validation scenarios for ERNX login page

### Step Definitions
- **Location**: `cypress/e2e/step_definitions/ernx-login-steps.js`
- **Purpose**: JavaScript implementations of Gherkin step definitions
- **Framework**: Uses `@badeball/cypress-cucumber-preprocessor`

## Test Scenarios Covered

1. **Empty Email Validation**
   - Given user navigates to login page
   - When email field is left empty and Next is clicked
   - Then error message appears or form doesn't proceed

2. **Invalid Email Format**
   - When user enters invalid email (e.g., "abc@")
   - Then validation message is displayed

3. **Valid Email Submission**
   - When user enters valid email (e.g., "user@example.com")
   - Then user proceeds to next step

## Technical Configuration
- **Target URL**: `https://ernx-consumer.vercel.app/login`
- **BDD Framework**: `@badeball/cypress-cucumber-preprocessor`
- **Bundler**: `@bahmutov/cypress-esbuild-preprocessor`
- **Test Runner**: Cypress v13+
- **Configuration**: `cypress.config.js`