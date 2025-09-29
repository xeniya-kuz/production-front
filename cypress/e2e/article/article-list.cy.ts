import { DATA_TEST_ID } from '../../../src/6shared/const/tests'
import { getRouteArticles } from '../../../src/6shared/const/router'

describe('User visits articles page', () => {
  beforeEach(() => {
    cy.login()
      .then(user => {
        cy.visit(getRouteArticles())
      })
  })

  it('Page mounted', () => {
    cy.getByTestId(DATA_TEST_ID.articlesPage).should('exist')
  })
  it('Articles loaded successfully', () => {
    cy.getByTestId(DATA_TEST_ID.articleListItem).should('exist')
    cy.getByTestId(DATA_TEST_ID.articleListItem).should('have.length.greaterThan', 3)
  })
})

// TODO: search and sort
