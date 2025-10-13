import { memo, type ReactElement } from 'react'
import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './StickyContentLayout.module.scss'

interface StickyContentLayoutProps {
    className?: string
    left?: ReactElement
    content: ReactElement
    right?: ReactElement
}

export const StickyContentLayout = memo(function StickyContentLayout({
    className,
    content,
    left,
    right,
}: StickyContentLayoutProps) {
    return (
        <div className={classNames(styles.stickyContentLayout, [className])}>
            {left && <div className={styles.left}>{left}</div>}
            <div className={styles.content}>{content}</div>
            {right && <div className={styles.right}>{right}</div>}
        </div>
    )
})
