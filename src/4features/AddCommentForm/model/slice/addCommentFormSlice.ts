import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
  error: undefined,
  isLoading: false,
  comment: undefined
}

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload
    }
  }
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
