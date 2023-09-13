Feature: Testing the Sector homepage

  Scenario: Visit the Sector homepage
    Given I am on the Sector homepage
    Then I should see the page title containing text
    And I should see the social block in the footer
