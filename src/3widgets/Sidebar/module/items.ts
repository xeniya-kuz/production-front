import { RoutePaths } from '6shared/config/routeConfig/routeConfig'
import { type SVGAttributes, type FunctionComponent } from 'react'
import MainIcon from '6shared/assets/icons/main-20-20.svg'
import AboutIcon from '6shared/assets/icons/about-20-20.svg'
import ProfileIcon from '6shared/assets/icons/profile-20-20.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: FunctionComponent<SVGAttributes<SVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePaths.main,
    text: 'Главная',
    Icon: MainIcon
  },
  {
    path: RoutePaths.about,
    text: 'О сайте',
    Icon: AboutIcon
  },
  {
    path: RoutePaths.profile,
    text: 'Профиль',
    Icon: ProfileIcon
  }]
