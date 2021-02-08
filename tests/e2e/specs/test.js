// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
  })


it('Should update the display at the running total when number buttons pressed', () => {
  cy.get('#number1').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('.display').should('contain', '1999');
});

it('should show 14 in the running total when pressing 6 + 8 then =', () => {
  cy.get('#number6').click();
  cy.get('#operator_add').click();
  cy.get('#number8').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '14');
})
it('should show 6 in the running total when pressing 10 - 4 then =', () => {
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#operator_subtract').click();
  cy.get('#number0').click();
  cy.get('#number4').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '6');
})
it('should show 2 in the running total when pressing 4 / 2 then =', () => {
  cy.get('#number4').click();
  cy.get('#operator_divide').click();
  cy.get('#number2').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '2');
})
it('should show 20 in the running total when pressing 5 * 4 then =', () => {
  cy.get('#number0').click();
  cy.get('#number5').click();
  cy.get('#operator_multiply').click();
  cy.get('#number0').click();
  cy.get('#number4').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '20');
})
it('should show 4 in the running total after multiple operations are chained together', () => {
  cy.get('#number5').click();
  cy.get('#operator_multiply').click();
  cy.get('#number5').click();
  cy.get('#operator_add').click();
  cy.get('#number1').click();
  cy.get('#number5').click();
  cy.get('#operator_divide').click();
  cy.get('#number4').click();
  cy.get('#operator_subtract').click();
  cy.get('#number5').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '5');
})
it('should show positive 5 as 5', () => {
  cy.get('#number5').click();
  cy.get('.display').should('contain', '5')
})
it('should show negative 8 as -8', () => {
  cy.get('#number4').click();
  cy.get('#operator_subtract').click();
  cy.get('#number1').click();
  cy.get('#number2').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '-8');
})
it('should show 3 and a half as 3.5', () => {
  cy.get('#number7').click();
  cy.get('#operator_divide').click();
  cy.get('#number2').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '3.5');
})
it('should show 100 Billion multiplied by 100 Billion as 1e+22', () => {
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#operator_multiply').click();
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '1e+22');
})
it('should show error if dividing by 0', () => {
  cy.get('#number5').click();
  cy.get('#operator_divide').click();
  cy.get('#number0').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', 'error');
})
})