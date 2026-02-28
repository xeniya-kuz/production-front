import EyeIconDeprecated from '@/shared/assets/icons/eye-20-20.svg'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { ToggleFeatures } from '@/shared/lib/features'
import { IconColors, Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { NoImage } from '@/shared/ui/redesigned/NoImage'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { type JSX } from 'react'
import { type Article } from '../../model/types/article'

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
            <SkeletonDeprecated
                width={width}
                height={height}
            />
        }
        errorFallback={<NoImage className={className} />}
    />
)
