import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Logo.module.scss'
import { type JSX, memo } from 'react'
import { HStack } from '../Stack'
import AppSvg from '@/6shared/assets/icons/app-image.svg'

interface LogoProps {
    className?: string
}

export const Logo = memo(function Logo({ className }: LogoProps): JSX.Element {
    return (
        <HStack
            max
            justify="center"
            className={classNames(styles.logoContainer, [className])}
        >
            <div className={styles.gradientBig} />
            <div className={styles.gradientSmall} />
            <AppSvg
                className={styles.logo}
                width={60}
                height={60}
            />
        </HStack>
    )
})
