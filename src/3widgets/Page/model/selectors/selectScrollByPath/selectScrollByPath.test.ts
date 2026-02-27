import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectScrollByPath } from './selectScrollByPath'
import { getRouteArticles } from '@/6shared/const/router'

const SCROLL_POSITION = 350

describe('selectScrollByPath', () => {
    test('should return scroll position for given path', () => {
        const state: DeepPartial<StateSchema> = {
            page: { scroll: { [getRouteArticles()]: SCROLL_POSITION } },
        }
        expect(
            selectScrollByPath(state as StateSchema, getRouteArticles()),
        ).toBe(SCROLL_POSITION)
    })

    test('should return 0 for unknown path', () => {
        const state: DeepPartial<StateSchema> = {
            page: { scroll: { [getRouteArticles()]: SCROLL_POSITION } },
        }
        expect(selectScrollByPath(state as StateSchema, '/unknown')).toBe(0)
    })

    test('should return 0 for empty state', () => {
        const state: DeepPartial<StateSchema> = {
            page: { scroll: {} },
        }
        expect(
            selectScrollByPath(state as StateSchema, getRouteArticles()),
        ).toBe(0)
    })
})
