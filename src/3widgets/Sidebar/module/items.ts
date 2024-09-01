import { routePaths } from '6shared/config/routeConfig/routeConfig'
import { type SVGAttributes, type FunctionComponent } from 'react'
import MainIcon from '6shared/assets/icons/main-20-20.svg'
import AboutIcon from '6shared/assets/icons/about-20-20.svg'
import ProfileIcon from '6shared/assets/icons/profile-20-20.svg'
import ArticleIcon from '6shared/assets/icons/article-20-20.svg'
export interface SidebarItemType {
  path: string
  text: string
  Icon: FunctionComponent<SVGAttributes<SVGElement>>
  isPrivate?: boolean
}

export const sidebarItemList: SidebarItemType[] = [
  {
    path: routePaths.main,
    text: 'translation:Главная',
    Icon: MainIcon
  },
  {
    path: routePaths.about,
    text: 'about:about-us',
    Icon: AboutIcon
  },
  {
    path: routePaths.profile,
    text: 'profile:profile',
    Icon: ProfileIcon,
    isPrivate: true
  },
  {
    path: routePaths.articles,
    text: 'articles:articles',
    Icon: ArticleIcon,
    isPrivate: true
  }
]
