@product @layout
Feature: Product page Layout

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

  Scenario: Validate Product Description is accessible via image
    Given I am logged in with valid credentials
    When I access the products page
    Then I access Product Description via image

  Scenario: Validate Product Description is accessible via name
    Given I am logged in with valid credentials
    When I access the products page
    Then I access Product Description via name



