import { type StateSchema } from '@/app/providers/StoreProvider'
import { selectIsArticleAuthor } from './selectIsArticleAuthor'
import { articleMock } from '../../const/mocks'
import { userMock } from '@/entities/User'

describe('selectIsArticleAuthor', () => {
    test('should return true when user is article author', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: userMock },
            articleDetails: { article: articleMock },
        }
        // articleMock.user === userMock, поэтому ids совпадают
        expect(selectIsArticleAuthor(state as StateSchema)).toBe(true)
    })

    test('should return false when user is not article author', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { ...userMock, id: 'other-id' } },
            articleDetails: { article: articleMock },
        }
        expect(selectIsArticleAuthor(state as StateSchema)).toBe(false)
    })

    test('should return false when user is not logged in', () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
            articleDetails: { article: articleMock },
        }
        expect(selectIsArticleAuthor(state as StateSchema)).toBe(false)
    })

    test('should return false when article is not loaded', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: userMock },
            articleDetails: {},
        }
        expect(selectIsArticleAuthor(state as StateSchema)).toBe(false)
    })

    test('should return false with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectIsArticleAuthor(state as StateSchema)).toBe(false)
    })
})
