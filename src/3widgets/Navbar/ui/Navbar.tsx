import { LoginModal } from '@/4features/AuthByUsername'
import { AvatarDropdown } from '@/4features/AvatarDropdown'
import { NotificationButton } from '@/4features/NotificationButton'
import { selectUserAuthData } from '@/5entities/User'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/6shared/ui/deprecated/AppLink/AppLink'
import { Button, ButtonTheme } from '@/6shared/ui/deprecated/Button/Button'
import { HStack } from '@/6shared/ui/redesigned/Stack'
import { Text, TextTheme } from '@/6shared/ui/deprecated/Text/Text'
import { type FC, type JSX, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styles from './Navbar.module.scss'
import { getRouteArticleCreate } from '@/6shared/const/router'
import { ToggleFeatures } from '@/6shared/lib/features'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(function Navbar({
    className,
}: NavbarProps): JSX.Element {
    const { t } = useTranslation()
    const authData = useSelector(selectUserAuthData)
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const UserButtons: FC = () => (
        <HStack
            gap={'16'}
            className={styles.actions}
        >
            <NotificationButton />
            <AvatarDropdown />
        </HStack>
    )

    const Deprecated: FC = () => (
        <header className={classNames(styles.navbar, [className])}>
            <Text
                className={styles.appName}
                title="Production project"
                theme={TextTheme.INVERTED}
            />
            <AppLink
                to={getRouteArticleCreate()}
                theme={AppLinkTheme.INVERTED}
                className={styles.create}
            >
                {t('articles:article-creation')}
            </AppLink>
            <UserButtons />
        </header>
    )

    if (authData !== undefined) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header
                        className={classNames(styles.navbarRedesigned, [
                            className,
                        ])}
                    >
                        <UserButtons />
                    </header>
                }
                off={<Deprecated />}
            />
        )
    }

    return (
        <header className={classNames(styles.navbar, [className])}>
            <Button
                className={styles.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onToggleModal}
                />
            )}
        </header>
    )
})
