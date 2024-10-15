/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./cypress/e2e/1-getting-started/todo.cy.js ***!
  \**************************************************/


/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://example.cypress.io/todo');
  });
  it('displays two todo items by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.todo-list li').should('have.length', 2);

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
  });
  it('can add new todo items', () => {
    // We'll store our item text in a variable so we can reuse it
    const newItem = 'Feed the cat';

    // Let's get the input element and use the `type` command to
    // input our new list item. After typing the content of our item,
    // we need to type the enter key as well in order to submit the input.
    // This input has a data-test attribute so we'll use that to select the
    // element in accordance with best practices:
    // https://on.cypress.io/selecting-elements
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`);

    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.
    cy.get('.todo-list li').should('have.length', 3).last().should('have.text', newItem);
  });
  it('can check off an item as completed', () => {
    // In addition to using the `get` command to get an element by selector,
    // we can also use the `contains` command to get an element by its contents.
    // However, this will yield the <label>, which is lowest-level element that contains the text.
    // In order to check the item, we'll find the <input> element for this <label>
    // by traversing up the dom to the parent element. From there, we can `find`
    // the child checkbox <input> element and use the `check` command to check it.
    cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check();

    // Now that we've checked the button, we can go ahead and make sure
    // that the list element is now marked as completed.
    // Again we'll use `contains` to find the <label> element and then use the `parents` command
    // to traverse multiple levels up the dom until we find the corresponding <li> element.
    // Once we get that element, we can assert that it has the completed class.
    cy.contains('Pay electric bill').parents('li').should('have.class', 'completed');
  });
  context('with a checked task', () => {
    beforeEach(() => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
      cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check();
    });
    it('can filter for uncompleted tasks', () => {
      // We'll click on the "active" button in order to
      // display only incomplete items
      cy.contains('Active').click();

      // After filtering, we can assert that there is only the one
      // incomplete item in the list.
      cy.get('.todo-list li').should('have.length', 1).first().should('have.text', 'Walk the dog');

      // For good measure, let's also assert that the task we checked off
      // does not exist on the page.
      cy.contains('Pay electric bill').should('not.exist');
    });
    it('can filter for completed tasks', () => {
      // We can perform similar steps as the test above to ensure
      // that only completed tasks are shown
      cy.contains('Completed').click();
      cy.get('.todo-list li').should('have.length', 1).first().should('have.text', 'Pay electric bill');
      cy.contains('Walk the dog').should('not.exist');
    });
    it('can delete all completed tasks', () => {
      // First, let's click the "Clear completed" button
      // `contains` is actually serving two purposes here.
      // First, it's ensuring that the button exists within the dom.
      // This button only appears when at least one task is checked
      // so this command is implicitly verifying that it does exist.
      // Second, it selects the button so we can click it.
      cy.contains('Clear completed').click();

      // Then we can make sure that there is only one element
      // in the list and our element does not exist
      cy.get('.todo-list li').should('have.length', 1).should('not.have.text', 'Pay electric bill');

      // Finally, make sure that the clear button no longer exists.
      cy.contains('Clear completed').should('not.exist');
    });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVGRixFQUFFLENBQUMsZ0NBQWdDLEVBQUUsTUFBTTtNQUN6QztNQUNBO01BQ0FGLEVBQUUsQ0FBQ1MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDTSxLQUFLLENBQUMsQ0FBQztNQUVoQ2YsRUFBRSxDQUFDRyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQ3BCQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUN4QkMsS0FBSyxDQUFDLENBQUMsQ0FDUEQsTUFBTSxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztNQUUzQ0osRUFBRSxDQUFDUyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUNMLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDakQsQ0FBQyxDQUFDO0lBRUZGLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxNQUFNO01BQ3pDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBRixFQUFFLENBQUNTLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDTSxLQUFLLENBQUMsQ0FBQzs7TUFFdEM7TUFDQTtNQUNBZixFQUFFLENBQUNHLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FDcEJDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQ3hCQSxNQUFNLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDOztNQUUvQztNQUNBSixFQUFFLENBQUNTLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDTCxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3BELENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnV4dC1hcHAvLi9jeXByZXNzL2UyZS8xLWdldHRpbmctc3RhcnRlZC90b2RvLmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XHJcblxyXG4vLyBXZWxjb21lIHRvIEN5cHJlc3MhXHJcbi8vXHJcbi8vIFRoaXMgc3BlYyBmaWxlIGNvbnRhaW5zIGEgdmFyaWV0eSBvZiBzYW1wbGUgdGVzdHNcclxuLy8gZm9yIGEgdG9kbyBsaXN0IGFwcCB0aGF0IGFyZSBkZXNpZ25lZCB0byBkZW1vbnN0cmF0ZVxyXG4vLyB0aGUgcG93ZXIgb2Ygd3JpdGluZyB0ZXN0cyBpbiBDeXByZXNzLlxyXG4vL1xyXG4vLyBUbyBsZWFybiBtb3JlIGFib3V0IGhvdyBDeXByZXNzIHdvcmtzIGFuZFxyXG4vLyB3aGF0IG1ha2VzIGl0IHN1Y2ggYW4gYXdlc29tZSB0ZXN0aW5nIHRvb2wsXHJcbi8vIHBsZWFzZSByZWFkIG91ciBnZXR0aW5nIHN0YXJ0ZWQgZ3VpZGU6XHJcbi8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9pbnRyb2R1Y3Rpb24tdG8tY3lwcmVzc1xyXG5cclxuZGVzY3JpYmUoJ2V4YW1wbGUgdG8tZG8gYXBwJywgKCkgPT4ge1xyXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgLy8gQ3lwcmVzcyBzdGFydHMgb3V0IHdpdGggYSBibGFuayBzbGF0ZSBmb3IgZWFjaCB0ZXN0XHJcbiAgICAvLyBzbyB3ZSBtdXN0IHRlbGwgaXQgdG8gdmlzaXQgb3VyIHdlYnNpdGUgd2l0aCB0aGUgYGN5LnZpc2l0KClgIGNvbW1hbmQuXHJcbiAgICAvLyBTaW5jZSB3ZSB3YW50IHRvIHZpc2l0IHRoZSBzYW1lIFVSTCBhdCB0aGUgc3RhcnQgb2YgYWxsIG91ciB0ZXN0cyxcclxuICAgIC8vIHdlIGluY2x1ZGUgaXQgaW4gb3VyIGJlZm9yZUVhY2ggZnVuY3Rpb24gc28gdGhhdCBpdCBydW5zIGJlZm9yZSBlYWNoIHRlc3RcclxuICAgIGN5LnZpc2l0KCdodHRwczovL2V4YW1wbGUuY3lwcmVzcy5pby90b2RvJylcclxuICB9KVxyXG5cclxuICBpdCgnZGlzcGxheXMgdHdvIHRvZG8gaXRlbXMgYnkgZGVmYXVsdCcsICgpID0+IHtcclxuICAgIC8vIFdlIHVzZSB0aGUgYGN5LmdldCgpYCBjb21tYW5kIHRvIGdldCBhbGwgZWxlbWVudHMgdGhhdCBtYXRjaCB0aGUgc2VsZWN0b3IuXHJcbiAgICAvLyBUaGVuLCB3ZSB1c2UgYHNob3VsZGAgdG8gYXNzZXJ0IHRoYXQgdGhlcmUgYXJlIHR3byBtYXRjaGVkIGl0ZW1zLFxyXG4gICAgLy8gd2hpY2ggYXJlIHRoZSB0d28gZGVmYXVsdCBpdGVtcy5cclxuICAgIGN5LmdldCgnLnRvZG8tbGlzdCBsaScpLnNob3VsZCgnaGF2ZS5sZW5ndGgnLCAyKVxyXG5cclxuICAgIC8vIFdlIGNhbiBnbyBldmVuIGZ1cnRoZXIgYW5kIGNoZWNrIHRoYXQgdGhlIGRlZmF1bHQgdG9kb3MgZWFjaCBjb250YWluXHJcbiAgICAvLyB0aGUgY29ycmVjdCB0ZXh0LiBXZSB1c2UgdGhlIGBmaXJzdGAgYW5kIGBsYXN0YCBmdW5jdGlvbnNcclxuICAgIC8vIHRvIGdldCBqdXN0IHRoZSBmaXJzdCBhbmQgbGFzdCBtYXRjaGVkIGVsZW1lbnRzIGluZGl2aWR1YWxseSxcclxuICAgIC8vIGFuZCB0aGVuIHBlcmZvcm0gYW4gYXNzZXJ0aW9uIHdpdGggYHNob3VsZGAuXHJcbiAgICBjeS5nZXQoJy50b2RvLWxpc3QgbGknKS5maXJzdCgpLnNob3VsZCgnaGF2ZS50ZXh0JywgJ1BheSBlbGVjdHJpYyBiaWxsJylcclxuICAgIGN5LmdldCgnLnRvZG8tbGlzdCBsaScpLmxhc3QoKS5zaG91bGQoJ2hhdmUudGV4dCcsICdXYWxrIHRoZSBkb2cnKVxyXG4gIH0pXHJcblxyXG4gIGl0KCdjYW4gYWRkIG5ldyB0b2RvIGl0ZW1zJywgKCkgPT4ge1xyXG4gICAgLy8gV2UnbGwgc3RvcmUgb3VyIGl0ZW0gdGV4dCBpbiBhIHZhcmlhYmxlIHNvIHdlIGNhbiByZXVzZSBpdFxyXG4gICAgY29uc3QgbmV3SXRlbSA9ICdGZWVkIHRoZSBjYXQnXHJcblxyXG4gICAgLy8gTGV0J3MgZ2V0IHRoZSBpbnB1dCBlbGVtZW50IGFuZCB1c2UgdGhlIGB0eXBlYCBjb21tYW5kIHRvXHJcbiAgICAvLyBpbnB1dCBvdXIgbmV3IGxpc3QgaXRlbS4gQWZ0ZXIgdHlwaW5nIHRoZSBjb250ZW50IG9mIG91ciBpdGVtLFxyXG4gICAgLy8gd2UgbmVlZCB0byB0eXBlIHRoZSBlbnRlciBrZXkgYXMgd2VsbCBpbiBvcmRlciB0byBzdWJtaXQgdGhlIGlucHV0LlxyXG4gICAgLy8gVGhpcyBpbnB1dCBoYXMgYSBkYXRhLXRlc3QgYXR0cmlidXRlIHNvIHdlJ2xsIHVzZSB0aGF0IHRvIHNlbGVjdCB0aGVcclxuICAgIC8vIGVsZW1lbnQgaW4gYWNjb3JkYW5jZSB3aXRoIGJlc3QgcHJhY3RpY2VzOlxyXG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3NlbGVjdGluZy1lbGVtZW50c1xyXG4gICAgY3kuZ2V0KCdbZGF0YS10ZXN0PW5ldy10b2RvXScpLnR5cGUoYCR7bmV3SXRlbX17ZW50ZXJ9YClcclxuXHJcbiAgICAvLyBOb3cgdGhhdCB3ZSd2ZSB0eXBlZCBvdXIgbmV3IGl0ZW0sIGxldCdzIGNoZWNrIHRoYXQgaXQgYWN0dWFsbHkgd2FzIGFkZGVkIHRvIHRoZSBsaXN0LlxyXG4gICAgLy8gU2luY2UgaXQncyB0aGUgbmV3ZXN0IGl0ZW0sIGl0IHNob3VsZCBleGlzdCBhcyB0aGUgbGFzdCBlbGVtZW50IGluIHRoZSBsaXN0LlxyXG4gICAgLy8gSW4gYWRkaXRpb24sIHdpdGggdGhlIHR3byBkZWZhdWx0IGl0ZW1zLCB3ZSBzaG91bGQgaGF2ZSBhIHRvdGFsIG9mIDMgZWxlbWVudHMgaW4gdGhlIGxpc3QuXHJcbiAgICAvLyBTaW5jZSBhc3NlcnRpb25zIHlpZWxkIHRoZSBlbGVtZW50IHRoYXQgd2FzIGFzc2VydGVkIG9uLFxyXG4gICAgLy8gd2UgY2FuIGNoYWluIGJvdGggb2YgdGhlc2UgYXNzZXJ0aW9ucyB0b2dldGhlciBpbnRvIGEgc2luZ2xlIHN0YXRlbWVudC5cclxuICAgIGN5LmdldCgnLnRvZG8tbGlzdCBsaScpXHJcbiAgICAgIC5zaG91bGQoJ2hhdmUubGVuZ3RoJywgMylcclxuICAgICAgLmxhc3QoKVxyXG4gICAgICAuc2hvdWxkKCdoYXZlLnRleHQnLCBuZXdJdGVtKVxyXG4gIH0pXHJcblxyXG4gIGl0KCdjYW4gY2hlY2sgb2ZmIGFuIGl0ZW0gYXMgY29tcGxldGVkJywgKCkgPT4ge1xyXG4gICAgLy8gSW4gYWRkaXRpb24gdG8gdXNpbmcgdGhlIGBnZXRgIGNvbW1hbmQgdG8gZ2V0IGFuIGVsZW1lbnQgYnkgc2VsZWN0b3IsXHJcbiAgICAvLyB3ZSBjYW4gYWxzbyB1c2UgdGhlIGBjb250YWluc2AgY29tbWFuZCB0byBnZXQgYW4gZWxlbWVudCBieSBpdHMgY29udGVudHMuXHJcbiAgICAvLyBIb3dldmVyLCB0aGlzIHdpbGwgeWllbGQgdGhlIDxsYWJlbD4sIHdoaWNoIGlzIGxvd2VzdC1sZXZlbCBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIHRleHQuXHJcbiAgICAvLyBJbiBvcmRlciB0byBjaGVjayB0aGUgaXRlbSwgd2UnbGwgZmluZCB0aGUgPGlucHV0PiBlbGVtZW50IGZvciB0aGlzIDxsYWJlbD5cclxuICAgIC8vIGJ5IHRyYXZlcnNpbmcgdXAgdGhlIGRvbSB0byB0aGUgcGFyZW50IGVsZW1lbnQuIEZyb20gdGhlcmUsIHdlIGNhbiBgZmluZGBcclxuICAgIC8vIHRoZSBjaGlsZCBjaGVja2JveCA8aW5wdXQ+IGVsZW1lbnQgYW5kIHVzZSB0aGUgYGNoZWNrYCBjb21tYW5kIHRvIGNoZWNrIGl0LlxyXG4gICAgY3kuY29udGFpbnMoJ1BheSBlbGVjdHJpYyBiaWxsJylcclxuICAgICAgLnBhcmVudCgpXHJcbiAgICAgIC5maW5kKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpXHJcbiAgICAgIC5jaGVjaygpXHJcblxyXG4gICAgLy8gTm93IHRoYXQgd2UndmUgY2hlY2tlZCB0aGUgYnV0dG9uLCB3ZSBjYW4gZ28gYWhlYWQgYW5kIG1ha2Ugc3VyZVxyXG4gICAgLy8gdGhhdCB0aGUgbGlzdCBlbGVtZW50IGlzIG5vdyBtYXJrZWQgYXMgY29tcGxldGVkLlxyXG4gICAgLy8gQWdhaW4gd2UnbGwgdXNlIGBjb250YWluc2AgdG8gZmluZCB0aGUgPGxhYmVsPiBlbGVtZW50IGFuZCB0aGVuIHVzZSB0aGUgYHBhcmVudHNgIGNvbW1hbmRcclxuICAgIC8vIHRvIHRyYXZlcnNlIG11bHRpcGxlIGxldmVscyB1cCB0aGUgZG9tIHVudGlsIHdlIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgPGxpPiBlbGVtZW50LlxyXG4gICAgLy8gT25jZSB3ZSBnZXQgdGhhdCBlbGVtZW50LCB3ZSBjYW4gYXNzZXJ0IHRoYXQgaXQgaGFzIHRoZSBjb21wbGV0ZWQgY2xhc3MuXHJcbiAgICBjeS5jb250YWlucygnUGF5IGVsZWN0cmljIGJpbGwnKVxyXG4gICAgICAucGFyZW50cygnbGknKVxyXG4gICAgICAuc2hvdWxkKCdoYXZlLmNsYXNzJywgJ2NvbXBsZXRlZCcpXHJcbiAgfSlcclxuXHJcbiAgY29udGV4dCgnd2l0aCBhIGNoZWNrZWQgdGFzaycsICgpID0+IHtcclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAvLyBXZSdsbCB0YWtlIHRoZSBjb21tYW5kIHdlIHVzZWQgYWJvdmUgdG8gY2hlY2sgb2ZmIGFuIGVsZW1lbnRcclxuICAgICAgLy8gU2luY2Ugd2Ugd2FudCB0byBwZXJmb3JtIG11bHRpcGxlIHRlc3RzIHRoYXQgc3RhcnQgd2l0aCBjaGVja2luZ1xyXG4gICAgICAvLyBvbmUgZWxlbWVudCwgd2UgcHV0IGl0IGluIHRoZSBiZWZvcmVFYWNoIGhvb2tcclxuICAgICAgLy8gc28gdGhhdCBpdCBydW5zIGF0IHRoZSBzdGFydCBvZiBldmVyeSB0ZXN0LlxyXG4gICAgICBjeS5jb250YWlucygnUGF5IGVsZWN0cmljIGJpbGwnKVxyXG4gICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgIC5maW5kKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpXHJcbiAgICAgICAgLmNoZWNrKClcclxuICAgIH0pXHJcblxyXG4gICAgaXQoJ2NhbiBmaWx0ZXIgZm9yIHVuY29tcGxldGVkIHRhc2tzJywgKCkgPT4ge1xyXG4gICAgICAvLyBXZSdsbCBjbGljayBvbiB0aGUgXCJhY3RpdmVcIiBidXR0b24gaW4gb3JkZXIgdG9cclxuICAgICAgLy8gZGlzcGxheSBvbmx5IGluY29tcGxldGUgaXRlbXNcclxuICAgICAgY3kuY29udGFpbnMoJ0FjdGl2ZScpLmNsaWNrKClcclxuXHJcbiAgICAgIC8vIEFmdGVyIGZpbHRlcmluZywgd2UgY2FuIGFzc2VydCB0aGF0IHRoZXJlIGlzIG9ubHkgdGhlIG9uZVxyXG4gICAgICAvLyBpbmNvbXBsZXRlIGl0ZW0gaW4gdGhlIGxpc3QuXHJcbiAgICAgIGN5LmdldCgnLnRvZG8tbGlzdCBsaScpXHJcbiAgICAgICAgLnNob3VsZCgnaGF2ZS5sZW5ndGgnLCAxKVxyXG4gICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgLnNob3VsZCgnaGF2ZS50ZXh0JywgJ1dhbGsgdGhlIGRvZycpXHJcblxyXG4gICAgICAvLyBGb3IgZ29vZCBtZWFzdXJlLCBsZXQncyBhbHNvIGFzc2VydCB0aGF0IHRoZSB0YXNrIHdlIGNoZWNrZWQgb2ZmXHJcbiAgICAgIC8vIGRvZXMgbm90IGV4aXN0IG9uIHRoZSBwYWdlLlxyXG4gICAgICBjeS5jb250YWlucygnUGF5IGVsZWN0cmljIGJpbGwnKS5zaG91bGQoJ25vdC5leGlzdCcpXHJcbiAgICB9KVxyXG5cclxuICAgIGl0KCdjYW4gZmlsdGVyIGZvciBjb21wbGV0ZWQgdGFza3MnLCAoKSA9PiB7XHJcbiAgICAgIC8vIFdlIGNhbiBwZXJmb3JtIHNpbWlsYXIgc3RlcHMgYXMgdGhlIHRlc3QgYWJvdmUgdG8gZW5zdXJlXHJcbiAgICAgIC8vIHRoYXQgb25seSBjb21wbGV0ZWQgdGFza3MgYXJlIHNob3duXHJcbiAgICAgIGN5LmNvbnRhaW5zKCdDb21wbGV0ZWQnKS5jbGljaygpXHJcblxyXG4gICAgICBjeS5nZXQoJy50b2RvLWxpc3QgbGknKVxyXG4gICAgICAgIC5zaG91bGQoJ2hhdmUubGVuZ3RoJywgMSlcclxuICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgIC5zaG91bGQoJ2hhdmUudGV4dCcsICdQYXkgZWxlY3RyaWMgYmlsbCcpXHJcblxyXG4gICAgICBjeS5jb250YWlucygnV2FsayB0aGUgZG9nJykuc2hvdWxkKCdub3QuZXhpc3QnKVxyXG4gICAgfSlcclxuXHJcbiAgICBpdCgnY2FuIGRlbGV0ZSBhbGwgY29tcGxldGVkIHRhc2tzJywgKCkgPT4ge1xyXG4gICAgICAvLyBGaXJzdCwgbGV0J3MgY2xpY2sgdGhlIFwiQ2xlYXIgY29tcGxldGVkXCIgYnV0dG9uXHJcbiAgICAgIC8vIGBjb250YWluc2AgaXMgYWN0dWFsbHkgc2VydmluZyB0d28gcHVycG9zZXMgaGVyZS5cclxuICAgICAgLy8gRmlyc3QsIGl0J3MgZW5zdXJpbmcgdGhhdCB0aGUgYnV0dG9uIGV4aXN0cyB3aXRoaW4gdGhlIGRvbS5cclxuICAgICAgLy8gVGhpcyBidXR0b24gb25seSBhcHBlYXJzIHdoZW4gYXQgbGVhc3Qgb25lIHRhc2sgaXMgY2hlY2tlZFxyXG4gICAgICAvLyBzbyB0aGlzIGNvbW1hbmQgaXMgaW1wbGljaXRseSB2ZXJpZnlpbmcgdGhhdCBpdCBkb2VzIGV4aXN0LlxyXG4gICAgICAvLyBTZWNvbmQsIGl0IHNlbGVjdHMgdGhlIGJ1dHRvbiBzbyB3ZSBjYW4gY2xpY2sgaXQuXHJcbiAgICAgIGN5LmNvbnRhaW5zKCdDbGVhciBjb21wbGV0ZWQnKS5jbGljaygpXHJcblxyXG4gICAgICAvLyBUaGVuIHdlIGNhbiBtYWtlIHN1cmUgdGhhdCB0aGVyZSBpcyBvbmx5IG9uZSBlbGVtZW50XHJcbiAgICAgIC8vIGluIHRoZSBsaXN0IGFuZCBvdXIgZWxlbWVudCBkb2VzIG5vdCBleGlzdFxyXG4gICAgICBjeS5nZXQoJy50b2RvLWxpc3QgbGknKVxyXG4gICAgICAgIC5zaG91bGQoJ2hhdmUubGVuZ3RoJywgMSlcclxuICAgICAgICAuc2hvdWxkKCdub3QuaGF2ZS50ZXh0JywgJ1BheSBlbGVjdHJpYyBiaWxsJylcclxuXHJcbiAgICAgIC8vIEZpbmFsbHksIG1ha2Ugc3VyZSB0aGF0IHRoZSBjbGVhciBidXR0b24gbm8gbG9uZ2VyIGV4aXN0cy5cclxuICAgICAgY3kuY29udGFpbnMoJ0NsZWFyIGNvbXBsZXRlZCcpLnNob3VsZCgnbm90LmV4aXN0JylcclxuICAgIH0pXHJcbiAgfSlcclxufSlcclxuIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiYmVmb3JlRWFjaCIsImN5IiwidmlzaXQiLCJpdCIsImdldCIsInNob3VsZCIsImZpcnN0IiwibGFzdCIsIm5ld0l0ZW0iLCJ0eXBlIiwiY29udGFpbnMiLCJwYXJlbnQiLCJmaW5kIiwiY2hlY2siLCJwYXJlbnRzIiwiY29udGV4dCIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==