import { USER_LOCALSTORAGE_KEY } from '../../../src/6shared/const/localstorage'
import { type User } from '../../../src/5entities/User'
import { selectByTestId } from 'cypress/helpers/selectByTestId'

export const login = (username: string = 'test', password: string = '123') => {
  cy.log(`Logging in as ${username}`)

  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password
    }
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))
    return body
  })
}

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId))
}
declare global {
  namespace Cypress {
    interface Chainable {
      login: (username?: string, password?: string) => Chainable<User>
      getByTestId: (testId: string) => ReturnType<typeof cy.get>
    }
  }
}
