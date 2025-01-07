import { classNames } from '6shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { memo } from 'react'
import { Card } from '6shared/ui/Card/Card'
import { SkeletonListView } from './Skeleton/SkeletonListView'

interface FooterProps {
  className?: string
  isLoading?: boolean
}

export const Footer = memo(function Footer ({ className, isLoading }: FooterProps) {
  if (isLoading === true) {
    return (
        <>
            {new Array(3).fill(0).map((_, index) => <div className={classNames(styles.list, [className])} key={index}>
                <Card className={styles.card}>
                    <SkeletonListView />
                </Card>
            </div>)}
        </>
    )
  }
  return null
})
