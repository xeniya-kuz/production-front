import { classNames } from '@/6shared/lib/classNames/classNames'
import { memo } from 'react'
import { SkeletonListView } from './Skeleton/SkeletonListView'
import styles from './styles.module.scss'
import { toggleFeatures } from '@/6shared/lib/features'
import { Card as CardDeprecated } from '@/6shared/ui/deprecated/Card'
import { Card as CardRedesigned } from '@/6shared/ui/redesigned/Card'

interface FooterProps {
    className?: string
}

export const Footer = memo(function Footer({ className }: FooterProps) {
    const Card = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => CardRedesigned,
        off: () => CardDeprecated,
    })

    return (
        <>
            {new Array(3).fill(0).map((_, index) => (
                <div
                    className={classNames(styles.list, [className])}
                    key={index}
                >
                    <Card>
                        <SkeletonListView />
                    </Card>
                </div>
            ))}
        </>
    )
})
