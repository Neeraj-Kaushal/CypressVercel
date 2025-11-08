Feature: ERNX Login Page Functionality

  Scenario: Verify Email Field Validation
    Given the user navigates to "https://ernx-consumer.vercel.app/login"
    When the user leaves the email field empty
    And clicks the "Next" button
    Then an error message should appear saying "Please enter a valid email" or the form should not proceed

    When the user enters an invalid email "abc@"
    And clicks the "Next" button
    Then an appropriate validation message should be displayed indicating invalid email format

    When the user enters a valid email "user@example.com"
    And clicks the "Next" button
    Then the user should proceed to the next step or receive a login link