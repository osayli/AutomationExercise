Feature: RegisterUser

@test
Scenario: US1RegisterUser
Given user navigates to url
Then verify that home page is visible successfully
When user clicks on Signup button
Then verify New User Signup! is visible
When user enters name and email address
And user clicks Signup button
Then verify tahr Enter AccountInformation is visible
When user fills details:title, Name, Email, Password, Date of Birth
And user selects checkbox Sign up for our Newsletter!
And user selects checkbox Receive special offers from our partners!
And user fills details:Firstname,Lastname,Company,Address,Address2,Country,State,City, Zipcode, Mobile Number
And user clicks Create Account button
Then verify that Account Created! is visible
Given user clicks continue button
Then verify that logged in as username is visible
When user clicks delete account button
Then verify that account deleted! is visible and click continue button



