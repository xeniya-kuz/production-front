import { EditArticleButton } from '@/4features/EditArticleButton'
import { getRouteArticles } from '@/6shared/const/router'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { Button } from '@/6shared/ui/deprecated/Button'
import { HStack } from '@/6shared/ui/redesigned/Stack'
import { type JSX, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo(function ArticleDetailsPageHeader({
    className,
}: ArticleDetailsPageHeaderProps): JSX.Element {
    const { t } = useTranslation('buttons')
    const navigate = useNavigate()

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles())
    }, [navigate])

    return (
        <HStack
            max
            justify="between"
            className={classNames(className)}
        >
            <Button onClick={onBackToList}>{t('back-to-list')}</Button>
            <EditArticleButton />
        </HStack>
    )
})
