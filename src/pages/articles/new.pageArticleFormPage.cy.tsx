import React from "react";
import ArticleFormPage from "./new.page";

describe("Article Form Page", () => {
  it("renders the article title", () => {
    const isRenderedArticleTitle = true;
    cy.get("h1").contains("Add an Article").should("be.visible");
    return isRenderedArticleTitle;
  });

  it("renders the input fields", () => {
    const isRenderedInputFields = true;
    cy.get('input[placeholder="Enter the article title"]').should("be.visible");
    cy.get('input[placeholder="Enter the article URL"]').should("be.visible");
    cy.get('input[placeholder="Enter the article author"]').should(
      "be.visible"
    );
    cy.get('input[placeholder="Enter the article URL"]').should("be.visible"); // Image Link
    cy.get('input[placeholder="Enter a new tag"]').should("be.visible");
  });

  it("renders the date picker", () => {
    const isRenderedDatePicker = true;
    cy.get(".ant-picker").should("be.visible");
  });

  it("renders the reset and submit buttons", () => {
    const isRenderedButtons = true;
    cy.get('[data-testid="reset-button"]').should("be.visible");
    cy.get('[data-testid="submit-article-button"]').should("be.visible");
  });

  it("can toggle tags", () => {
    const isToggleTag = true;
    cy.get("button").contains("TagValue").click(); // Replace 'TagValue' with an actual value from the tags
    cy.wait(500);
    cy.get('button[type="primary"]').should("contain", "TagValue"); // Check that the tag is selected
    return isToggleTag;
  });

  it("can add a new tag", () => {
    const isAddedTag = true;
    cy.get('input[placeholder="Enter a new tag"]').type("NewTag");
    cy.get("button").contains("Add").click();
    cy.wait(500);
    cy.get("button").should("contain", "NewTag"); // Check that the new tag has been added
  });

  it("can reset the form", () => {
    const isFormReset = true;
    // Fill in some fields
    cy.get('input[placeholder="Enter the article title"]').type("Test Title");
    // Click the reset button
    cy.get('[data-testid="reset-button"]').click();
    cy.wait(500);
    // Check that the fields are cleared
    cy.get('input[placeholder="Enter the article title"]').should(
      "have.value",
      ""
    );
  });

  // Other test cases can include validation checks, submitting the form, etc.
});
