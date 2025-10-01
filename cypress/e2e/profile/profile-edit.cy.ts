import { profileMock } from '../../../src/5entities/Profile/model/const/mocks'
import { getRouteProfile } from '../../../src/6shared/const/router'
import { DATA_TEST_ID } from '../../../src/6shared/const/tests'

let profileId = ''

describe('User visits profile page', () => {
    beforeEach(() => {
        cy.login().then((user) => {
            profileId = user.id
            cy.visit(getRouteProfile(profileId))
        })
    })
    afterEach(() => {
        cy.resetProfile(profileId)
    })

    it('The profile is loading successfully', () => {
        cy.getByTestId(DATA_TEST_ID.profileCardFirstname).should(
            'have.value',
            profileMock.firstname,
        )
    })
    it('And edits it', () => {
        const newName = 'new name'
        const newLastname = 'new lastname'
        cy.updateProfile(newName, newLastname)
        // проверка инпутов делается неподсредственно в тесте
        cy.getByTestId(DATA_TEST_ID.profileCardFirstname).should(
            'have.value',
            newName,
        )
        cy.getByTestId(DATA_TEST_ID.profileCardLastname).should(
            'have.value',
            newLastname,
        )
    })
})
