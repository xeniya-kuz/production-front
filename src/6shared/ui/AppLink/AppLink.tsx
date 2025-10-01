import { classNames } from '@/6shared/lib/classNames/classNames'
import { forwardRef, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: ReactNode
}

// обычно в качестве children передается строка, поэтому используем memo
export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
    function AppLink(props, ref) {
        const {
            className,
            to,
            children,
            theme = AppLinkTheme.PRIMARY,
            ...otherProps
        } = props

        return (
            <Link
                ref={ref}
                to={to}
                className={classNames(styles.appLink, [
                    className,
                    styles[theme],
                ])}
                {...otherProps}
            >
                {children}
            </Link>
        )
    },
)
