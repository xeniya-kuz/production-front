import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './EditArticle.module.scss'
import { type JSX, memo } from 'react'

interface EditArticleProps {
    className?: string
}

export const EditArticle = memo(function EditArticle({
    className,
}: EditArticleProps): JSX.Element {
    return (
        <div className={classNames(styles.editarticle, [className])}>
            EditArticle
        </div>
    )
})
