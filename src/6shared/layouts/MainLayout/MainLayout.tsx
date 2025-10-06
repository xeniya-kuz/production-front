import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './MainLayout.module.scss'
import { type JSX, memo, type ReactElement } from 'react'

interface MainLayoutProps {
    className?: string
    header: ReactElement
    content: ReactElement
    sidebar: ReactElement
    toolbar?: ReactElement
}

export const MainLayout = memo(function MainLayout({
    className,
    header,
    content,
    sidebar,
    toolbar,
}: MainLayoutProps): JSX.Element {
    return (
        <div className={classNames(styles.mainLayout, [className])}>
            <div className={styles.sidebar}>{sidebar}</div>
            <div className={styles.content}>{content}</div>
            <div className={styles.rightbar}>
                <div className={styles.header}>{header}</div>
                <div className={styles.toolbar}>{toolbar}</div>
            </div>
        </div>
    )
})
