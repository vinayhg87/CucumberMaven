$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Chapter1.feature");
formatter.feature({
  "line": 2,
  "name": "This feature file contains the test scenarios of Chapter1 screen",
  "description": "",
  "id": "this-feature-file-contains-the-test-scenarios-of-chapter1-screen",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.background({
  "line": 3,
  "name": "opening the browser and logging into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Create driver instance and open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "DropDowns.Create_driver_instance_and_open_the_browser()"
});
formatter.result({
  "duration": 6035616500,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Testcase 1 - Testing the dropdown",
  "description": "",
  "id": "this-feature-file-contains-the-test-scenarios-of-chapter1-screen;testcase-1---testing-the-dropdown",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "click on the Chapter1 page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "pick the dropdown and select Selenium Core option",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Check if the element is found or not",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DropDowns.click_on_the_Chapter1_page()"
});
formatter.result({
  "duration": 926634400,
  "status": "passed"
});
formatter.match({
  "location": "DropDowns.pick_the_dropdown_and_select_Selenium_core_option()"
});
formatter.result({
  "duration": 90098300,
  "status": "passed"
});
formatter.match({
  "location": "DropDowns.Check_if_the_element_is_found_or_not()"
});
formatter.result({
  "duration": 709300,
  "error_message": "Exceptions.CucumberFailedException\r\n\tat Chapter1_Tests.DropDowns.Check_if_the_element_is_found_or_not(DropDowns.java:115)\r\n\tat ✽.Then Check if the element is found or not(feature/Chapter1.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DropDowns.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "opening the browser and logging into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Create driver instance and open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "DropDowns.Create_driver_instance_and_open_the_browser()"
});
formatter.result({
  "duration": 4782573700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Testcase 2 - Testing the dropdown with user input",
  "description": "",
  "id": "this-feature-file-contains-the-test-scenarios-of-chapter1-screen;testcase-2---testing-the-dropdown-with-user-input",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "click on the Chapter1 page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "pick the dropdown and select below option",
  "rows": [
    {
      "cells": [
        "Selenium RC"
      ],
      "line": 19
    },
    {
      "cells": [
        "Selenium core"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Check if the element is found or not",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DropDowns.click_on_the_Chapter1_page()"
});
formatter.result({
  "duration": 536769700,
  "status": "passed"
});
formatter.match({
  "location": "DropDowns.pick_the_dropdown_and_select_below_option(DataTable)"
});
formatter.result({
  "duration": 391122700,
  "status": "passed"
});
formatter.match({
  "location": "DropDowns.Check_if_the_element_is_found_or_not()"
});
formatter.result({
  "duration": 155300,
  "status": "passed"
});
formatter.match({
  "location": "DropDowns.close_the_browser()"
});
formatter.result({
  "duration": 1117557000,
  "status": "passed"
});
});