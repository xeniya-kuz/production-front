import { type ArticleView } from '@/5entities/Article'
import { type SVGAttributes, type FC } from 'react'

export interface ViewType {
    view: ArticleView
    icon: FC<SVGAttributes<SVGElement>>
}
