

describe('Login page',()=>{
    it('first test',()=>{
        cy.visit('/');
        cy.url().should('include','/login');
        cy.get('[type="text"]').type('suri');
    })

    it.only('google test',()=>{
        cy.visit('https://google.com');
        cy.get('.gLFyf',{timeout:20000}).type('w3 schools {enter}');
        cy.contains('W3Schools Online Web Tutorials').click();
        cy.get('#navbtn_tutorials').click();
        cy.get(':nth-child(2) > [href="/css/default.asp"]').click();
        })
})