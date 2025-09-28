import { classNames } from '@/6shared/lib/classNames/classNames'
import { type ImgHTMLAttributes, type JSX, memo, type ReactElement, useLayoutEffect, useState } from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  fallback?: ReactElement
  errorFallback?: ReactElement
}

export const AppImage = memo(function AppImage
({ className, fallback, errorFallback, ...otherProps }: AppImageProps): JSX.Element {
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
    return fallback
  }

  if (hasError && errorFallback) {
    return errorFallback
  }

  return (
      <img className={classNames(className)} {...otherProps}/>

  )
})
