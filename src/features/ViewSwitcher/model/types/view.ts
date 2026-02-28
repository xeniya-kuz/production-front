import { type ArticleView } from '@/entities/Article'
import { type SVGAttributes, type FC } from 'react'

export interface ViewType {
    view: ArticleView
    icon: FC<SVGAttributes<SVGElement>>
}
