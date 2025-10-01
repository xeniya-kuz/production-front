import { DATA_TEST_ID } from '../../../src/6shared/const/tests'
import { getRouteArticleDetails } from '../../../src/6shared/const/router'

let currentArticleId = ''

describe('User visits article details page', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then((article) => {
            currentArticleId = article.id
            cy.visit(getRouteArticleDetails(currentArticleId))
        })
    })
    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })

    it('Sees the article content', () => {
        cy.getByTestId(DATA_TEST_ID.article).should('exist')
    })
    it('Sees recommendation list', () => {
        cy.getByTestId(DATA_TEST_ID.articleRecommendationList).should('exist')
    })
    // комментарии удаляются вместе со статьей
    it('Sends a comment', () => {
        cy.getByTestId(DATA_TEST_ID.article).should('exist')
        cy.getByTestId(DATA_TEST_ID.commentForm).scrollIntoView()
        cy.addComment('555')
        cy.getByTestId(DATA_TEST_ID.commentCard).should('have.length', 1)
    })
    it('Rates the article (пример со стабом на фикстурах)', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json',
        })
        cy.getByTestId(DATA_TEST_ID.article).should('exist')
        cy.getByTestId(DATA_TEST_ID.ratingCard).scrollIntoView()
        cy.setRating(5, 'well done')
        cy.get('[data-selected=true]').should('have.length', 5)
    })
})
