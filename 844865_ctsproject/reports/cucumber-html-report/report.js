$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/TestCase.feature");
formatter.feature({
  "line": 1,
  "name": "OpenCart application",
  "description": "",
  "id": "opencart-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To check the user is able to register with the application",
  "description": "",
  "id": "opencart-application;to-check-the-user-is-able-to-register-with-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@tc01_Register"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "the Opencart application opens in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user clicks on register",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the user fills all the details",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user clicks on submit",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSD.the_Opencart_application_opens_in_chrome_browser()"
});
formatter.result({
  "duration": 6290936186,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSD.the_user_clicks_on_register()"
});
formatter.result({
  "duration": 61623688780,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSD.the_user_fills_all_the_details()"
});
formatter.result({
  "duration": 20690084720,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSD.the_user_clicks_on_submit()"
});
formatter.result({
  "duration": 7211552254,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "To check with valid credentails",
  "description": "",
  "id": "opencart-application;to-check-with-valid-credentails",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@tc02_Validlogin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the application opens in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the user clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the user gives valid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSD.the_application_opens_in_browser()"
});
formatter.result({
  "duration": 4655107418,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.the_user_clicks_on_Login()"
});
formatter.result({
  "duration": 45829256150,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.the_user_gives_valid_credentials()"
});
formatter.result({
  "duration": 177796718404,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clicks_on_Login_button()"
});
formatter.result({
  "duration": 1772341982,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To check with invalid credentails",
  "description": "",
  "id": "opencart-application;to-check-with-invalid-credentails",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@tc03_InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the application will open in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user clicks on login",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the user tries to login with invalid details",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "InvalidLoginSD.the_application_will_open_in_chrome_browser()"
});
formatter.result({
  "duration": 5416712518,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLoginSD.the_user_clicks_on_login()"
});
formatter.result({
  "duration": 16792861516,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLoginSD.the_user_tries_to_login_with_invalid_details()"
});
formatter.result({
  "duration": 6126483000,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLoginSD.click_on_login_button()"
});
formatter.result({
  "duration": 6740394008,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "To check how application responds when mandatory fields are missing",
  "description": "",
  "id": "opencart-application;to-check-how-application-responds-when-mandatory-fields-are-missing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tc04_MandatoryFields"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the application opens in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user clicks on register button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user fills the details by leaving one mandatory field",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "MandatoryFieldsSD.the_application_opens_in_chrome_browser()"
});
formatter.result({
  "duration": 6014410208,
  "status": "passed"
});
formatter.match({
  "location": "MandatoryFieldsSD.the_user_clicks_on_register_button()"
});
formatter.result({
  "duration": 10248846000,
  "status": "passed"
});
formatter.match({
  "location": "MandatoryFieldsSD.the_user_fills_the_details_by_leaving_one_mandatory_field()"
});
formatter.result({
  "duration": 6388265876,
  "status": "passed"
});
formatter.match({
  "location": "MandatoryFieldsSD.clicks_on_submit_button()"
});
formatter.result({
  "duration": 5291405962,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "To check the links in the page",
  "description": "",
  "id": "opencart-application;to-check-the-links-in-the-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@tc05_Links"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "the application opens",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "the user login to the application",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the homepage opens",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "get all the links in that page",
  "keyword": "And "
});
formatter.match({
  "location": "LinksSD.the_application_opens()"
});
formatter.result({
  "duration": 4848999246,
  "status": "passed"
});
formatter.match({
  "location": "LinksSD.the_user_login_to_the_application()"
});
formatter.result({
  "duration": 7663607408,
  "status": "passed"
});
formatter.match({
  "location": "LinksSD.the_homepage_opens()"
});
formatter.result({
  "duration": 5575423488,
  "status": "passed"
});
formatter.match({
  "location": "LinksSD.get_all_the_links_in_that_page()"
});
formatter.result({
  "duration": 9399004978,
  "status": "passed"
});
});