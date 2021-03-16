/* eslint-disable no-undef */

describe('My First Test', () => {
    it('check the Contents', () => {
        // cy.visit('https://example.cypress.io')
        cy.visit('http://localhost:3000/')
        // cy.pause()

        // cy.contains('type').click()
        // cy.url().should('include', '/commands/actions')
        // cy.get('.action-email')
        // .type('abdullah@gmail.com')
        // .should('have.value', 'abdullah@gmail.com')
        cy.contains('Increment').click()

        // cy.get('#result').should('have.value', 'Increment')
        cy.get('#result').contains('1')

        cy.contains('Decrement').click()
        cy.get('#result').contains('0')
        cy.pause()

        cy.contains('User Name')
        cy.get('input[name = userName]').type('Abdullah')
            
        cy.pause()
        cy.contains('Email')
        cy.get('input[name = email]').type('abdullahhafiz1997@gmail.com')
            
        cy.pause()
        cy.contains('Contact')
        cy.get('input[name = contact]').type('03060812120')

        cy.pause()
        cy.contains('Submit').click()
        it('after Submit Clicked this will work', ()=>{
            cy.visit('')
            cy.get('select').select('Submit')
            
        })
        // cy.get('#form').submit()
        
        // cy.contains('Submit To Update').click()
        // cy.contains('Delete').click()
        // cy.contains('Delete Object Button').click()
        // cy.contains('Data By Object')
        // cy.contains('Data By Array')
        // expect (true).to.equal(true)

    })
})