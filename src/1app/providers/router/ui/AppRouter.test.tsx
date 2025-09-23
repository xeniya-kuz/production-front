import { ComponentRender } from '@/6shared/lib/tests/ComponentRender'
import AppRouter from './AppRouter'
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/6shared/const/router'
import { screen } from '@testing-library/react'
import { UserRole } from '@/5entities/User'

describe('app/router/AppRouter', function () {
  test('Page should mount', async () => {
    ComponentRender(<AppRouter/>, {
      route: getRouteAbout()
    })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('Page not found', async () => {
    ComponentRender(<AppRouter/>, {
      route: '/asasasas'
    })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('Redirect unauthorized user to the main page', async () => {
    ComponentRender(<AppRouter/>, {
      route: getRouteProfile('1')
    })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('Access to the private page for an authorized user', async () => {
    ComponentRender(<AppRouter/>, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _mounted: true,
          authData: {}
        }
      }
    })

    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('Access to the admin panel page denied (no role)', async () => {
    ComponentRender(<AppRouter/>, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _mounted: true,
          authData: {}
        }
      }
    })

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Access to the admin panel page granted (role exists)', async () => {
    ComponentRender(<AppRouter/>, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _mounted: true,
          authData: { roles: [UserRole.ADMIN] }
        }
      }
    })

    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })
})
