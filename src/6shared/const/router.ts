export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article-details',
    ARTICLE_CREATE = 'article-create',
    ARTICLE_EDIT = 'article-edit',
    ADMIN_PANEL = 'admin-panel',
    FORBIDDEN = 'forbidden',
    SETTINGS = 'settings',
    // last
    NOT_FOUND = 'not-found',
}

export const getRouteMain = (): string => '/'
export const getRouteAbout = (): string => '/about'
export const getRouteProfile = (id: string): string => `/profile/${id}`
export const getRouteArticles = (): string => '/articles'
export const getRouteArticleDetails = (id: string): string => `/articles/${id}`
export const getRouteArticleCreate = (): string => '/articles/new'
export const getRouteArticleEdit = (id: string): string =>
    `/articles/${id}/edit`
export const getRouteAdmin = (): string => '/admin'
export const getRouteForbidden = (): string => '/forbidden'
export const getRouteSettings = (): string => '/settings'

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteProfile(':id')]: AppRoutes.PROFILE,
    [getRouteArticles()]: AppRoutes.ARTICLES,
    [getRouteArticleDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
    [getRouteArticleCreate()]: AppRoutes.ARTICLE_CREATE,
    [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
    [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
}
