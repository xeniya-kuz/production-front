import { profileMock } from '../../../src/5entities/Profile/model/const/mocks'
import { DATA_TEST_ID } from '../../../src/6shared/const/tests'
import { API } from '../const'

export const updateProfile = (firstname: string, lastname: string): void => {
  cy.getByTestId(DATA_TEST_ID.editableProfileCardHeaderEditBtn).click()
  cy.getByTestId(DATA_TEST_ID.profileCardFirstname).clear().type(firstname)
  cy.getByTestId(DATA_TEST_ID.profileCardLastname).clear().type(lastname)
  cy.getByTestId(DATA_TEST_ID.editableProfileCardHeaderSaveBtn).click()
}

export const resetProfile = (profileId: string): void => {
  cy.request({
    method: 'PUT',
    url: `${API}/profile/${profileId}`,
    headers: { Authorization: 'asas' },
    body: profileMock
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile: (firstname: string, lastname: string) => Chainable<void>
      resetProfile: (profileId: string) => Chainable<void>
    }
  }
}
