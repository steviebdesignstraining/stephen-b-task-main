describe('Login and Logout', function () {
    context('Logging into user account and logging out of account', () => {
        before(function() {
            cy.visit('http://localhost:3000');
            cy.get('[href="/login"]').click();
            //cy.get('h1').should('be.visible').contains('Login')
            //Todo
        })
    it('Negative Scenario - Should login with invalid credentials', () =>{
        cy.get('[type="text"]').type('StephenBennett')
        cy.get('[type="password"]').type('password')
        cy.get('button.jsx-1438973117').click()
        cy.get('pre.jsx-1783324878.jsx-1783324878').should('be.visible').contains('Invalid username or password')

    });
     it(`Positive scenario - Should login with valid credentials`, () => {
        cy.get('[type="text"]').clear().type('lego')
        cy.get('[type="password"]').clear().type('emmet')
        cy.get('button.jsx-1438973117').click()
        cy.url().should('include', '/login')
        //cy.get('p').should('be.visible').contains('success! welcome lego')
    });
    it(`Positive scenario - Should logout`, () => {
        cy.get('[href="/logout"]').click();
        cy.url().should('include', '/logout')
        //cy.get('p').should('be.visible').contains('You have successfully logged out.')
    });
});
});
