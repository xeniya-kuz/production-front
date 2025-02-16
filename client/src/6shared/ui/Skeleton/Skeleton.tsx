import { type JSX, type CSSProperties } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import styles from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton = function Skeleton
(props: SkeletonProps): JSX.Element {
  const { className, height, width, border } = props

  const style: CSSProperties = {
    height,
    width,
    borderRadius: border
  }

  return <div className={classNames(styles.skeleton, [className])} style={style} />
}
