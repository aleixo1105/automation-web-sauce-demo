@product @sorting
Feature: Product page Sorting

  @high
  Scenario: Validate Order By Price - high to low
    Given I am logged in with valid credentials
    When I sort products by Price - high to low
    Then The products should be sorted by price in descending order

  @high
  Scenario: Validate Order By Price - low to high
    Given I am logged in with valid credentials
    When I sort products by Price - low to high
    Then The products should be sorted by price in ascending order

  @medium
  Scenario: Validate Order By Name - A to Z
    Given I am logged in with valid credentials
    When I sort products by Name - A to Z
    Then The products should be sorted by name in ascending order

  @medium
  Scenario: Validate Order By Name - Z to A
    Given I am logged in with valid credentials
    When I sort products by Name - Z to A
    Then The products should be sorted by name in descending order

  @low
  Scenario: Validate Sorting by Price Ascending is default
    Given I am logged in with valid credentials
    When I access the products page
    Then I Check sorting by Price is default
