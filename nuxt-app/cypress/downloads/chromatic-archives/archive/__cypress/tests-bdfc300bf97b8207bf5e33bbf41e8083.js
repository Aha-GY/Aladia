/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./cypress/e2e/Login.cy.js ***!
  \*********************************/


describe("Login and Registration Flow", () => {
  beforeEach(() => {
    // Visit the application
    cy.visit("http://localhost:3000");
  });
  it("Should start with the email form", () => {
    // Ensure the email input field is visible
    cy.get('input[type="email"]').should("exist").and("be.visible");

    // Check that the placeholder is correct
    cy.get('input[type="email"]').should("have.attr", "placeholder", "Email Address");
  });
  it("Should move to registration form after entering email", () => {
    // Enter email and click the "Enter" button
    cy.get('input[type="email"]').type("test@example.com");
    cy.contains("Enter").click();

    // Assert that we are now in the registration form
    cy.get('input[name="name"]').should("exist").and("be.visible");
    cy.get('input[name="surname"]').should("exist").and("be.visible");
  });
  it("Should validate that name and surname are required in the registration form", () => {
    // Enter email and move to registration form
    cy.get('input[type="email"]').type("test@example.com");
    cy.contains("Enter").click();

    // Click next without entering name and surname
    cy.contains("Next").click();

    // Check for validation alerts (name and surname are required)
    cy.on("window:alert", txt => {
      expect(txt).to.contains("Name is required!");
    });

    // Enter name but not surname and check for surname validation
    cy.get('input[name="name"]').type("John");
    cy.contains("Next").click();
    cy.on("window:alert", txt => {
      expect(txt).to.contains("Surname is required!");
    });
  });
  it("Should proceed to verification form after registration", () => {
    // Enter email and move to registration form
    cy.get('input[type="email"]').type("test@example.com");
    cy.contains("Enter").click();

    // Fill in name and surname
    cy.get('input[name="name"]').type("John");
    cy.get('input[name="surname"]').type("Doe");

    // Click next to go to verification
    cy.contains("Next").click();

    // Ensure we are now in the verification form
    cy.get('input[type="text"][placeholder="Verification Code"]').should("exist").and("be.visible");
  });
  it("Should go back to registration from verification form", () => {
    // Enter email and move to registration form
    cy.get('input[type="email"]').type("test@example.com");
    cy.contains("Enter").click();

    // Fill in name and surname
    cy.get('input[name="name"]').type("John");
    cy.get('input[name="surname"]').type("Doe");

    // Go to the verification form
    cy.contains("Next").click();

    // Go back to the registration form
    cy.contains("Back").click();

    // Ensure we're back at the registration form
    cy.get('input[name="name"]').should("exist").and("be.visible");
  });
  it("Should go back to email form from registration form", () => {
    // Enter email and move to registration form
    cy.get('input[type="email"]').type("test@example.com");
    cy.contains("Enter").click();

    // Click "Back" to return to the email form
    cy.contains("Back").click();

    // Ensure the email input is visible again
    cy.get('input[type="email"]').should("exist").and("be.visible");
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNHLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFDakUsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXh0LWFwcC8uL2N5cHJlc3MvZTJlL0xvZ2luLmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRlc2NyaWJlKFwiTG9naW4gYW5kIFJlZ2lzdHJhdGlvbiBGbG93XCIsICgpID0+IHtcclxuICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgIC8vIFZpc2l0IHRoZSBhcHBsaWNhdGlvblxyXG4gICAgY3kudmlzaXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIik7XHJcbiAgfSk7XHJcblxyXG4gIGl0KFwiU2hvdWxkIHN0YXJ0IHdpdGggdGhlIGVtYWlsIGZvcm1cIiwgKCkgPT4ge1xyXG4gICAgLy8gRW5zdXJlIHRoZSBlbWFpbCBpbnB1dCBmaWVsZCBpcyB2aXNpYmxlXHJcbiAgICBjeS5nZXQoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpLnNob3VsZChcImV4aXN0XCIpLmFuZChcImJlLnZpc2libGVcIik7XHJcblxyXG4gICAgLy8gQ2hlY2sgdGhhdCB0aGUgcGxhY2Vob2xkZXIgaXMgY29ycmVjdFxyXG4gICAgY3kuZ2V0KCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS5zaG91bGQoXHJcbiAgICAgIFwiaGF2ZS5hdHRyXCIsXHJcbiAgICAgIFwicGxhY2Vob2xkZXJcIixcclxuICAgICAgXCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGl0KFwiU2hvdWxkIG1vdmUgdG8gcmVnaXN0cmF0aW9uIGZvcm0gYWZ0ZXIgZW50ZXJpbmcgZW1haWxcIiwgKCkgPT4ge1xyXG4gICAgLy8gRW50ZXIgZW1haWwgYW5kIGNsaWNrIHRoZSBcIkVudGVyXCIgYnV0dG9uXHJcbiAgICBjeS5nZXQoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpLnR5cGUoXCJ0ZXN0QGV4YW1wbGUuY29tXCIpO1xyXG4gICAgY3kuY29udGFpbnMoXCJFbnRlclwiKS5jbGljaygpO1xyXG5cclxuICAgIC8vIEFzc2VydCB0aGF0IHdlIGFyZSBub3cgaW4gdGhlIHJlZ2lzdHJhdGlvbiBmb3JtXHJcbiAgICBjeS5nZXQoJ2lucHV0W25hbWU9XCJuYW1lXCJdJykuc2hvdWxkKFwiZXhpc3RcIikuYW5kKFwiYmUudmlzaWJsZVwiKTtcclxuICAgIGN5LmdldCgnaW5wdXRbbmFtZT1cInN1cm5hbWVcIl0nKS5zaG91bGQoXCJleGlzdFwiKS5hbmQoXCJiZS52aXNpYmxlXCIpO1xyXG4gIH0pO1xyXG5cclxuICBpdChcIlNob3VsZCB2YWxpZGF0ZSB0aGF0IG5hbWUgYW5kIHN1cm5hbWUgYXJlIHJlcXVpcmVkIGluIHRoZSByZWdpc3RyYXRpb24gZm9ybVwiLCAoKSA9PiB7XHJcbiAgICAvLyBFbnRlciBlbWFpbCBhbmQgbW92ZSB0byByZWdpc3RyYXRpb24gZm9ybVxyXG4gICAgY3kuZ2V0KCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS50eXBlKFwidGVzdEBleGFtcGxlLmNvbVwiKTtcclxuICAgIGN5LmNvbnRhaW5zKFwiRW50ZXJcIikuY2xpY2soKTtcclxuXHJcbiAgICAvLyBDbGljayBuZXh0IHdpdGhvdXQgZW50ZXJpbmcgbmFtZSBhbmQgc3VybmFtZVxyXG4gICAgY3kuY29udGFpbnMoXCJOZXh0XCIpLmNsaWNrKCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgZm9yIHZhbGlkYXRpb24gYWxlcnRzIChuYW1lIGFuZCBzdXJuYW1lIGFyZSByZXF1aXJlZClcclxuICAgIGN5Lm9uKFwid2luZG93OmFsZXJ0XCIsICh0eHQpID0+IHtcclxuICAgICAgZXhwZWN0KHR4dCkudG8uY29udGFpbnMoXCJOYW1lIGlzIHJlcXVpcmVkIVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEVudGVyIG5hbWUgYnV0IG5vdCBzdXJuYW1lIGFuZCBjaGVjayBmb3Igc3VybmFtZSB2YWxpZGF0aW9uXHJcbiAgICBjeS5nZXQoJ2lucHV0W25hbWU9XCJuYW1lXCJdJykudHlwZShcIkpvaG5cIik7XHJcbiAgICBjeS5jb250YWlucyhcIk5leHRcIikuY2xpY2soKTtcclxuXHJcbiAgICBjeS5vbihcIndpbmRvdzphbGVydFwiLCAodHh0KSA9PiB7XHJcbiAgICAgIGV4cGVjdCh0eHQpLnRvLmNvbnRhaW5zKFwiU3VybmFtZSBpcyByZXF1aXJlZCFcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgaXQoXCJTaG91bGQgcHJvY2VlZCB0byB2ZXJpZmljYXRpb24gZm9ybSBhZnRlciByZWdpc3RyYXRpb25cIiwgKCkgPT4ge1xyXG4gICAgLy8gRW50ZXIgZW1haWwgYW5kIG1vdmUgdG8gcmVnaXN0cmF0aW9uIGZvcm1cclxuICAgIGN5LmdldCgnaW5wdXRbdHlwZT1cImVtYWlsXCJdJykudHlwZShcInRlc3RAZXhhbXBsZS5jb21cIik7XHJcbiAgICBjeS5jb250YWlucyhcIkVudGVyXCIpLmNsaWNrKCk7XHJcblxyXG4gICAgLy8gRmlsbCBpbiBuYW1lIGFuZCBzdXJuYW1lXHJcbiAgICBjeS5nZXQoJ2lucHV0W25hbWU9XCJuYW1lXCJdJykudHlwZShcIkpvaG5cIik7XHJcbiAgICBjeS5nZXQoJ2lucHV0W25hbWU9XCJzdXJuYW1lXCJdJykudHlwZShcIkRvZVwiKTtcclxuXHJcbiAgICAvLyBDbGljayBuZXh0IHRvIGdvIHRvIHZlcmlmaWNhdGlvblxyXG4gICAgY3kuY29udGFpbnMoXCJOZXh0XCIpLmNsaWNrKCk7XHJcblxyXG4gICAgLy8gRW5zdXJlIHdlIGFyZSBub3cgaW4gdGhlIHZlcmlmaWNhdGlvbiBmb3JtXHJcbiAgICBjeS5nZXQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdW3BsYWNlaG9sZGVyPVwiVmVyaWZpY2F0aW9uIENvZGVcIl0nKVxyXG4gICAgICAuc2hvdWxkKFwiZXhpc3RcIilcclxuICAgICAgLmFuZChcImJlLnZpc2libGVcIik7XHJcbiAgfSk7XHJcblxyXG4gIGl0KFwiU2hvdWxkIGdvIGJhY2sgdG8gcmVnaXN0cmF0aW9uIGZyb20gdmVyaWZpY2F0aW9uIGZvcm1cIiwgKCkgPT4ge1xyXG4gICAgLy8gRW50ZXIgZW1haWwgYW5kIG1vdmUgdG8gcmVnaXN0cmF0aW9uIGZvcm1cclxuICAgIGN5LmdldCgnaW5wdXRbdHlwZT1cImVtYWlsXCJdJykudHlwZShcInRlc3RAZXhhbXBsZS5jb21cIik7XHJcbiAgICBjeS5jb250YWlucyhcIkVudGVyXCIpLmNsaWNrKCk7XHJcblxyXG4gICAgLy8gRmlsbCBpbiBuYW1lIGFuZCBzdXJuYW1lXHJcbiAgICBjeS5nZXQoJ2lucHV0W25hbWU9XCJuYW1lXCJdJykudHlwZShcIkpvaG5cIik7XHJcbiAgICBjeS5nZXQoJ2lucHV0W25hbWU9XCJzdXJuYW1lXCJdJykudHlwZShcIkRvZVwiKTtcclxuXHJcbiAgICAvLyBHbyB0byB0aGUgdmVyaWZpY2F0aW9uIGZvcm1cclxuICAgIGN5LmNvbnRhaW5zKFwiTmV4dFwiKS5jbGljaygpO1xyXG5cclxuICAgIC8vIEdvIGJhY2sgdG8gdGhlIHJlZ2lzdHJhdGlvbiBmb3JtXHJcbiAgICBjeS5jb250YWlucyhcIkJhY2tcIikuY2xpY2soKTtcclxuXHJcbiAgICAvLyBFbnN1cmUgd2UncmUgYmFjayBhdCB0aGUgcmVnaXN0cmF0aW9uIGZvcm1cclxuICAgIGN5LmdldCgnaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS5zaG91bGQoXCJleGlzdFwiKS5hbmQoXCJiZS52aXNpYmxlXCIpO1xyXG4gIH0pO1xyXG5cclxuICBpdChcIlNob3VsZCBnbyBiYWNrIHRvIGVtYWlsIGZvcm0gZnJvbSByZWdpc3RyYXRpb24gZm9ybVwiLCAoKSA9PiB7XHJcbiAgICAvLyBFbnRlciBlbWFpbCBhbmQgbW92ZSB0byByZWdpc3RyYXRpb24gZm9ybVxyXG4gICAgY3kuZ2V0KCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS50eXBlKFwidGVzdEBleGFtcGxlLmNvbVwiKTtcclxuICAgIGN5LmNvbnRhaW5zKFwiRW50ZXJcIikuY2xpY2soKTtcclxuXHJcbiAgICAvLyBDbGljayBcIkJhY2tcIiB0byByZXR1cm4gdG8gdGhlIGVtYWlsIGZvcm1cclxuICAgIGN5LmNvbnRhaW5zKFwiQmFja1wiKS5jbGljaygpO1xyXG5cclxuICAgIC8vIEVuc3VyZSB0aGUgZW1haWwgaW5wdXQgaXMgdmlzaWJsZSBhZ2FpblxyXG4gICAgY3kuZ2V0KCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS5zaG91bGQoXCJleGlzdFwiKS5hbmQoXCJiZS52aXNpYmxlXCIpO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiYmVmb3JlRWFjaCIsImN5IiwidmlzaXQiLCJpdCIsImdldCIsInNob3VsZCIsImFuZCIsInR5cGUiLCJjb250YWlucyIsImNsaWNrIiwib24iLCJ0eHQiLCJleHBlY3QiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=