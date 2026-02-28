import { ArticleDetails } from '@/entities/Article'
import { Card } from '@/shared/ui/redesigned/Card'
import { type JSX, memo } from 'react'

interface ArticleDetailsContainerProps {
    className?: string
    articleId: string
}

export const ArticleDetailsContainer = memo(function DetailsContainer({
    className,
    articleId,
}: ArticleDetailsContainerProps): JSX.Element {
    return (
        <Card
            className={className}
            padding="24"
        >
            <ArticleDetails articleId={articleId} />
        </Card>
    )
})
