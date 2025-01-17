import { selectArticleDetails } from '@/5entities/Article'
import { selectUserAuthData } from '@/5entities/User'
import { createSelector } from '@reduxjs/toolkit'

export const selectIsArticleAuthor = createSelector(
  selectUserAuthData,
  selectArticleDetails,
  (user, article) => {
    if (user === undefined || article === undefined) {
      return false
    }

    return article.user.id === user.id
  })
