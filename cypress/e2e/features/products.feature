Feature: Product page functionality

  Scenario: Validate the layout and product items.
    Given I am logged in with valid credentials
    When Should ensure that the products layout is structured in a grid
    And Should ensure that all product names are visible
    And Should ensure that all product descriptions are visible
    And Should ensure that all prices are visible
    And Should ensure that all product images are visible
    Then Should ensure that all add to cart buttons are visible
    
  Scenario: Validate Oder By Price - high to low
    Given I am logged in with valid credentials
    When I sort products by Price - high to low
    Then The products should be sorted by price in descending order

  Scenario: Validate Oder By Price - low to high
    Given I am logged in with valid credentials
    When I sort products by Price - low to high
    Then The products should be sorted by price in ascending order

  Scenario: Validate Oder By Name - A to Z
    Given I am logged in with valid credentials
    When I sort products by Name - A to Z
    Then The products should be sorted by name in ascending order

  Scenario: Validate Oder By Name - Z to A
    Given I am logged in with valid credentials
    When I sort products by Name - Z to A
    Then The products should be sorted by name in descending order

  Scenario: Validate Sorting by Price Ascending is defualt
    Given I am logged in with valid credentials
    Then I Check sorting by Price is dedault


  Scenario: Validate Product Descrition is accessible via image
    Given I am logged in with valid credentials
    When I access Product Description via image


  Scenario: Validate Product Descrition is accessible via name
    Given I am logged in with valid credentials
    When I access Product Description via name

