import { Page } from '@/3widgets/Page'
import { ArticleComments } from '@/4features/ArticleComments'
import { ArticleRecommendations } from '@/4features/ArticleRecommendations'
import { ArticleDetails } from '@/5entities/Article'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { VStack } from '@/6shared/ui/deprecated/Stack'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import styles from './ArticleDetailsPage.module.scss'
import { ArticleRating } from '@/4features/ArticleRating'
import { ToggleFeatures } from '@/6shared/lib/features'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({
    className,
}: ArticleDetailsPageProps): JSX.Element => {
    const { t } = useTranslation()
    const { articleId } = useParams<{ articleId: string }>()

    if (articleId === undefined) {
        return (
            <Page
                className={classNames(styles.articleDetailsPage, [className])}
            >
                {t('article-not-found')}
            </Page>
        )
    }

    // TODO: сделать правила в линте, чтобы нельзя было использовать тела в on и off либо подправить функцию
    // const isArticleRatingEnabled = toggleFeatures<JSX.Element>({
    //     name: 'isArticleRatingEnabled',
    //     on: () => <ArticleRating articleId={articleId} />,
    //     off: () => <></>,
    // })

    return (
        <Page className={classNames(styles.articleDetailsPage, [className])}>
            <VStack
                gap="16"
                max
            >
                <ArticleDetailsPageHeader />
                <ArticleDetails articleId={articleId} />
                <ToggleFeatures
                    feature="isArticleRatingEnabled"
                    on={<ArticleRating articleId={articleId} />}
                    off={<></>}
                />
                <ArticleRecommendations />
                <ArticleComments articleId={articleId} />
            </VStack>
        </Page>
    )
}

export default memo(ArticleDetailsPage)
