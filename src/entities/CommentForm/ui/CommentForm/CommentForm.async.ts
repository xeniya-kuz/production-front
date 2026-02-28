import { lazy } from 'react'

export const CommentFormAsync = lazy(async () => await import('./CommentForm'))
