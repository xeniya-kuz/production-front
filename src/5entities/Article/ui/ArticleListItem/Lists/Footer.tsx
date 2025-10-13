import { classNames } from '@/6shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/6shared/lib/features'
import { memo } from 'react'
import { SkeletonListViewDeprecated } from './Deprecated/SkeletonListViewDeprecated/SkeletonListViewDeprecated'
import { SkeletonListView } from './SkeletonListView/SkeletonListView'

interface FooterProps {
    className?: string
}

export const Footer = memo(function Footer({ className }: FooterProps) {
    return (
        <>
            {new Array(3).fill(0).map((_, index) => (
                <div
                    className={classNames(className)}
                    key={index}
                >
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<SkeletonListView />}
                        off={<SkeletonListViewDeprecated />}
                    />
                </div>
            ))}
        </>
    )
})
