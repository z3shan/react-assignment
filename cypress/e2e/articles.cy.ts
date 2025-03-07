// Test Suite for NY Times Articles App

describe('NY Times Most Popular Articles App', () => {
    const API_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json';

    beforeEach(() => {
        cy.intercept('GET', `${API_URL}*`, { fixture: 'articles.json' }).as('getArticles');
        cy.visit('/');
    });

    it('should display loading text initially', () => {
        cy.contains('Loading articles...').should('be.visible');
    });

    it('should display articles list after fetching', () => {
        cy.wait('@getArticles');
        cy.get('.container').contains('NY Times Most Popular Articles');
        cy.get('.cursor-pointer').should('have.length.greaterThan', 0);
    });

    it('should display article details on click', () => {
        cy.wait('@getArticles');
        cy.get('.cursor-pointer').first().click();
        cy.get('.text-xl.font-semibold.mb-2').should('be.visible');
        cy.get('.cursor-pointer').first().should('have.class', 'border-blue-500');
    });

    it('should show error message if API request fails', () => {
        cy.intercept('GET', `${API_URL}*`, { statusCode: 500 }).as('getArticlesFail');
        cy.visit('/');
        cy.wait('@getArticlesFail');
        cy.contains('Failed to fetch articles. Please try again later.').should('be.visible');
    });

    it('should display no articles message when list is empty', () => {
        cy.intercept('GET', `${API_URL}*`, { results: [] }).as('getEmptyArticles');
        cy.visit('/');
        cy.wait('@getEmptyArticles');
        cy.contains('No articles available').should('be.visible');
    });
});
