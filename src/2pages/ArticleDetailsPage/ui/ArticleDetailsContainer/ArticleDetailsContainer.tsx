import { ArticleDetails } from '@/5entities/Article'
import { Card } from '@/6shared/ui/redesigned/Card'
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
            radius="round"
        >
            <ArticleDetails articleId={articleId} />
        </Card>
    )
})
