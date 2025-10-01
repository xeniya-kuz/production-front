import { USER_LOCALSTORAGE_KEY } from '../../../src/6shared/const/localstorage'
import { type User } from '../../../src/5entities/User'
import { selectByTestId } from '../../helpers/selectByTestId'
import { API } from '../const'

export const login = (
    username: string = 'test',
    password: string = '123',
): Cypress.Chainable<User> => {
    return cy
        .request({
            method: 'POST',
            url: `${API}/login`,
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(body),
            )
            return body
        })
}

export const getByTestId = (
    testId: string,
): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(selectByTestId(testId))
}
declare global {
    namespace Cypress {
        interface Chainable {
            login: (username?: string, password?: string) => Chainable<User>
            getByTestId: (
                testId: string,
            ) => Cypress.Chainable<JQuery<HTMLElement>>
        }
    }
}
