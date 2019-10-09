@tag
Feature: This feature file contains the test scenarios of Chapter2 screen
  Background: opening the browser and logging into the application
    Given Create driver instance and open the browser


   @tag1
     Scenario: TestCase 1 - Clicking on button - 'Button with name'
      Given click on the Chapter2 page
      When pick the dropdown and select Selenium Core option
      Then Check if the element is found or not
      And close the browser