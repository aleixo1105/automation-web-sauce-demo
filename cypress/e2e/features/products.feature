Feature: Product page functionality

  Scenario: Validate the layout.
    Given I am logged in with valid credentials
    When I access the products page
    Then Should ensure that the products layout is structured in a grid


  Scenario: Validate Product Name are visible.
    Given I am logged in with valid credentials
    When I access the products page
    Then Should ensure that all product names are visible
    

  Scenario: Validate Product descriptions are visible.
    Given I am logged in with valid credentials
    When I access the products page
    Then Should ensure that all product descriptions are visible


  Scenario: Validate Product prices are visible.
    Given I am logged in with valid credentials
    When I access the products page
    Then Should ensure that all prices are visible


  Scenario: Validate Product images are visible.
    Given I am logged in with valid credentials
    When I access the products page
    Then Should ensure that all product images are visible


  Scenario: Validate add to cart buttons is visible
    Given I am logged in with valid credentials
    When I access the products page
    Then Should ensure that all add to cart buttons are visible


  Scenario: Validate Order By Price - high to low
    Given I am logged in with valid credentials
    When I sort products by Price - high to low
    Then The products should be sorted by price in descending order


  Scenario: Validate Order By Price - low to high
    Given I am logged in with valid credentials
    When I sort products by Price - low to high
    Then The products should be sorted by price in ascending order


  Scenario: Validate Order By Name - A to Z
    Given I am logged in with valid credentials
    When I sort products by Name - A to Z
    Then The products should be sorted by name in ascending order


  Scenario: Validate Order By Name - Z to A
    Given I am logged in with valid credentials
    When I sort products by Name - Z to A
    Then The products should be sorted by name in descending order


  Scenario: Validate Sorting by Price Ascending is default
    Given I am logged in with valid credentials
    When I access the products page
    Then I Check sorting by Price is dedault


  Scenario: Validate Product Description is accessible via image
    Given I am logged in with valid credentials
    When I access the products page
    Then I access Product Description via image


  Scenario: Validate Product Description is accessible via name
    Given I am logged in with valid credentials
    When I access the products page
    Then I access Product Description via name