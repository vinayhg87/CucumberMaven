@tag
Feature: This feature file contains the test scenarios of Chapter2 screen

  Background: opening the browser and logging into the application
    Given Create driver instance and open the browser for Chapter2 page

  @tag1
  Scenario: TestCase 1 - Clicking on button:Button with name
    Given click on the Chapter2 page
    When Check if it is enabled or not and click on the button
    Then Check if the element is found or not of chapter2
    And close the browser of chapter2
