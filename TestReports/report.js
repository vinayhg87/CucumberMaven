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
  "duration": 6888701193,
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
  "duration": 668650020,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.pick_the_dropdown_and_select_Selenium_core_option()"
});
formatter.result({
  "duration": 351089758,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.Check_if_the_element_is_found_or_not()"
});
formatter.result({
  "duration": 139399,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.close_the_browser()"
});
formatter.result({
  "duration": 630848637,
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
  "duration": 6148321478,
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
  "duration": 748830125,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.pick_the_dropdown_and_select_below_option(DataTable)"
});
formatter.result({
  "duration": 384553615,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.Check_if_the_element_is_found_or_not()"
});
formatter.result({
  "duration": 241120,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.close_the_browser()"
});
formatter.result({
  "duration": 3269485981,
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
  "duration": 7897471126,
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
  "duration": 901468037,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.When_pick_the_dropdown_and_select_below_incorrect_option(DataTable)"
});
formatter.result({
  "duration": 216951021,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.Check_if_the_element_is_found_or_not()"
});
formatter.result({
  "duration": 1088379,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.close_the_browser()"
});
formatter.result({
  "duration": 2432431525,
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
  "duration": 7685268436,
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
  "duration": 875758736,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.Click_on_the_radio_button()"
});
formatter.result({
  "duration": 323066464,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.Check_if_the_element_is_found_or_not()"
});
formatter.result({
  "duration": 323165,
  "status": "passed"
});
formatter.match({
  "location": "Chapter_1_Webelements.close_the_browser()"
});
formatter.result({
  "duration": 2441535722,
  "status": "passed"
});
formatter.uri("feature/Chapter2.feature");
formatter.feature({
  "line": 2,
  "name": "This feature file contains the test scenarios of Chapter2 screen",
  "description": "",
  "id": "this-feature-file-contains-the-test-scenarios-of-chapter2-screen",
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
  "duration": 6524440751,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "TestCase 1 - Clicking on button - \u0027Button with name\u0027",
  "description": "",
  "id": "this-feature-file-contains-the-test-scenarios-of-chapter2-screen;testcase-1---clicking-on-button---\u0027button-with-name\u0027",
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
  "name": "click on the Chapter2 page",
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
  "location": "Chapter_2_Webelements.click_on_the_Chapter2_page()"
});
formatter.result({
  "duration": 6112564488,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: Chapter2\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027Vinays-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:189b:c21f:2eaf:24cd%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 69.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190917135527, moz:geckodriverVersion: 0.25.0, moz:headless: false, moz:processID: 1999, moz:profile: /var/folders/9m/52tx9p6x4sl..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 19.0.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bf843a27-c793-7148-9bdc-dfb3b7ea4251\n*** Element info: {Using\u003dlink text, value\u003dChapter2}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat Chapter2_Tests.Chapter_2_Webelements.click_on_the_Chapter2_page(Chapter_2_Webelements.java:33)\n\tat ✽.Given click on the Chapter2 page(feature/Chapter2.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "Chapter_1_Webelements.pick_the_dropdown_and_select_Selenium_core_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Chapter_1_Webelements.Check_if_the_element_is_found_or_not()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Chapter_1_Webelements.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});