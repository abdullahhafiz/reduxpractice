/* eslint-disable no-undef */
describe('Submit Test Case', () => {
    before(()=>{
        cy.visit('http://localhost:3000/')
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
    it('Check if input box contains the same values that are entered', () => {
        // cy.contains('User Name')
        // cy.get('input[name = userName]').type('Abdullah')

        // cy.contains('Email')
        // cy.get('input[name = email]').type('abdullahhafiz1997@gmail.com')

        // cy.contains('Contact')
        // cy.get('input[name = contact]').type('03060812120')


        // cy.get('input[name="email"]')
        //     .invoke('val')
        //     .then(sometext =>
        //         expect(sometext).to.equal('abdullahhafiz1997@gmail.com'))

        // cy.get('input[name = userName]')
        //     .invoke('val')
        //     .then(sometext =>
        //         expect(sometext).to.equal('Abdullah'))

        // cy.get('input[name = contact]')
        //     .invoke('val')
        //     .then(sometext =>
        //         expect(sometext).to.equal('03060812120'))

    })
    after(() => {
        cy.contains('Submit').click()
    })
    it('Check if form is submitted', () => {
        // cy.contains('Submit').click()
    })
})