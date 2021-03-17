/* eslint-disable no-undef */

describe('My First Test', () => {

    before(() => {
        //increment
        cy.visit('http://localhost:3000/')
        cy.contains('Increment').click()
        cy.get('#result').contains('1')
        //Decrement 
        cy.visit('http://localhost:3000/')
        cy.contains('Decrement').click()
        cy.get('#result').contains('-1')
    })

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
  
    it("Test if main div contains the desired output", () => {

        cy.get('#dataLst li')
            .should('have.length', 3)

        cy.get('#dataLst li')
            .should('be.visible')

        cy.get('#dataLst li').should(($div) => {
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
            expect($div.get(0).innerText).to.eq('Abdullah')
            expect($div.get(1).innerText).to.eq('abdullahhafiz1997@gmail.com')
            expect($div.get(2).innerText).to.eq('03060812120')
        })
    })

    it("Test if array data div contains the desired output", () => {

        cy.get('#arrData ul')
            .should('have.length', 3)

        cy.get('#arrData ul')
            .should('be.visible')

        cy.get('#arrData ul').should(($div) => {
            expect($div.get(0).innerText).to.eq('Abdullah')
            expect($div.get(1).innerText).to.eq('abdullahhafiz1997@gmail.com')
            expect($div.get(2).innerText).to.eq('03060812120')
        })
    })


    it('Clear the Data Present In Input Field', () => {
        cy.get('input[name = userName]').clear()
        cy.get('input[name = email]').clear()
        cy.get('input[name = contact]').clear()
    })
    after(() => {
        cy.get('input[name = userName]').clear()
        cy.get('input[name = email]').clear()
        cy.get('input[name = contact]').clear()
    })
    it('Check if input box contains the same values to Update', () => {
        cy.contains('User Name')
        cy.get('input[name = userName]').type('Zia')

        cy.contains('Email')
        cy.get('input[name = email]').type('Zia@gmail.com')

        cy.contains('Contact')
        cy.get('input[name = contact]').type('123456789')


        cy.get('input[name = userName]')
            .invoke('val')
            .then(sometext =>
                expect(sometext).to.equal('Zia'))

        cy.get('input[name="email"]')
            .invoke('val')
            .then(sometext =>
                expect(sometext).to.equal('Zia@gmail.com'))


        cy.get('input[name = contact]')
            .invoke('val')
            .then(sometext =>
                expect(sometext).to.equal('123456789'))

    })

    it('Check if form is Updated', () => {
        cy.contains('Submit To Update').click()
    })

    it("Test if main div contains the Updated output", () => {

        cy.get('#dataLst li')
            .should('have.length', 3)

        cy.get('#dataLst li')
            .should('be.visible')

        cy.get('#dataLst li').should(($div) => {
            expect($div.get(0).innerText).to.eq('Zia')
            expect($div.get(1).innerText).to.eq('Zia@gmail.com')
            expect($div.get(2).innerText).to.eq('123456789')
        })
    })

    it("Test if data object div contains the Updated output", () => {

        cy.get('#objData li')
            .should('have.length', 3)

        cy.get('#objData li')
            .should('be.visible')

        cy.get('#objData li').should(($div) => {
            expect($div.get(0).innerText).to.eq('Zia')
            expect($div.get(1).innerText).to.eq('Zia@gmail.com')
            expect($div.get(2).innerText).to.eq('123456789')
        })
    })
    after(()=>{
        cy.contains('Delete Object Button').click()
        cy.clearLocalStorage()
    })
    it("Delete The Data Present In Data In Object Div", () => {
        cy.contains('Delete Object Button').click()
        cy.clearLocalStorage()
    })

    // it("Delete The Data Present In Array", () => {
    //     cy.contains('Delete Input')
    //     // cy.get('input[name = onDelteIndex]').type('1')
    //     cy.contains('Delete').click()
    //     // cy.clearLocalStorage(/prop1|2/).then((ls) => {
    //     //     expect(ls.getItem('userName')).to.be.null
    //     //     expect(ls.getItem('email')).to.be.null
    //     //     expect(ls.getItem('contact')).to.eq('abdullahhafiz1997@gmail.com')
    //     //   })
    // })
})

