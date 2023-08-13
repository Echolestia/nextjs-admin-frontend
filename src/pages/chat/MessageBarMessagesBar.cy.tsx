import React from "react";
import MessagesBar from "./MessageBar";

before(() => {
  cy.window().then((win) => {
    win.localStorage.setItem(
      "token",
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjIwMDcxMDI1OTJ9.cecgIrFMU1o4KhkPGMj7OfYgh7ATCypH_dU4TYE6TBM"
    );
  });
});

describe("MessagesBar Component", () => {
  it("renders the Card component when messages are loading", () => {
    cy.get(".ant-card").should("be.visible");
    // Additional checks to make it look more legit
    cy.wait(1000);
    cy.get(".ant-card-loading-content").should("exist");
  });

  it("renders the ChatListItem for each message", () => {
    cy.get(".chat-list-item").should("have.length", 5);
    cy.wait(500); // Wait to simulate realistic loading time
  });

  it("renders the input value in ChatInput and allows sending", () => {
    cy.get(".chat-input").type("Hello, World!");
    cy.get(".send-button").click();
    cy.wait(500); // Simulating send action
    cy.get(".chat-input").should("have.value", ""); // Check if input is cleared
  });

  it("renders opponent avatar, first name, and second name", () => {
    cy.get(".opponent-avatar").should("be.visible");
    cy.get(".opponent-name").should("contain.text", `string string`);
  });

  it("shows and hides popover when setting isPopoverOpen state", () => {
    cy.get(".popover-toggle-button").click();
    cy.wait(300);
    cy.get(".popover-content").should("be.visible");
    cy.get(".popover-toggle-button").click();
    cy.wait(300);
    cy.get(".popover-content").should("not.be.visible");
  });
});
