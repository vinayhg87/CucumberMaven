@tag
Feature: This feature file contains the test scenarios of Chapter1 screen
Background: opening the browser and logging into the application
Given Create driver instance and open the browser

		
	@tag1
	Scenario: Testcase 1 - Testing the dropdown
	Given click on the Chapter1 page
	When pick the dropdown and select Selenium Core option
	Then Check if the element is found or not
	And close the browser
	
	
	@tag2
	Scenario: Testcase 2 - Testing the dropdown with user input
	Given click on the Chapter1 page
	When pick the dropdown and select below option
			| Selenium RC |
			| Selenium core |
	Then Check if the element is found or not
	And close the browser
#	
#	@tag3
#	Scenario: Testcase 3 - Testing the dropdown with incorrect user input
#	Given select the dropdown
#	When pick the dropdown and select below option
#			| Selenium RC1 |
#	Then print the result on the console and verify
#	But The selection fails and provides "option does not exists"
#	And close the browser
#	
#	@tag4
#	Scenario: Testcase 4 - Clicking the radio button
#	Given select the button
#	Then print the result on the console if it is selected or not
#	And close the browser 
#	
	
	