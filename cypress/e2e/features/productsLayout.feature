@product @layout
Feature: Product page Layout

  @medium
  Scenario: Validate the layout.
    Given I am logged in with valid credentials
    When I access the products page
    Then Should ensure that the products layout is structured in a grid

  @high
  Scenario: Validate Product Name are visible.
    Given I am logged in with valid credentials
    When I access the products page
    Then Should ensure that all product names are visible
    
  @high  
  Scenario: Validate Product descriptions are visible.
    Given I am logged in with valid credentials
    When I access the products page
    Then Should ensure that all product descriptions are visible

  @medium
  Scenario: Validate Product prices are visible.
    Given I am logged in with valid credentials
    When I access the products page
    Then Should ensure that all prices are visible

  @medium
  Scenario: Validate Product images are visible.
    Given I am logged in with valid credentials
    When I access the products page
    Then Should ensure that all product images are visible

  @medium
  Scenario: Validate add to cart buttons is visible
    Given I am logged in with valid credentials
    When I access the products page
    Then Should ensure that all add to cart buttons are visible

  @high
  Scenario: Validate Product Description is accessible via image
    Given I am logged in with valid credentials
    When I access the products page
    Then I access Product Description via image

  @low
  Scenario: Validate Product Description is accessible via name
    Given I am logged in with valid credentials
    When I access the products page
    Then I access Product Description via name



