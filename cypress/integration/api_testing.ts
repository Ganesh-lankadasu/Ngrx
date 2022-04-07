

describe('API testing one',()=>{

    it.only('Starting',()=>{

        

        cy.visit('/');
        cy.contains('.container','Enter the form').find('[autocomplete="new-name"]').type('John@gmail.com');
        cy.contains('.container','Enter the form').find('[autocomplete="new-password"]').type('goodboy');

        //cy.contains('List of products and details').should('contain','List of products');

        cy.intercept({
            method:'GET',
            url:'https://dummyjson.com/products'
        }).as('Products')

        cy.contains('Submit').click();

        cy.wait('@Products').then((res)=>{
            expect(res.response.statusCode).to.equal(200);
        })
    
    })

})