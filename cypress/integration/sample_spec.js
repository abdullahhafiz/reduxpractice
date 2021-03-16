/* eslint-disable no-undef */

describe('My First Test', () => {
    it('Check the increment', () => {
        cy.visit('http://localhost:3000/')

        cy.contains('Increment').click()

        cy.get('#result').contains('1')

    })
    it('Check the decrement', () => {
        cy.visit('http://localhost:3000/')

        cy.contains('Decrement').click()

        cy.get('#result').contains('-1')
    })
    it('Check if input box contains the same values that are entered', () => {
        cy.contains('User Name')
        cy.get('input[name = userName]').type('Abdullah')

        cy.contains('Email')
        cy.get('input[name = email]').type('abdullahhafiz1997@gmail.com')

        cy.contains('Contact')
        cy.get('input[name = contact]').type('03060812120')


        cy.get('input[name="email"]')
            .invoke('val')
            .then(sometext =>
                expect(sometext).to.equal('abdullahhafiz1997@gmail.com'))

        cy.get('input[name = userName]')
            .invoke('val')
            .then(sometext =>
                expect(sometext).to.equal('Abdullah'))

        cy.get('input[name = contact]')
            .invoke('val')
            .then(sometext =>
                expect(sometext).to.equal('03060812120'))

    })

    it('Check if form is submitted', () => {
        cy.contains('Submit').click()
    })

    it("Test if main div contains the desired output", () => {

        cy.get('#dataLst li')
            .should('have.length', 3)

        cy.get('#dataLst li')
            .should('be.visible')

        cy.get('#dataLst li').should(($div) => {
            // access the native DOM element
            expect($div.get(0).innerText).to.eq('Abdullah')
            expect($div.get(1).innerText).to.eq('abdullahhafiz1997@gmail.com')
            expect($div.get(2).innerText).to.eq('03060812120')
        })
    })

    it("Test if data object div contains the desired output", () => {

        cy.get('#objData li')
            .should('have.length', 3)

        cy.get('#objData li')
            .should('be.visible')

        cy.get('#objData li').should(($div) => {
            // access the native DOM element
            expect($div.get(0).innerText).to.eq('Abdullah')
            expect($div.get(1).innerText).to.eq('abdullahhafiz1997@gmail.com')
            expect($div.get(2).innerText).to.eq('03060812120')
        })
    })

    it("Test if array data div contains the desired output", () => {

        cy.get('#arrData ul')
            .should('have.length',3)

        cy.get('#arrData ul')
            .should('be.visible')

        cy.get('#arrData ul').should(($div) => {
            // access the native DOM element
            expect($div.get(0).innerText).to.eq('Abdullah')
            expect($div.get(1).innerText).to.eq('abdullahhafiz1997@gmail.com')
            expect($div.get(2).innerText).to.eq('03060812120')
        })
    })
})

