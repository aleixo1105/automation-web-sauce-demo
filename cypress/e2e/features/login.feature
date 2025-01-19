Feature: Login Page  
  As a user  
  I want to securely log into the application  
  So that I can access the products page  

  Scenario: Successful login with valid credentials  
    Given I am on the login page  
    When I enter valid credentials  
    And I click on the login button  
    Then I should be redirected to the products page  

  Scenario: Unsuccessful login with invalid credentials  
    Given I am on the login page  
    When I enter invalid credentials  
    And I click on the login button  
    Then I should see an error message  
 