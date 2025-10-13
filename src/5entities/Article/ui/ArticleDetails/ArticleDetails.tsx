import { classNames } from '@/6shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useInitialEffect } from '@/6shared/lib/hooks'
import { type JSX, memo } from 'react'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { Article } from './Article'
import { SketelonArticleDeprecated } from './SketelonArticleDeprecated'
import { Error as ErrorDeprecated } from '@/6shared/ui/deprecated/Error'
import { selectArticleDetailsIsLoading } from '../../model/selectors/selectArticleDetailsIsLoading/selectArticleDetailsIsLoading'
import { selectArticleDetailsError } from '../../model/selectors/selectArticleDetailsError/selectArticleDetailsError'
import { selectArticleDetails } from '../../model/selectors/selectArticleDetails/selectArticleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { VStack } from '@/6shared/ui/redesigned/Stack'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { ToggleFeatures } from '@/6shared/lib/features'
import { SketelonArticle } from './SketelonArticle'
import { Error } from '@/6shared/ui/redesigned/Error'

interface ArticleDetailsProps {
    className?: string
    articleId: string
}

const initialReducer: ReducerList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(function ArticleDetails({
    className,
    articleId,
}: ArticleDetailsProps): JSX.Element {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(selectArticleDetailsIsLoading)

    const error = useSelector(selectArticleDetailsError)
    const article = useSelector(selectArticleDetails)

    useInitialEffect(() => {
        void dispatch(fetchArticleById(articleId))
    })

    let content

    if (isLoading) {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<SketelonArticle />}
                off={<SketelonArticleDeprecated />}
            />
        )
    }

    if (error) {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Error
                        title={error}
                        text=""
                    />
                }
                off={
                    <ErrorDeprecated
                        title={error}
                        text=""
                    />
                }
            />
        )
    }

    if (article) {
        content = <Article article={article} />
    }

    return (
        <DynamicModuleLoader reducers={initialReducer}>
            <VStack
                gap="16"
                max
                className={classNames(styles.articleDetails, [className])}
                data-testid={DATA_TEST_ID.articleDetails}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    )
})
