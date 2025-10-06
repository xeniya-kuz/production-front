import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Avatar.module.scss'
import { type CSSProperties, type JSX, useMemo } from 'react'
import { AppImage } from '../AppImage'
import UserIcon from '../../../assets/icons/avatar.svg'
import { Icon, IconColors } from '../Icon'
import { Skeleton } from '../Skeleton'

interface AvatarProps {
    className?: string
    src?: string
    alt: string
    size?: number
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Avatar = ({
    className,
    src,
    alt,
    size = 100,
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
            color={IconColors.INVERTED_PRIMARY_FILL}
        />
    )

    return (
        <AppImage
            src={src}
            alt={alt}
            className={classNames(styles.avatar, [className])}
            style={inlineStyles}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    )
}
