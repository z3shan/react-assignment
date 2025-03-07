describe('React App', () => {
  it('should visit the homepage', () => {
    cy.visit('/')
    cy.contains('NY Times Most Popular Articles').should('be.visible')
  })
})
