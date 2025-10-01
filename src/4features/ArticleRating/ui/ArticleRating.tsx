import { type JSX, memo, useCallback } from 'react'
import { RatingCard } from '@/5entities/Rating'
import { useGetArticleRating, useRateArticle } from '../api/articleRatingApi'
import { useSelector } from 'react-redux'
import { selectUserAuthData } from '@/5entities/User'
import { ArticleRatingSkeleton } from './ArticleRatingSkeleton'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating = memo(function ArticleRating({
    className,
    articleId,
}: ArticleRatingProps): JSX.Element {
    const user = useSelector(selectUserAuthData)
    const userId = user?.id ?? ''
    const { isLoading, data } = useGetArticleRating({ articleId, userId })
    const rating = data?.[0]
    const [rateArticle] = useRateArticle()

    const rateArticleHandle = useCallback(
        (starsCount: number, feedback?: string): void => {
            try {
                void rateArticle({
                    userId,
                    articleId,
                    rate: starsCount,
                    feedback,
                })
            } catch (error) {
                console.log(error)
            }
        },
        [userId, articleId, rateArticle],
    )

    const onAcceptHandle = useCallback(
        (starsCount: number, feedback?: string): void => {
            rateArticleHandle(starsCount, feedback)
        },
        [rateArticleHandle],
    )

    const onCancelHandle = useCallback(
        (starsCount: number): void => {
            rateArticleHandle(starsCount)
        },
        [rateArticleHandle],
    )

    if (isLoading) {
        return <ArticleRatingSkeleton />
    }

    return (
        <RatingCard
            className={className}
            feedbackTitle={
                'Оставьте свой отзыв о статье, это поможет улучшить качество'
            }
            title={'Оцените статью'}
            onAccept={onAcceptHandle}
            onCancel={onCancelHandle}
            fullWidth
            rate={rating?.rate}
        />
    )
})

export default ArticleRating
