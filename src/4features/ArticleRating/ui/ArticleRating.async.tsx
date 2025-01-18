import { type JSX, lazy, Suspense } from 'react'
import { type ArticleRatingProps } from './ArticleRating'
import { ArticleRatingSkeleton } from './ArticleRatingSkeleton'

const ArticleRatingLazy = lazy(async () => await import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps): JSX.Element => {
  return (
      <Suspense fallback={<ArticleRatingSkeleton/>}>
          <ArticleRatingLazy {...props}/>
      </Suspense>
  )
}
