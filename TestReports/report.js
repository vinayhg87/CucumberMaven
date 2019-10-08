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
  "location": "Chapter_1_Webelements.Create_driver_instance_and_open_the_browser()"
});
formatter.result({
  "duration": 7528301046,
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
  "location": "Chapter_1_Webelements.click_on_the_Chapter1_page()"
});
formatter.result({
  "duration": 752811101,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.pick_the_dropdown_and_select_Selenium_core_option()"
});
formatter.result({
  "duration": 514428288,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.Check_if_the_element_is_found_or_not()"
});
formatter.result({
  "duration": 306098,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.close_the_browser()"
});
formatter.result({
  "duration": 736570542,
  "status": "passed"
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
  "location": "Chapter_1_Webelements.Create_driver_instance_and_open_the_browser()"
});
formatter.result({
  "duration": 5130697561,
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
  "location": "Chapter_1_Webelements.click_on_the_Chapter1_page()"
});
formatter.result({
  "duration": 528704816,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.pick_the_dropdown_and_select_below_option(DataTable)"
});
formatter.result({
  "duration": 605862993,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.Check_if_the_element_is_found_or_not()"
});
formatter.result({
  "duration": 112697,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.close_the_browser()"
});
formatter.result({
  "duration": 1648172559,
  "status": "passed"
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
  "location": "Chapter_1_Webelements.Create_driver_instance_and_open_the_browser()"
});
formatter.result({
  "duration": 5282603015,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Testcase 3 - Testing the dropdown with incorrect user input",
  "description": "",
  "id": "this-feature-file-contains-the-test-scenarios-of-chapter1-screen;testcase-3---testing-the-dropdown-with-incorrect-user-input",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "click on the Chapter1 page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "pick the dropdown and select below incorrect option",
  "rows": [
    {
      "cells": [
        "Selenium RC1"
      ],
      "line": 28
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Check if the element is found or not",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Chapter_1_Webelements.click_on_the_Chapter1_page()"
});
formatter.result({
  "duration": 651583267,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.When_pick_the_dropdown_and_select_below_incorrect_option(DataTable)"
});
formatter.result({
  "duration": 91104101,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.Check_if_the_element_is_found_or_not()"
});
formatter.result({
  "duration": 133971,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.close_the_browser()"
});
formatter.result({
  "duration": 1644749555,
  "status": "passed"
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
  "location": "Chapter_1_Webelements.Create_driver_instance_and_open_the_browser()"
});
formatter.result({
  "duration": 5154635764,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Testcase 4 - Clicking the radio button",
  "description": "",
  "id": "this-feature-file-contains-the-test-scenarios-of-chapter1-screen;testcase-4---clicking-the-radio-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "click on the Chapter1 page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Click on the radio button",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Check if the element is found or not",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Chapter_1_Webelements.click_on_the_Chapter1_page()"
});
formatter.result({
  "duration": 677799143,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.Click_on_the_radio_button()"
});
formatter.result({
  "duration": 271988153,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.Check_if_the_element_is_found_or_not()"
});
formatter.result({
  "duration": 167764,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.close_the_browser()"
});
formatter.result({
  "duration": 1666805477,
  "status": "passed"
});
});