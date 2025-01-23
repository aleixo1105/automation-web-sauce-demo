@login
Feature: Login Page  

  @low
  Scenario: Verify input fields are visible and accessible
    Given I am on the login page
    When I check if Email input fields should be visible
    Then I check if Password input fields should be visible

  @high
  Scenario: Successful login with valid credentials  
    Given I am on the login page  
    When I enter valid email  
    And I enter valid password  
    And I click on the login button
    Then I should be redirected to the products page  

  @high
  Scenario: Unsuccessful login with invalid credentials  
    Given I am on the login page  
    When I enter invalid email    
    And I enter invalid password  
    And I click on the login button  
    Then I should see an error message - Username and password do not match
  
  @medium
  Scenario: Attempt login with only email
    Given I am on the login page  
    When I enter valid email  
    And I click on the login button
    Then I should see an error message - Password is required

  @medium
  Scenario: Attempt login with only password
    Given I am on the login page  
    When I enter valid password  
    And I click on the login button
    Then I should see an error message - Username is required

  @medium
  Scenario: Attempt login without email and password.
    Given I am on the login page  
    When I click on the login button
    Then I should see an error message - Username is required 

  @medium
  Scenario: Attempt login with valid email but invalid password
    Given I am on the login page  
    When I enter valid email    
    And I enter invalid password  
    And I click on the login button  
    Then I should see an error message - Username and password do not match