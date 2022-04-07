

describe('Login page',()=>{
    it('first test',()=>{
        cy.visit('/');
        cy.url().should('include','/login');
        cy.get('[type="text"]').type('suri');
    })

    it('google test',()=>{
        cy.visit('https://google.com');
        cy.get('.gLFyf',{timeout:20000}).type('w3 schools {enter}');
        cy.contains('W3Schools Online Web Tutorials').click();
        cy.get('#navbtn_tutorials').click();
        cy.get(':nth-child(2) > [href="/css/default.asp"]').click();
        })
        
    it('using then and wrap',()=>{
        cy.visit('/');
        //cy.get('.container > :nth-child(2)').should('contain','Enter username');
        // cy.contains('.container','Enter the form').find('[for="Username"]').should('contain','Enter username');
        // cy.contains('.container','Enter the form').find('[for="Password"]').should('contain','Enter Password');

        // cy.contains('.container','Enter the form').then((username)=>{
        //     const User = username.find('[for="Username"]').text();
        //     const Pass = username.find('[for="Password"]').text();
        //     expect(User).to.equal('Enter username');
        //     expect(Pass).to.equal('Enter Password');
        // })

        // cy.contains('.container','Enter the form').then((username)=>{
        //     cy.wrap(username).find('[for="Username"]').should('contain','Enter username');
        //     cy.wrap(username).find('[for="Password"]').should('contain','Enter Password');
        // })

        // cy.get('[for="Username"]').should('contain','Enter username');
        // cy.get('[for="Password"]').should('contain','Enter Password');

        // cy.get('[for="Username"]').then((username)=>{
        //     expect(username.text()).to.equal('Enter username');
        // })

        // cy.get('[for="Password"]').then((username)=>{
        //     cy.wrap(username).should('contain','Enter Password');
        // })


    })

    it('Radio buttons',()=>{
        cy.visit('/');
        // cy.contains('.container','Enter the form').find('[type="radio"]').first().check().should('to.be.checked');
        // cy.contains('.container','Enter the form').find('[type="radio"]').eq(1).check().should('to.be.checked');

        cy.contains('.container','Enter the form').find('[type="radio"]').then((checked)=>{
            cy.wrap(checked).first().check().should('to.be.checked');
            cy.wrap(checked).eq(1).check().should('to.be.checked');
        })
    })

    it('Check boxes',()=>{
        cy.visit('/')
        cy.get('[type="checkbox"]').eq(0).uncheck();
        cy.get('[type="checkbox"]').eq(1).check();
    })

    it.only('Tables',()=>{
        cy.visit('/');
        //cy.contains('Tables info').find('tr').eq(2).find('td').eq(0).should('contain','Centro comercial Moctezuma')
        //cy.get('table').find('tr').eq(2).find('td').eq(0).should('contain','Centro comercial Moctezuma');
        cy.get('table tr').eq(2).find('td').eq(0).should('contain','Centro comercial Moctezuma');
    })

})