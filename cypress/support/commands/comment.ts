import { DATA_TEST_ID } from '../../../src/6shared/const/tests'

export const addComment = (text: string): void => {
    cy.getByTestId(DATA_TEST_ID.commentFormInput).type(text)
    cy.getByTestId(DATA_TEST_ID.commentFormBtn).click()
}

declare global {
    namespace Cypress {
        interface Chainable {
            addComment: (text: string) => Chainable<void>
        }
    }
}
