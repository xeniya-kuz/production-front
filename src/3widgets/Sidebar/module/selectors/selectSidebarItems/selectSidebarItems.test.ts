import { type StateSchema } from '@/1app/providers/StoreProvider'
import { userMock } from '@/5entities/User'
import { selectSidebarItems } from './selectSidebarItems'
import { getRouteProfile } from '@/6shared/const/router'

describe('selectSidebarItems', () => {
    test('should return 2 items when user is not logged in', () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
        }
        const items = selectSidebarItems(state as StateSchema)
        expect(items).toHaveLength(2)
    })

    test('should return 4 items when user is logged in', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: userMock },
        }
        const items = selectSidebarItems(state as StateSchema)
        expect(items).toHaveLength(4)
    })

    test('should include private items for logged in user', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: userMock },
        }
        const items = selectSidebarItems(state as StateSchema)
        const privateItems = items.filter((item) => item.isPrivate)
        expect(privateItems).toHaveLength(2)
    })

    test('should not include private items for guest user', () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
        }
        const items = selectSidebarItems(state as StateSchema)
        const privateItems = items.filter((item) => item.isPrivate)
        expect(privateItems).toHaveLength(0)
    })

    test('should include profile route with user id', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: userMock },
        }
        const items = selectSidebarItems(state as StateSchema)
        expect(
            items.some((item) => item.path === getRouteProfile(userMock.id)),
        ).toBe(true)
    })
})
