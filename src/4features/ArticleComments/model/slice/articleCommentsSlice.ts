import { type StateSchema } from '1app/providers/StoreProvider'
import { type Comment } from '5entities/Comment'
import {
  createEntityAdapter,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'
import { type ArticleCommentsSchema } from '../types/ArticleCommentsSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { addArticleComment } from '../services/addArticleComment/addArticleComment'

const commentsAdapter = createEntityAdapter<Comment>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (comment: Comment) => comment.id
  // Keep the "all IDs" array sorted based on book titles
  // sortComparer: (a, b) => a.title.localeCompare(b.title)
})

export const selectArticleComments = commentsAdapter.getSelectors<StateSchema>((state) => state.articleComments ?? commentsAdapter.getInitialState())

const articleCommentsSlice = createSlice({
  name: 'articleComments',
  initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {
    // // Can pass adapter functions directly as case reducers.  Because we're passing this
    // // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    // bookAdded: booksAdapter.addOne,
    // booksReceived (state, action) {
    // // Or, call them as "mutating" helpers in a case reducer
    //   booksAdapter.setAll(state, action.payload.books)
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false
        commentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(addArticleComment.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(addArticleComment.fulfilled, (state, action: PayloadAction<Comment>) => {
        state.isLoading = false
        commentsAdapter.addOne(state, action.payload)
      })
      .addCase(addArticleComment.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: articleCommentsReducer } = articleCommentsSlice
