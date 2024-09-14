import { type User } from '5entities/User'

export const enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  title: string
  src: string
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock

export const enum ArticleType {
  ALL = 'All',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface Article {
  id: string
  user: User
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}

export const enum ArticleView {
  LIST = 'list',
  TILE = 'tile',
}

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt'
}
