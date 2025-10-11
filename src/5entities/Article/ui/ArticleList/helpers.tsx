import EyeIconDeprecated from '@/6shared/assets/icons/eye-20-20.svg'
import EyeIcon from '@/6shared/assets/icons/eye.svg'
import { ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY } from '@/6shared/const/localstorage'
import { ToggleFeatures } from '@/6shared/lib/features'
import {
    IconColors,
    Icon as IconDeprecated,
} from '@/6shared/ui/deprecated/Icon'
import { Skeleton as SkeletonDeprecated } from '@/6shared/ui/deprecated/Skeleton'
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text'
import { AppImage } from '@/6shared/ui/redesigned/AppImage'
import { Icon } from '@/6shared/ui/redesigned/Icon'
import { Skeleton } from '@/6shared/ui/redesigned/Skeleton'
import { Text } from '@/6shared/ui/redesigned/Text'
import { type JSX } from 'react'
import { type Article } from '../../model/types/article'
import { HStack } from '@/6shared/ui/redesigned/Stack'

export const articleTypes = ({
    className,
    article,
}: {
    className: string
    article: Article
}): JSX.Element => (
    <TextDeprecated
        text={article.type.join(', ')}
        className={className}
    />
)

export const articleViews = ({
    className,
    article,
}: {
    className: string
    article: Article
}): JSX.Element => (
    <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
            <HStack
                gap="8"
                className={className}
            >
                <Icon Svg={EyeIcon} />
                <Text text={String(article.views)} />
            </HStack>
        }
        off={
            <>
                <TextDeprecated
                    text={String(article.views)}
                    className={className}
                />
                <IconDeprecated
                    Svg={EyeIconDeprecated}
                    color={[
                        IconColors.SECONDARY_STROKE,
                        IconColors.SECONDARY_FILL,
                    ]}
                />
            </>
        }
    />
)

export const handleButtonClick = (index: number) => (): void => {
    localStorage.setItem(
        ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY,
        JSON.stringify(index),
    )
}

export const articleImage = ({
    width,
    height,
    className,
    article,
}: {
    width: number | string
    height: number | string
    className: string
    article: Article
}): JSX.Element => (
    <AppImage
        src={article.img}
        alt={article.title}
        className={className}
        fallback={
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Skeleton
                        width={width}
                        height={height}
                    />
                }
                off={
                    <SkeletonDeprecated
                        width={width}
                        height={height}
                    />
                }
            />
        }
        errorFallback={
            <img
                src="src/6shared/assets/images/no-image.png"
                style={{ width: '100%', height: '100%' }}
                className={className}
            />
        }
    />
)
