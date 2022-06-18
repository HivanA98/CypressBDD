const URL = 'http://zero.webappsecurity.com/index.html'
const KEYWORD = '#searchTerm'
const RESULT = 'h2'

class MainPage{
    staticVisit(){
        cy.visit(URL)
    }

    static FIllSearchBox(){
        cy.get(KEYWORD).type('Computer{enter}')
    }

    static TheResult(){
        cy.get(RESULT).should('contain.text', 'Search Results:')
    }
}

export default SearchPage.js