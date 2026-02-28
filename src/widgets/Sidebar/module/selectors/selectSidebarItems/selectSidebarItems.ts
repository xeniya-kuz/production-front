import { selectUserAuthData } from '@/entities/User'
import { createSelector } from '@reduxjs/toolkit'
import { type SidebarItemType } from '../../types/sidebar'
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg'
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg'
import ArticleIconDeprecated from '@/shared/assets/icons/article-20-20.svg'
import MainIcon from '@/shared/assets/icons/home.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router'
import { toggleFeatures } from '@/shared/lib/features'

export const selectSidebarItems = createSelector(selectUserAuthData, (user) => {
    let sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'translation:Главная',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => MainIcon,
                off: () => MainIconDeprecated,
            }),
        },
        {
            path: getRouteAbout(),
            text: 'about:about-us',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
        },
    ]

    if (user) {
        sidebarItemsList = [
            ...sidebarItemsList,
            {
                path: getRouteProfile(user.id),
                text: 'profile:profile',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),

                isPrivate: true,
            },
            {
                path: getRouteArticles(),
                text: 'articles:articles',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ArticleIcon,
                    off: () => ArticleIconDeprecated,
                }),
                isPrivate: true,
            },
        ]
    }

    return sidebarItemsList
})
