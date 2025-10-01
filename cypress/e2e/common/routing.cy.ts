import {
    getRouteArticles,
    getRouteProfile,
} from '../../../src/6shared/const/router'
import { DATA_TEST_ID } from '../../../src/6shared/const/tests'

describe('Routing', () => {
    describe('User is UNauthorized', () => {
        it('Visits main page', () => {
            cy.visit('/')
            cy.getByTestId(DATA_TEST_ID.mainPage).should('exist')
        })
        it('Opening profile page redirects to main page', () => {
            cy.visit(`/${getRouteProfile('1')}`)
            cy.getByTestId(DATA_TEST_ID.mainPage).should('exist')
        })
        it('Visits non-existent route', () => {
            cy.visit('/assa}')
            cy.getByTestId(DATA_TEST_ID.notFoundPage).should('exist')
        })
    })

    describe('User is authorized', () => {
        beforeEach(() => {
            cy.login()
        })

        it('Visits profile page', () => {
            cy.visit(`/${getRouteProfile('1')}`)
            cy.getByTestId(DATA_TEST_ID.profilePage).should('exist')
        })
        it('Visits articles page', () => {
            cy.visit(`/${getRouteArticles()}`)
            cy.getByTestId(DATA_TEST_ID.articlesPage).should('exist')
        })
    })
})
