import { ComponentRender } from '@/6shared/lib/tests/ComponentRender'
import AppRouter from './AppRouter'
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from '@/6shared/const/router'
import { screen } from '@testing-library/react'
import { UserRole } from '@/5entities/User'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { profileMock } from '@/5entities/Profile'

describe('app/router/AppRouter', function () {
    test('Page should mount', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAbout(),
        })

        const page = await screen.findByTestId(DATA_TEST_ID.aboutPage)
        expect(page).toBeInTheDocument()
    })

    test('Page not found', async () => {
        ComponentRender(<AppRouter />, {
            route: '/asasasas',
        })

        const page = await screen.findByTestId(DATA_TEST_ID.notFoundPage)
        expect(page).toBeInTheDocument()
    })

    test('Redirect unauthorized user to the main page', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile(profileMock.id ?? '1'),
        })

        const page = await screen.findByTestId(DATA_TEST_ID.mainPage)
        expect(page).toBeInTheDocument()
    })

    test('Access to the private page for an authorized user', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile(profileMock.id ?? '3'),
            initialState: {
                user: {
                    _mounted: true,
                    authData: {},
                },
            },
        })

        const page = await screen.findByTestId(DATA_TEST_ID.profilePage)
        expect(page).toBeInTheDocument()
    })

    test('Access to the admin panel page denied (no role)', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _mounted: true,
                    authData: {},
                },
            },
        })

        const page = await screen.findByTestId(DATA_TEST_ID.forbiddenPage)
        expect(page).toBeInTheDocument()
    })

    test('Access to the admin panel page granted (role exists)', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _mounted: true,
                    authData: { roles: [UserRole.ADMIN] },
                },
            },
        })

        const page = await screen.findByTestId(DATA_TEST_ID.adminPanelPage)
        expect(page).toBeInTheDocument()
    })
})
