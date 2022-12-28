import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
Given("user navigates to url", function () {
    cy.visit("https://automationexercise.com/");
    });

Given("verify that home page is visible successfully", function () {
      cy.url().should('include', 'https://automationexercise.com/')
      });  
      
Given("user clicks on Signup button", function () {
      cy.get('a:contains("Signup")').click();

       });

Given("verify New User Signup! is visible", function () {
  cy.get('h2:contains("New User Signup!")').should('be.visible');  
      }); 

Given("user enters name and email address", function () {
  cy.get('input[data-qa="signup-name"]').type('Osman');
  cy.get('input[data-qa="signup-email"]').type('example15@example.com');
        });  

Given("user clicks Signup button", function () {
  cy.get('button[data-qa="signup-button"]').click();
        }); 
        
Given("verify tahr Enter AccountInformation is visible", function () {
  cy.get('h2:contains("Enter Account Information")').should('be.visible');    
      });

Given("user fills details:title, Name, Email, Password, Date of Birth", function () {

      
      });

Given("user selects checkbox Sign up for our Newsletter!", function () {
  
        });

Given("user selects checkbox Receive special offers from our partners!", function () {
  
  
        });

Given("user fills details:Firstname,Lastname,Company,Address,Address2,Country,State,City, Zipcode, Mobile Number", function () {
            


       });

Given("user clicks Create Account button", function () {
            
       });

Given("verify that Account Created! is visible", function () {
           
       });

Given("user clicks continue button", function () {
      
       });

Given("verify that logged in as username is visible", function () {
      
       });

Given("user clicks delete account button", function () {
       
       });

Given("verify that account deleted! is visible and click continue button", function () {
       
        });
        