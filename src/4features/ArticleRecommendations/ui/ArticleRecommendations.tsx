import { ArticleList, ArticleView } from '@/5entities/Article'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { VStack } from '@/6shared/ui/Stack'
import { Text, TextSize } from '@/6shared/ui/Text/Text'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useArticleRecommendations } from '../api/articleRecommendationsApi'
import styles from './ArticleRecommendations.module.scss'
import { DATA_TEST_ID } from '@/6shared/const/tests'

interface ArticleRecommendationsProps {
  className?: string
}

export const ArticleRecommendations = memo(function ArticleRecommendations
({ className }: ArticleRecommendationsProps): JSX.Element | null {
  const { t } = useTranslation('articles')
  const { isLoading, data: recommendations } = useArticleRecommendations(3)

  if (recommendations === undefined) {
    return null
  }

  return (
      <VStack gap='8' max className={classNames(styles.articleRecommendations, [className])} data-testid={DATA_TEST_ID.articleRecommendationList}>
          <Text title={t('recommendations')} size={TextSize.S}/>
          <ArticleList
              articles={recommendations}
              isLoading={isLoading}
              className={styles.list}
              target='_blank'
              view={ArticleView.TILE}
              virtualized={false}
              />
      </VStack>
  )
})
