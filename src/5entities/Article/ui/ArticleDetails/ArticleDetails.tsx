import { fetchArticleById } from '5entities/Article/model/services/fetchArticleById/fetchArticleById'
import { classNames } from '6shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useInitialEffect } from '6shared/lib/hooks'
import { memo } from 'react'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { selectArticleDetailsIsLoading } from '5entities/Article/model/selectors/selectArticleDetailsIsLoading/selectArticleDetailsIsLoading'
import { selectArticleDetailsError } from '5entities/Article/model/selectors/selectArticleDetailsError/selectArticleDetailsError'
import { selectArticleDetails } from '5entities/Article/model/selectors/selectArticleDetails/selectArticleDetails'
import { Text, TextAlign, TextTheme } from '6shared/ui/Text/Text'
import { Article } from './Article'
import { SketelonArticle } from './SketelonArticle'

interface ArticleDetailsProps {
  className?: string
  articleId: string
}

const initialReducer: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(
  function ArticleDetails ({ className, articleId }: ArticleDetailsProps): JSX.Element {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(selectArticleDetailsIsLoading)

    const error = useSelector(selectArticleDetailsError)
    const article = useSelector(selectArticleDetails)

    useInitialEffect(() => {
      void dispatch(fetchArticleById(articleId))
    })

    let content

    if (isLoading === true) {
      content = <SketelonArticle/>
    }

    if (error !== undefined) {
      content = <Text title={error} theme={TextTheme.ERROR} align={TextAlign.CENTER}/>
    }

    if (article !== undefined) {
      content = <Article article={article}/>
    }

    return (
        <DynamicModuleLoader reducers={initialReducer}>
            <div className={classNames(styles.articleDetails, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
  })
