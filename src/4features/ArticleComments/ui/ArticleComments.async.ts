import { type FC, lazy } from 'react'
import { type AddArticleCommentFormProps } from './ArticleComments'

export const ArticleCommentsAsync = lazy<FC<AddArticleCommentFormProps>>(async () => await import('./ArticleComments'))
