import { ArticleList, ArticleView } from '@/5entities/Article'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { VStack } from '@/6shared/ui/redesigned/Stack'
import { Text as TextDeprecated, TextSize } from '@/6shared/ui/deprecated/Text'
import { Fragment, type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useArticleRecommendations } from '../api/articleRecommendationsApi'
import styles from './ArticleRecommendations.module.scss'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { toggleFeatures, ToggleFeatures } from '@/6shared/lib/features'
import { Text } from '@/6shared/ui/redesigned/Text'
import { Card } from '@/6shared/ui/redesigned/Card'

interface ArticleRecommendationsProps {
    className?: string
}

export const ArticleRecommendations = memo(function ArticleRecommendations({
    className,
}: ArticleRecommendationsProps): JSX.Element | null {
    const { t } = useTranslation('articles')
    const { isLoading, data: recommendations } = useArticleRecommendations(
        toggleFeatures({ name: 'isAppRedesigned', on: () => 9, off: () => 3 }),
    )

    if (!recommendations) {
        return null
    }

    const text = (
        <ToggleFeatures
            feature="isAppRedesigned"
            // TODO: должен быть h3
            on={<Text title={t('recommendations')} />}
            off={
                <TextDeprecated
                    title={t('recommendations')}
                    size={TextSize.S}
                />
            }
        />
    )

    const Tag = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => Card,
        off: () => Fragment,
    })

    return (
        <Tag
            variant="light"
            padding="24"
        >
            <VStack
                gap="8"
                max
                className={classNames(styles.articleRecommendations, [
                    className,
                ])}
                data-testid={DATA_TEST_ID.articleRecommendationList}
            >
                {text}
                <ArticleList
                    articles={recommendations}
                    isLoading={isLoading}
                    className={styles.list}
                    target="_blank"
                    view={ArticleView.TILE}
                    virtualized={false}
                    direction={'row'}
                />
            </VStack>
        </Tag>
    )
})
