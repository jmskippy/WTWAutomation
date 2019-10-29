describe('Willis Towers Web Test', function() {

    //Cypress.Cookies.debug(true, { verbose: false })


    it('Access the Search Link', function() {
        cy.setCookie('userPreferredLang', 'en-US')

        cy.visit('https://www.willistowerswatson.com/en-US/Search#q=IFRS%2017&sort=relevancy')
    })


    it('Check if date is selected and sorted', function() {
        cy.wait(10)

        if (cy.find('warningMessage')) { 
            cy.get('warningMessage').click() //... don't show the confirm... 
        }

        // if (cy.find('warningMessage')) {
        //     cy.get('call').click()
        // }

        cy.get('#coveo9de96e90').click()
            // if (!($datesort).contains('selected'))
            // {
            //     $datesort.click()
            // }
        })

        it('Check Article under Content Type', function() {
            cy.get('[data-value="Article"] > .coveo-facet-value-label > .coveo-facet-value-label-wrapper > .coveo-facet-value-checkbox').click()
                // if (!($datesort).contains('selected'))
                // {
                //     $datesort.click()
                // }
            })

        it('Iterate list of results and validate for https://www.willistowerswatson.com/en-US/', function() {
            cy.get('.coveo-results-column').select() //.select('.coveo-result-list-container > :nth-child(1)')
                // if (!($datesort).contains('selected'))
                // {
                //     $datesort.click()
                // }
            })
                
    
//        [data-value="Article"] > .coveo-facet-value-label > .coveo-facet-value-label-wrapper > .coveo-facet-value-checkbox
    

        // if (!cy.get('#coveo9de96e90').find().contains('data-sort-criteria'))
        // {
        //     cy.get('#coveo9de96e90').click() 
        // }
        // if (cy.get('#coveo9de96e90').contains('selected'))
        // {
        //     cy.get('#coveo9de96e90').click()
        // }


    // it('sort by date', function() {
    //     cy.get('#coveo9de96e90').che
    // })
    

        //cy.url()
        //    .should('equals','https://www.willistowerswatson.com/en-US/Search#q=IFRS%2017&sort=relevancy')
//cy.pause()

        // it('Check if date is selected and sorted', function() {
        //     if (cy.get('coveo9de96e90').contains('selected'))
        //     {
        //         cy.get('coveo9de96e90').select()
        //     }
        // })

    })

    // it('Select Region and Language', function() {
    //     cy.get('.site-nav > :nth-child(2) > :nth-child(1) > .font-p').click()
    // })
    
    // it('Select Americas drop down', function() {
    //     cy.get('#region-0 > .material-icons').click()
    // })
    
    // it('Click on United States -> English', function() {
    //     cy.get('#region0 > .pt-3 > :nth-child(18) > .row > .d-block > .heading-5').click()
                
    //     // cy.url()
    //     //     .should('equal','https://www.willistowerswatson.com/en-US')
    // })

    // it('Click search', function() {
    //     cy.get('.site-nav__btn--search-menu > .site-nav__btn__label').click()
    // })

    // it('Enter text into the search box', function() {
    //     cy.get('input').type('IFRS 17').type('{enter}')

    //     cy.url()
    //         .should('equals','https://www.willistowerswatson.com/en-US/Search#q=IFRS%2017&sort=relevancy')
    // })


    // cy.url()
    //     .should('equal','https://www.willistowerswatson.com/en-us/solutions/insurance-consulting-and-technology')
      


// describe('Select Region and Language', function() {
//     })
// })
            
/*
    it('Click on the region and language on the top left', () => {
        cy.get('.site-nav > :nth-child(2) > :nth-child(1) > .font-p').click()
    })

    it('Select Americas drop down', () => {
        cy.get('#region-0 > .material-icons').click()
    })

    it('Click on United States - English', () => {
        cy.get('#region0 > .pt-3 > :nth-child(18) > .row > .d-block > .heading-5').click()
    })

    it('Click search', () => {
        cy.get('.site-nav__btn--search-menu > .site-nav__btn__label').click()
    })

    it('Enter text into the search box', () => {
        cy.get('input').type('IFRS 17').type('{enter}')
    })

    //it('Submit the form for the search', () => {
    //    cy.get('.action-form').submit()
        //cy.get('.action-form').submit()
  */  









/*
    it('xxx', () => {
        cy.get('xxx').click()
    })
*/
    
/*
    it('.click() - click on a DOM element', () => {
        // https://on.cypress.io/click
        cy.get('.action-btn').click()
    
        // You can click on 9 specific positions of an element:
        //  -----------------------------------
        // | topLeft        top       topRight |
        // |                                   |
        // |                                   |
        // |                                   |
        // | left          center        right |
        // |                                   |
        // |                                   |
        // |                                   |
        // | bottomLeft   bottom   bottomRight |
        //  -----------------------------------
    
        // clicking in the center of the element is the default
        cy.get('#action-canvas').click()
    
        cy.get('#action-canvas').click('topLeft')
        cy.get('#action-canvas').click('top')
        cy.get('#action-canvas').click('topRight')
        cy.get('#action-canvas').click('left')
        cy.get('#action-canvas').click('right')
        cy.get('#action-canvas').click('bottomLeft')
        cy.get('#action-canvas').click('bottom')
        cy.get('#action-canvas').click('bottomRight')
    
        // .click() accepts an x and y coordinate
        // that controls where the click occurs :)
    
        cy.get('#action-canvas')
          .click(80, 75) // click 80px on x coord and 75px on y coord
          .click(170, 75)
          .click(80, 165)
          .click(100, 185)
          .click(125, 190)
          .click(150, 185)
          .click(170, 165)
    
        // click multiple elements by passing multiple: true
        cy.get('.action-labels>.label').click({ multiple: true })
    
        // Ignore error checking prior to clicking
        cy.get('.action-opacity>.btn').click({ force: true })
      })
  */  

