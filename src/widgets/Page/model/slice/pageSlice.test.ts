import { getRouteArticles, getRouteProfile } from '@/shared/const/router'
import { type PageSchema } from '../types/PageSchema'
import { pageActions, pageReducer } from './pageSlice'

const ARTICLES = 100

describe('pageSlice', () => {
    test('setScrollPosition - set position for new path', () => {
        const state: PageSchema = { scroll: {} }
        const position = 200

        expect(
            pageReducer(
                state,
                pageActions.setScrollPosition({
                    path: getRouteArticles(),
                    position,
                }),
            ),
        ).toEqual({ scroll: { [getRouteArticles()]: position } })
    })

    test('setScrollPosition - update existing path', () => {
        const position = 500
        const state: PageSchema = { scroll: { [getRouteArticles()]: ARTICLES } }

        expect(
            pageReducer(
                state,
                pageActions.setScrollPosition({
                    path: getRouteArticles(),
                    position,
                }),
            ),
        ).toEqual({ scroll: { [getRouteArticles()]: position } })
    })

    test('setScrollPosition - multiple paths', () => {
        const position = 300
        const state: PageSchema = { scroll: { [getRouteArticles()]: ARTICLES } }

        expect(
            pageReducer(
                state,
                pageActions.setScrollPosition({
                    path: getRouteProfile('1'),
                    position,
                }),
            ),
        ).toEqual({
            scroll: {
                [getRouteArticles()]: ARTICLES,
                [getRouteProfile('1')]: position,
            },
        })
    })
})
