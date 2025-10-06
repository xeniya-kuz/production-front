import { classNames } from '@/6shared/lib/classNames/classNames'
import { type JSX, memo, useCallback } from 'react'
import { Button } from '@/6shared/ui/deprecated/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
    selectArticleDetails,
    selectIsArticleAuthor,
} from '@/5entities/Article'
import { HStack } from '@/6shared/ui/deprecated/Stack'
import { useSelector } from 'react-redux'
import { getRouteArticleEdit, getRouteArticles } from '@/6shared/const/router'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo(function ArticleDetailsPageHeader({
    className,
}: ArticleDetailsPageHeaderProps): JSX.Element {
    const { t } = useTranslation('buttons')
    const navigate = useNavigate()
    const isAuthor = useSelector(selectIsArticleAuthor)
    const article = useSelector(selectArticleDetails)

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles())
    }, [navigate])

    const onEditArticle = useCallback(() => {
        if (article !== undefined) {
            navigate(getRouteArticleEdit(article?.id))
        }
    }, [navigate, article])

    return (
        <HStack
            max
            justify="between"
            className={classNames(className)}
        >
            <Button onClick={onBackToList}>{t('back-to-list')}</Button>
            {isAuthor && <Button onClick={onEditArticle}>{t('edit')}</Button>}
        </HStack>
    )
})
