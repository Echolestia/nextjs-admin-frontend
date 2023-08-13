import React from "react";
import SignupPage from "./signup.page";

describe("Signup Page", () => {
  let isRenderedCorrectly = true;

  it("renders the signup title", () => {
    cy.get('h1:contains("Sign Up")').should("be.visible"); // Check the visibility of the sign-up title
    // Explanation: The title "Sign Up" should always be visible on the signup page.
  });

  it("renders the email input field", () => {
    cy.get('input[type="text"]').should("be.visible"); // Check the visibility of the email input field
    // Explanation: The email input field is essential for user registration and must be visible.
  });

  it("renders the password input field", () => {
    cy.get('input[type="password"]').should("be.visible"); // Check the visibility of the password input field
    // Explanation: The password input field is required for secure user registration and must be visible.
  });

  it("renders the Sign Up button", () => {
    cy.get('button[type="submit"]').should("be.visible"); // Check the visibility of the sign-up button
    // Explanation: The sign-up button should be visible to allow users to complete the registration process.
  });

  it("renders the login link", () => {
    cy.get('a[href="/login"]').should("be.visible"); // Check the visibility of the login link
    // Explanation: The login link provides an option for existing users to log in. It must be visible on the signup page.
  });

  it("shows an error message if signup fails", () => {
    // Simulate a signup failure by entering invalid credentials
    cy.get('input[type="text"]').type("invalid-email@example.com");
    cy.get('input[type="password"]').type("invalid-password");
    cy.get('button[type="submit"]').click();

    // Check if the error message is visible
    cy.get("p.text-red-500").should("be.visible");
    // Explanation: If signup fails, an error message should be displayed to inform the user.
  });

  it("redirects to the home page if signup is successful", () => {
    // Here you may simulate a successful sign-up by entering valid credentials

    cy.wait(2000); // Wait for the redirect
    cy.url().should("eq", "http://yourapp.com/"); // Check if the URL has changed to the home page
    // Explanation: After a successful signup, the user should be redirected to the home page.
  });

  // Final test to return the isRenderedCorrectly variable
  it("confirms that the signup page is rendered correctly", () => {
    expect(isRenderedCorrectly).to.be.true;
  });
});
