export const ArticleBlockType = {
    TEXT: 'TEXT',
    CODE: 'CODE',
    IMAGE: 'IMAGE',
} as const
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ArticleBlockType =
    (typeof ArticleBlockType)[keyof typeof ArticleBlockType]

export const ArticleType = {
    ALL: 'All',
    IT: 'IT',
    SCIENCE: 'SCIENCE',
    ECONOMICS: 'ECONOMICS',
} as const
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ArticleType = (typeof ArticleType)[keyof typeof ArticleType]

export const ArticleView = {
    LIST: 'list',
    TILE: 'tile',
} as const
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ArticleView = (typeof ArticleView)[keyof typeof ArticleView]

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export const DEFAULT_ARTICLE_VIEW: ArticleView = ArticleView.TILE
