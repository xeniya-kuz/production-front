import { type User } from '@/5entities/User'
import { type ArticleBlockType, type ArticleType } from '../const/article'

export interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}

// TODO: после локи вернуться сюда и заменить ArticleBlockType обратно на конст енам (IconColors тоже)
export interface ArticleCodeBlock extends ArticleBlockBase {
    type: 'CODE'
    code: string
}
export interface ArticleImageBlock extends ArticleBlockBase {
    type: 'IMAGE'
    title: string
    src: string
}
export interface ArticleTextBlock extends ArticleBlockBase {
    type: 'TEXT'
    title?: string
    paragraphs: string[]
}

export type ArticleBlock =
    | ArticleTextBlock
    | ArticleImageBlock
    | ArticleCodeBlock

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
