import { classNames } from '6shared/lib/classNames/classNames'
import styles from './ArticleRecommendations.module.scss'
import { memo } from 'react'
import { DynamicModuleLoader, type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleRecommendationsReducer, selectArticleRecommendations } from '../model/slice/articleRecommendationsSlice'
import { useSelector } from 'react-redux'
import { selectRecommendationsIsLoading } from '../model/selectors/selectRecommendationsIsLoading/selectRecommendationsIsLoading'
import { selectRecommendationsError } from '../model/selectors/selectRecommendationsError/selectRecommendationsError'
import { ArticleList } from '5entities/Article'
import { useAppDispatch, useInitialEffect } from '6shared/lib/hooks'
import { fetchArticlesRecommendations } from '../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations'

const initialReducer: ReducerList = {
  articleRecommendations: articleRecommendationsReducer
}

interface ArticleRecommendationsProps {
  className?: string
}

export const ArticleRecommendations = memo(function ArticleRecommendations
({ className }: ArticleRecommendationsProps): JSX.Element {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(selectRecommendationsIsLoading)
  const error = useSelector(selectRecommendationsError)
  const recommendations = useSelector(selectArticleRecommendations.selectAll)

  useInitialEffect(() => {
    void dispatch(fetchArticlesRecommendations())
  })

  return (
      <DynamicModuleLoader reducers={initialReducer}>
          <div className={classNames(styles.articleRecommendations, [className])}>
              <ArticleList
                  articles={recommendations}
                  isLoading={isLoading}
                  className={styles.list}
                  target='_blank'
              />
          </div>
      </DynamicModuleLoader>
  )
})
