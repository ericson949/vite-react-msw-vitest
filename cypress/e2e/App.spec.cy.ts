describe("main application", function(){
    it("visits the app", function (){
        cy.visit("http://localhost:3000/");
        cy.get('h2[data-test="heading"]').contains('Bookish')
    })
})