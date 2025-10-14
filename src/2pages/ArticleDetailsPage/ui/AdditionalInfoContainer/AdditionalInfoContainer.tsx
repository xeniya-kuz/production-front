import { AdditionalInfo } from '@/3widgets/AdditionalInfo'
import { selectArticleDetails } from '@/5entities/Article'
import { Card } from '@/6shared/ui/redesigned/Card'
import { type JSX, memo } from 'react'
import { useSelector } from 'react-redux'
import styles from './AdditionalInfoContainer.module.scss'

export const AdditionalInfoContainer = memo(
    function AdditionalInfoContainer(): JSX.Element {
        const article = useSelector(selectArticleDetails)

        if (!article) {
            return <></>
        }

        return (
            <Card className={styles.additionalInfoContainer}>
                <AdditionalInfo
                    author={article.user}
                    createdAt={article.createdAt}
                    views={article.views}
                />
            </Card>
        )
    },
)
