import { DATA_TEST_ID } from '../../../src/6shared/const/tests'

export const setRating = (
    rating: number = 5,
    text: string = 'feedback',
): void => {
    cy.getByTestId(DATA_TEST_ID.starRating + rating).click()
    cy.getByTestId(DATA_TEST_ID.ratingCardText).type(text)
    cy.getByTestId(DATA_TEST_ID.ratingCardSend).click()
}

declare global {
    namespace Cypress {
        interface Chainable {
            setRating: (rating: number, text: string) => Chainable<void>
        }
    }
}
