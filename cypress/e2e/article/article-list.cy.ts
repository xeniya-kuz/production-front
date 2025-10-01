import { DATA_TEST_ID } from '../../../src/6shared/const/tests'
import { getRouteArticles } from '../../../src/6shared/const/router'

describe('User visits articles page', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit(getRouteArticles())
        })
    })

    it('Page mounted', () => {
        cy.getByTestId(DATA_TEST_ID.articlesPage).should('exist')
    })
    it('Articles loaded successfully', () => {
        cy.getByTestId(DATA_TEST_ID.articleList).should('exist')
        cy.getByTestId(DATA_TEST_ID.articleListItem).should(
            'have.length.greaterThan',
            3,
        )
    })
    it.skip('Example of a skipped test', () => {
        cy.getByTestId(DATA_TEST_ID.articleList).should('exist')
        cy.getByTestId(DATA_TEST_ID.articleListItem).should(
            'have.length.greaterThan',
            3,
        )
    })
    it('На стабах (фикстурах)', () => {
        // если запускать проект через webpack, то можно обойтись без _expand
        cy.intercept('GET', '**/articles?_expand*', {
            fixture: 'article-list.json',
        })
        // TODO: разобраться в автоматизированном сохранении и чтении фикстур
        // cy.intercept('GET', '**/articles?_expand*', (req) => {
        //   console.log('req', req)
        //   return req
        // })
        cy.getByTestId(DATA_TEST_ID.articleList).should('exist')
        cy.getByTestId(DATA_TEST_ID.articleListItem).should(
            'have.length.greaterThan',
            3,
        )
    })
})

// TODO: search and sort
