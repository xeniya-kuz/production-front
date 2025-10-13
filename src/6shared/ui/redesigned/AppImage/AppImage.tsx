import { classNames } from '@/6shared/lib/classNames/classNames'
import {
    type ImgHTMLAttributes,
    type JSX,
    memo,
    type ReactElement,
    useLayoutEffect,
    useState,
} from 'react'
import styles from './AppImage.module.scss'
import { EMPTY_IMAGE_PATH } from '@/6shared/const/general'
import { Skeleton } from '../Skeleton'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string
    fallback?: ReactElement
    errorFallback?: ReactElement
    objectFit?: 'cover' | 'contain' | 'fill'
    fallbackHeight?: string | number
    fallbackWidth?: string | number
}

export const AppImage = memo(function AppImage({
    className,
    fallback,
    errorFallback,
    objectFit = 'cover',
    fallbackHeight,
    fallbackWidth,
    ...otherProps
}: AppImageProps): JSX.Element {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    // вызовется до того, как компонент вмонтируется
    useLayoutEffect(() => {
        const img = new Image()
        img.src = otherProps.src ?? ''

        // слушатель событий на завершение загрузки
        img.onload = () => {
            setIsLoading(false)
        }

        // слушатель событий на возникновение ошибки
        img.onerror = () => {
            setIsLoading(false)
            setHasError(true)
        }
    })

    if (isLoading && fallback) {
        return (
            fallback ?? (
                <Skeleton
                    height={fallbackHeight}
                    width={fallbackWidth}
                />
            )
        )
    }

    if (hasError && errorFallback) {
        return (
            errorFallback ?? (
                <img
                    src={EMPTY_IMAGE_PATH}
                    className={classNames(styles.img, [className])}
                    style={{ objectFit }}
                />
            )
        )
    }

    return (
        <div>
            <img
                className={classNames(styles.img, [className])}
                style={{ objectFit }}
                {...otherProps}
            />
        </div>
    )
})
