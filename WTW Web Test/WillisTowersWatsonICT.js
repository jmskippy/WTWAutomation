/// <reference types="Cypress" />

const websiteprefix = 'https://www.willistowerswatson.com/'

describe('Willis Towers Watson Automation Web Test', function() {

    it('1. Open the URL ', function() {
        cy.visit(websiteprefix+'ICT')
    })

    it('2. Change the Language and Region', function() {
        cy.get('.site-nav > :nth-child(2) > :nth-child(1) > .font-p').click()
    })
    
    it('2.1 Select Americas drop down', function() {
        cy.get('#region-0 > .material-icons').click()
    })
    
    it('2.2 Click on United States -> English', function() {
        cy.get('#region0 > .pt-3 > :nth-child(18) > .row > .d-block > .heading-5').click()                
    })

    it('3. Click search to open up the search bar', function() {
        cy.get('.site-nav__btn--search-menu > .site-nav__btn__label').click()
    })

    it('3.1 Search for the word IFRS 17', function() {
        cy.get('input').type('IFRS 17')//.type('{enter}')  
        //had an issue here with super domains
        //so needed to directly access the search link

        cy.visit(websiteprefix+'en-US/Search#q=IFRS%2017&sort=relevancy')
    })

    it('4. Validate if you have arrived on the result page', function() {
        cy.url()
            .should('equals',websiteprefix+'en-US/Search#q=IFRS%2017&sort=relevancy')
    })

    it('5. Check if the result is sorted by Date. If not sort by Date', function() {
        cy.get('#coveo9de96e90').click() 
    })

    it('6. Check Article under Content Type', function() {
        cy.get('[data-value="Article"] > .coveo-facet-value-label > .coveo-facet-value-label-wrapper > .coveo-facet-value-checkbox').click()
        })

    it('7. Validate that each article in the list displays a link that starts with...', function() {
        cy.get('.coveo-results-column').each(($div, i) => {
            expect($div).to.contain(websiteprefix+'en-US')
        })
    })
})