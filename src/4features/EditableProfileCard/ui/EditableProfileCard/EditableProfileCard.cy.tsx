import { EditableProfileCard } from './EditableProfileCard'

const USER_ID = '1'

describe('<EditableProfileCard />', () => {
  it('renders', () => {
    const options = {
      initialState: {
        user: {
          _mounted: true,
          authData: {
            id: USER_ID,
            username: ''
          }
        }
      }
    }

    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' })
    cy.mount(
        <EditableProfileCard profileId={USER_ID}/>,
        options
    )
  })
})
