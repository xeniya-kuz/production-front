import { type StateSchema } from '@/app/providers/StoreProvider'
import { selectScroll } from './selectScroll'
import { getRouteArticles } from '@/shared/const/router'

const SCROLL_POSITION = 200

describe('selectScroll', () => {
    test('should return scroll object', () => {
        const state: DeepPartial<StateSchema> = {
            page: { scroll: { [getRouteArticles()]: SCROLL_POSITION } },
        }
        expect(selectScroll(state as StateSchema)).toEqual({
            [getRouteArticles()]: SCROLL_POSITION,
        })
    })

    test('should return empty object when scroll is empty', () => {
        const state: DeepPartial<StateSchema> = {
            page: { scroll: {} },
        }
        expect(selectScroll(state as StateSchema)).toEqual({})
    })
})
