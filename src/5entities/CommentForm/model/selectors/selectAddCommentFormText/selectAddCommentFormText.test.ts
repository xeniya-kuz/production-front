import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectAddArticleCommentFormText } from './selectAddCommentFormText'

describe('selectAddArticleCommentFormText', () => {
    test('success', () => {
        const state: DeepPartial<StateSchema> = {
            commentForm: { comment: 'comment' },
        }
        expect(selectAddArticleCommentFormText(state as StateSchema)).toBe(
            'comment',
        )
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectAddArticleCommentFormText(state as StateSchema)).toBe('')
    })
})
