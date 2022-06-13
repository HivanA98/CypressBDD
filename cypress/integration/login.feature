Feature: login to Application

    As a valid user
    i want to login into Application

    Scenario: valid login
    Given i open login page
    When i submit login
    Then i should see homepage
