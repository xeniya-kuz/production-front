import { classNames } from '@/6shared/lib/classNames/classNames'
import { forwardRef, type ReactNode } from 'react'
import { NavLink, type NavLinkProps } from 'react-router-dom'
import styles from './AppLink.module.scss'

type AppLinkVariant = 'primary' | 'inverted'

export interface AppLinkProps extends Omit<NavLinkProps, 'children'> {
    className?: string
    variant?: AppLinkVariant
    children?: ReactNode
    activeClassName?: string
}

// обычно в качестве children передается строка, поэтому используем memo
export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
    function AppLink(props, ref) {
        const {
            className,
            to,
            children,
            variant = 'primary',
            activeClassName = '',
            ...otherProps
        } = props

        return (
            <NavLink
                ref={ref}
                to={to}
                className={({ isActive }) =>
                    classNames(styles.appLink, [className, styles[variant]], {
                        [activeClassName]: isActive,
                    })
                }
                {...otherProps}
            >
                {children}
            </NavLink>
        )
    },
)
