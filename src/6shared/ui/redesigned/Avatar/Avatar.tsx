import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Avatar.module.scss'
import { type CSSProperties, type JSX, useMemo } from 'react'
import { AppImage } from '../AppImage'
import UserIcon from '../../../assets/icons/avatar.svg'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'
import { HStack } from '../Stack'
import { type FlexGap } from '../Stack/Flex/Flex'
import { Text } from '../Text'

interface AvatarProps {
    className?: string
    src?: string
    alt: string
    size?: number
    username?: string
    gap?: FlexGap
}

export const Avatar = ({
    className,
    src,
    alt,
    size = 100,
    username,
    gap,
}: AvatarProps): JSX.Element => {
    const inlineStyles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        }
    }, [size])

    const fallback = (
        <Skeleton
            width={size}
            height={size}
            border="50%"
        />
    )

    const errorFallback = (
        <Icon
            Svg={UserIcon}
            width={size}
            height={size}
        />
    )

    const img = (
        <AppImage
            src={src}
            alt={alt}
            className={classNames(styles.avatar, [className])}
            style={inlineStyles}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    )

    if (username) {
        return (
            <HStack
                gap={gap}
                className={styles.footer}
            >
                {img}
                <Text
                    bold
                    text={username}
                />
            </HStack>
        )
    }

    return img
}
