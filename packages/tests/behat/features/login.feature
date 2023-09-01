Feature: Login to Drupal website

  Scenario: Successful login
    Given I am on the login page
    When I enter the username "admin" and the password "password"
    And I click the login button
    Then I should be logged in
