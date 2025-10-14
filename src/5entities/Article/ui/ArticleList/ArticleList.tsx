import {
    ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY,
    ARTICLE_VIEW_ITEM_INDEX_LOCALSTORAGE_KEY,
} from '@/6shared/const/localstorage'
import { classNames } from '@/6shared/lib/classNames/classNames'
import {
    type HTMLAttributeAnchorTarget,
    memo,
    useEffect,
    useState,
    type JSX,
} from 'react'
import { useTranslation } from 'react-i18next'
import { type Article } from '../../model/types/article'
import { Lists } from '../ArticleListItem/Lists/Lists'
import { Tiles } from '../ArticleListItem/Tiles/Tiles'
import styles from './ArticleList.module.scss'
import { ArticleView } from '../../model/const/article'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { Text } from '@/6shared/ui/redesigned/Text'
import { ToggleFeatures } from '@/6shared/lib/features'
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text'
import {
    articleImage,
    articleTypes,
    articleViews,
    handleButtonClick,
} from './helpers'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    target?: HTMLAttributeAnchorTarget
    onLoadNextArticles?: () => void
    view: ArticleView
    Header?: () => JSX.Element
    virtualized?: boolean
    direction?: 'row'
}

export const ArticleList = memo(function ArticleList(
    props: ArticleListProps,
): JSX.Element {
    const {
        className,
        articles,
        isLoading,
        target,
        onLoadNextArticles,
        view,
        Header,
        virtualized = true,
        direction,
    } = props
    const { t } = useTranslation('articles')
    const [selectedArticleId, setSelectedArticleId] = useState(0)

    useEffect(() => {
        const articleListIndex =
            localStorage.getItem(ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY) ?? 0
        const articleViewIndex =
            localStorage.getItem(ARTICLE_VIEW_ITEM_INDEX_LOCALSTORAGE_KEY) ?? 0
        setSelectedArticleId(
            view === ArticleView.LIST ? +articleListIndex : +articleViewIndex,
        )
    }, [view])

    if (!isLoading && !articles.length) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Text title={t('articles-not-found')} />}
                off={<TextDeprecated title={t('articles-not-found')} />}
            />
        )
    }

    const articleProps = {
        Header,
        articles,
        onLoadNextArticles,
        selectedArticleId,
        isLoading,
        target,
        virtualized,
        direction,
        articleTypes,
        articleViews,
        handleButtonClick,
        articleImage,
    }

    return (
        <div
            className={classNames(styles.articleList, [className])}
            data-testid={DATA_TEST_ID.articleList}
        >
            {view === ArticleView.LIST ? (
                <Lists {...articleProps} />
            ) : (
                <Tiles {...articleProps} />
            )}
        </div>
    )
})
