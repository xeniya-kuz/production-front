import { type FC, lazy } from 'react'
import { type AddArticleCommentFormProps } from './AddCommentForm'

export const AddArticleCommentFormAsync = lazy<FC<AddArticleCommentFormProps>>(async () => await import('./AddCommentForm'))
