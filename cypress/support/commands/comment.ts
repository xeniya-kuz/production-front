import { DATA_TEST_ID } from '../../../src/6shared/const/tests'
import { API } from '../const'

export const addComment = (text: string): void => {
  cy.getByTestId(DATA_TEST_ID.commentFormInput).type(text)
  cy.getByTestId(DATA_TEST_ID.commentFormBtn).click()
}

export const removeComment = (commentId: string): void => {
  cy.request({
    method: 'DELETE',
    url: `${API}/comments/${commentId}`,
    headers: { Authorization: 'asas' }
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      addComment: (text: string) => Chainable<void>
      removeComment: (commentId: string) => Chainable<void>
    }
  }
}
