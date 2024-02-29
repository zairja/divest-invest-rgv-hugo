describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('opens the index page', () => {
    cy.get('h2').contains('Who we are')
  })


  it('navigates to the origins page', () => {
    cy.get('a[href="/origins"]').eq(0).click();
    cy.url().should("include", "/origins")
    cy.get('h1').contains(/origins/i)
  })

  it('navigates to the blog page', () => {
    cy.get('a[href="/post"]').eq(0).click();
    cy.url().should("include", "/post")
    cy.get('h1').contains(/Latest Stories/i)
  })
})

describe('validate blog', () => {
  it('should have 1 blog post by default', () => {
    cy.visit('/post')
    cy.get('ul#blog-list li').should('have.length', 1);
  })
})