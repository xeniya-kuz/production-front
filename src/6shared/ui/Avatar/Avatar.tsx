import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Avatar.module.scss'
import { type CSSProperties, type JSX, useMemo } from 'react'

interface AvatarProps {
  className?: string
  src?: string
  alt: string
  size?: number
}

export const Avatar = ({ className, src, alt, size }: AvatarProps): JSX.Element => {
  const inlineStyles = useMemo<CSSProperties>(() => {
    return {
      width: size ?? 100,
      height: size ?? 100
    }
  }, [size])

  return (
      <>
          {src !== undefined &&
          <img src={src}
              alt={alt}
              className={classNames(styles.avatar, [className])}
              style={inlineStyles}
           />
           }
      </>
  )
}
