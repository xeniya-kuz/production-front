import { createEntityAdapter } from '@reduxjs/toolkit'
import { addArticleComment } from '../services/addArticleComment/addArticleComment'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { type Comment } from '5entities/Comment'
import { commentsMock } from '6shared/const/mocks/comment'

describe('articleDetailsCommentsSlice', () => {
  jest.mock('@reduxjs/toolkit')
  const mockedCreateEntityAdapter = jest.mocked(createEntityAdapter<Comment>({
    selectId: (comment: Comment) => comment.id
  }))
  const commentsAdapter = mockedCreateEntityAdapter

  test('fetchCommentsByArticleId pending', async () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: 'error'
    }

    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentsSchema,
      fetchCommentsByArticleId.pending
    )).toEqual({
      error: undefined,
      isLoading: true
    })
  })

  test('fetchCommentsByArticleId fulfilled', async () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true
    }

    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentsSchema,
      fetchCommentsByArticleId.fulfilled(commentsMock, '', '')
    )).toEqual({
      isLoading: false,
      entities: { [commentsMock[0].id]: commentsMock[0] },
      ids: [commentsMock[0].id]
    })
  })

  test('fetchCommentsByArticleId rejected', async () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
      error: undefined
    }

    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentsSchema,
      fetchCommentsByArticleId.rejected(null, fetchCommentsByArticleId.rejected.type, '', 'error')
    )).toEqual({
      isLoading: false,
      error: 'error'
    })
  })

  test('addArticleComment pending', async () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: 'error'
    }

    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentsSchema,
      addArticleComment.pending
    )).toEqual({
      error: undefined,
      isLoading: true
    })
  })

  // test('addArticleComment fulfilled', async () => {
  //   const commentToAdd = { id: '2', text: 'Comment 2', user: { id: '2', username: 'user2' } }
  //   const commentFromState = { 1: { id: '1', text: 'Comment 1', user: { id: '1', username: 'user1' } } }

  //   const state: DeepPartial<ArticleDetailsCommentsSchema> = {
  //     isLoading: true,
  //     entities: commentFromState
  //   }

  //   expect(articleDetailsCommentsReducer(
  //     state as ArticleDetailsCommentsSchema,
  //     addArticleComment.fulfilled(commentToAdd, '', '', commentsAdapter)
  //   )).toEqual({
  //     isLoading: false,
  //     entities: { ...commentFromState, [commentToAdd.id]: commentToAdd }
  //   })
  // })

  test('addArticleComment rejected', async () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
      error: undefined
    }

    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentsSchema,
      addArticleComment.rejected(null, addArticleComment.rejected.type, '', 'error')
    )).toEqual({
      isLoading: false,
      error: 'error'
    })
  })
})
