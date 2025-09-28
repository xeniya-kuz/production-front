import { DATA_TEST_ID } from '@/6shared/const/tests'

export const updateProfile = (firstname: string, lastname: string): void => {
  cy.getByTestId(DATA_TEST_ID.editableProfileCardHeaderEditBtn).click()
  cy.getByTestId(DATA_TEST_ID.profileCardFirstname).clear().type(firstname)
  cy.getByTestId(DATA_TEST_ID.profileCardLastname).clear().type(lastname)
  cy.getByTestId(DATA_TEST_ID.editableProfileCardHeaderSaveBtn).click()
}

export const resetProfile = (profileId: string): void => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asas' },
    body: {
      id: '3',
      firstname: 'test',
      lastname: 'user',
      age: 465,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'test user',
      avatar: ''
    }
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
