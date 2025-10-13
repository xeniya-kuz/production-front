import { Page } from '@/3widgets/Page'
import { ArticleComments } from '@/4features/ArticleComments'
import { ArticleRating } from '@/4features/ArticleRating'
import { ArticleRecommendations } from '@/4features/ArticleRecommendations'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/6shared/lib/features'
import { VStack } from '@/6shared/ui/redesigned/Stack'
import { type FC, type JSX, memo, type PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import styles from './ArticleDetailsPage.module.scss'
import { StickyContentLayout } from '@/6shared/layouts/StickyContentLayout'
import { ArticleDetailsContainer } from '../ArticleDetailsContainer/ArticleDetailsContainer'
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer'
import { ArticleDetails } from '@/5entities/Article'

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

    const Wrapper: FC<PropsWithChildren> = ({ children }) => (
        <Page className={classNames(styles.articleDetailsPage, [className])}>
            <VStack
                gap="16"
                max
            >
                {children}
            </VStack>
        </Page>
    )

    const Deprecated: FC = () => (
        <Wrapper>
            <ArticleDetailsPageHeader />
            {content}
        </Wrapper>
    )

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    right={<AdditionalInfoContainer />}
                    content={<Wrapper>{content}</Wrapper>}
                />
            }
            off={<Deprecated />}
        />
    )
}

export default memo(ArticleDetailsPage)
