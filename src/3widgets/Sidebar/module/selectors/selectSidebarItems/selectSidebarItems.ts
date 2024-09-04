import { selectUserAuthData } from '5entities/User'
import { createSelector } from '@reduxjs/toolkit'
import { type SidebarItemType } from '../../types/sidebar'
import { routePaths } from '6shared/config/routeConfig/routeConfig'
import MainIcon from '6shared/assets/icons/main-20-20.svg'
import AboutIcon from '6shared/assets/icons/about-20-20.svg'
import ProfileIcon from '6shared/assets/icons/profile-20-20.svg'
import ArticleIcon from '6shared/assets/icons/article-20-20.svg'

export const selectSidebarItems = createSelector(selectUserAuthData, (user) => {
  let sidebarItemsList: SidebarItemType[] = [
    {
      path: routePaths.main,
      text: 'translation:Главная',
      Icon: MainIcon
    },
    {
      path: routePaths.about,
      text: 'about:about-us',
      Icon: AboutIcon
    }
  ]

  if (user !== undefined) {
    sidebarItemsList = [...sidebarItemsList, {
      path: `${routePaths.profile}/${user.id}`,
      text: 'profile:profile',
      Icon: ProfileIcon,
      isPrivate: true
    },
    {
      path: routePaths.articles,
      text: 'articles:articles',
      Icon: ArticleIcon,
      isPrivate: true
    }]
  }

  return sidebarItemsList
})
