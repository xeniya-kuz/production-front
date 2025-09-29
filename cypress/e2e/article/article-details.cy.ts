import { DATA_TEST_ID } from '../../../src/6shared/const/tests'
import { getRouteArticleDetails } from '../../../src/6shared/const/router'

let currentArticleId = ''
const commentId = ''

describe('User visits article details page', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle()
      .then(article => {
        currentArticleId = article.id
        cy.visit(getRouteArticleDetails(currentArticleId))
      })
  })
  afterEach(() => {
    cy.removeArticle(currentArticleId)
  })

  it('Sees the article content', () => {
    cy.getByTestId(DATA_TEST_ID.articleDetails).should('exist')
  })
  it('Sees recommendation list', () => {
    cy.getByTestId(DATA_TEST_ID.articleRecommendationList).should('exist')
  })
  it('Sends a comment', () => {
    cy.getByTestId(DATA_TEST_ID.articleDetails).should('exist')
    cy.getByTestId(DATA_TEST_ID.commentForm).scrollIntoView()
    cy.addComment('test')// .then((comment) => { commentId = comment.id })
    cy.getByTestId(DATA_TEST_ID.commentCard).should('have.length', 1)
    // cy.removeComment(commentId)
  })
})
