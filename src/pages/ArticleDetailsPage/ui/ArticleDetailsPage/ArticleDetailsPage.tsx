import { Page } from '@/widgets/Page'
import { ArticleComments } from '@/features/ArticleComments'
import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecommendations } from '@/features/ArticleRecommendations'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { type FC, type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import styles from './ArticleDetailsPage.module.scss'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { ArticleDetailsContainer } from '../ArticleDetailsContainer/ArticleDetailsContainer'
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer'
import { ArticleDetails } from '@/entities/Article'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({
    className,
}: ArticleDetailsPageProps): JSX.Element => {
    const { t } = useTranslation()
    const { articleId } = useParams<{ articleId: string }>()

    if (!articleId) {
        return (
            <Page
                className={classNames(styles.articleDetailsPage, [className])}
            >
                {t('article-not-found')}
            </Page>
        )
    }

    const content = (
        <>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ArticleDetailsContainer articleId={articleId} />}
                off={<ArticleDetails articleId={articleId} />}
            />
            <ArticleRating articleId={articleId} />
            <ArticleRecommendations />
            <ArticleComments articleId={articleId} />
        </>
    )

    const Deprecated: FC = () => (
        <Page className={classNames(styles.articleDetailsPage, [className])}>
            <VStack
                gap="16"
                max
            >
                <ArticleDetailsPageHeader />
                {content}
            </VStack>
        </Page>
    )

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    right={<AdditionalInfoContainer />}
                    content={
                        <Page
                            className={classNames(styles.articleDetailsPage, [
                                className,
                                styles.articleDetailsPageRedesigned,
                            ])}
                        >
                            <VStack
                                gap="16"
                                max
                            >
                                {content}
                            </VStack>
                        </Page>
                    }
                />
            }
            off={<Deprecated />}
        />
    )
}

export default memo(ArticleDetailsPage)
