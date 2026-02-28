import { type StateSchema } from '@/app/providers/StoreProvider'
import { getJsonSettings } from './jsonSettings'
import { Theme } from '@/shared/const/themes'
import { ArticleView } from '@/entities/Article'

describe('getJsonSettings', () => {
    test('should return jsonSettings from authData', () => {
        const jsonSettings = {
            theme: Theme.DARK,
            isArticlesPageWasOpened: true,
            articlesView: ArticleView.LIST,
        }
        const state: DeepPartial<StateSchema> = {
            user: { authData: { jsonSettings } },
        }
        expect(getJsonSettings(state as StateSchema)).toEqual(jsonSettings)
    })

    test('should return empty object when jsonSettings is not set', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { id: '1', username: 'test' } },
        }
        expect(getJsonSettings(state as StateSchema)).toEqual({})
    })

    test('should return empty object when user is not logged in', () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
        }
        expect(getJsonSettings(state as StateSchema)).toEqual({})
    })
})
