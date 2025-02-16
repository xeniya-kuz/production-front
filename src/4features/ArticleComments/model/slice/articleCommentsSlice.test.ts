import { createEntityAdapter } from '@reduxjs/toolkit'
import { addArticleComment } from '../services/addArticleComment/addArticleComment'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { type ArticleCommentsSchema } from '../types/ArticleCommentsSchema'
import { articleCommentsReducer } from './articleCommentsSlice'
import { type Comment } from '@/5entities/Comment'
import { type StateSchema } from '@/1app/providers/StoreProvider'
import { commentsMock } from '@/5entities/Comment'

describe('articleCommentsSlice', () => {
  jest.mock('@reduxjs/toolkit')
  const commentsAdapter = jest.mocked(createEntityAdapter<Comment>({
    selectId: (comment: Comment) => comment.id
  }))

  test('fetchCommentsByArticleId pending', async () => {
    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: false,
      error: 'error'
    }

    expect(articleCommentsReducer(
      state as ArticleCommentsSchema,
      fetchCommentsByArticleId.pending
    )).toEqual({
      error: undefined,
      isLoading: true
    })
  })

  test('fetchCommentsByArticleId fulfilled', async () => {
    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: true
    }

    expect(articleCommentsReducer(
      state as ArticleCommentsSchema,
      fetchCommentsByArticleId.fulfilled(commentsMock, '', '')
    )).toEqual({
      isLoading: false,
      entities: { [commentsMock[0].id]: commentsMock[0] },
      ids: [commentsMock[0].id]
    })
  })

  test('fetchCommentsByArticleId rejected', async () => {
    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: true,
      error: undefined
    }

    expect(articleCommentsReducer(
      state as ArticleCommentsSchema,
      fetchCommentsByArticleId.rejected(null, fetchCommentsByArticleId.rejected.type, '', 'error')
    )).toEqual({
      isLoading: false,
      error: 'error'
    })
  })

  test('addArticleComment pending', async () => {
    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: false,
      error: 'error'
    }

    expect(articleCommentsReducer(
      state as ArticleCommentsSchema,
      addArticleComment.pending
    )).toEqual({
      error: undefined,
      isLoading: true
    })
  })

  test('addArticleComment fulfilled', async () => {
    const commentFromState = {
      1: {
        id: '1',
        text: 'Comment 1',
        user: { id: '1', username: 'user1' }
      }
    }
    const commentToAdd = {
      id: '2',
      text: 'Comment 2',
      user: { id: '4', username: 'user4' }
    }

    const globalState: DeepPartial<StateSchema> = {
      user: { authData: { id: '4' } },
      articleDetails: { article: { id: '3' } }
    }

    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: true,
      entities: commentFromState,
      ids: ['1']
    }

    expect(articleCommentsReducer(
      state as ArticleCommentsSchema,
      addArticleComment.fulfilled(commentToAdd, '', commentToAdd.text, { getState: () => globalState, extra: commentsAdapter })
    )).toEqual({
      isLoading: false,
      entities: { ...commentFromState, [commentToAdd.id]: commentToAdd },
      ids: ['1', '2']
    })
  })

  test('addArticleComment rejected', async () => {
    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: true,
      error: undefined
    }

    expect(articleCommentsReducer(
      state as ArticleCommentsSchema,
      addArticleComment.rejected(null, addArticleComment.rejected.type, '', 'error')
    )).toEqual({
      isLoading: false,
      error: 'error'
    })
  })
})
