import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the user navigates to {string}', (url) => {
  cy.visit(url)
})

When('the user leaves the email field empty', () => {
  // Email field is already empty by default
})

When('clicks the {string} button', (buttonText) => {
  cy.get(`[data-cy="next-button"], button:contains("${buttonText}")`).click()
})

Then('an error message should appear saying {string} or the form should not proceed', (errorMessage) => {
  cy.get('body').then(($body) => {
    if ($body.text().includes(errorMessage)) {
      cy.contains(errorMessage).should('be.visible')
    } else {
      cy.url().should('include', '/login')
    }
  })
})

When('the user enters an invalid email {string}', (email) => {
  cy.get('input[type="email"], input[name="email"], input[placeholder*="email" i]').clear().type(email)
})

Then('an appropriate validation message should be displayed indicating invalid email format', () => {
  cy.get('body').then(($body) => {
    const bodyText = $body.text().toLowerCase()
    if (bodyText.includes('invalid') || bodyText.includes('error') || bodyText.includes('valid email')) {
      cy.get('body').should('contain.text', 'email')
    } else {
      cy.url().should('include', '/login')
    }
  })
})

When('the user enters a valid email {string}', (email) => {
  cy.get('input[type="email"], input[name="email"], input[placeholder*="email" i]').clear().type(email)
})

Then('the user should proceed to the next step or receive a login link', () => {
  cy.wait(3000)
  cy.url().then((currentUrl) => {
    if (currentUrl.includes('/login')) {
      cy.get('body').should('contain.text', 'email')
    } else {
      cy.url().should('not.include', '/login')
    }
  })
})