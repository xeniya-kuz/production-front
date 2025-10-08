import { LoginModal } from '@/4features/AuthByUsername'
import { AvatarDropdown } from '@/4features/AvatarDropdown'
import { NotificationButton } from '@/4features/NotificationButton'
import { selectUserAuthData } from '@/5entities/User'
import { classNames } from '@/6shared/lib/classNames/classNames'
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme,
} from '@/6shared/ui/deprecated/AppLink/AppLink'
import { Button, ButtonTheme } from '@/6shared/ui/deprecated/Button/Button'
import { HStack } from '@/6shared/ui/redesigned/Stack'
import {
    Text as TextDeprecated,
    TextTheme,
} from '@/6shared/ui/deprecated/Text/Text'
import { type FC, type JSX, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styles from './Navbar.module.scss'
import { getRouteArticleCreate } from '@/6shared/const/router'
import { ToggleFeatures } from '@/6shared/lib/features'
import { AppLink } from '@/6shared/ui/redesigned/AppLink'
import { Icon } from '@/6shared/ui/redesigned/Icon'
import NewArticleIcon from '@/6shared/assets/icons/pencil.svg'

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
            gap={'8'}
            className={styles.actions}
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <AppLink to={getRouteArticleCreate()}>
                        <Icon Svg={NewArticleIcon} />
                    </AppLink>
                }
                off={<></>}
            />
            <NotificationButton />
            <AvatarDropdown />
        </HStack>
    )

    const Deprecated: FC = () => (
        <header className={classNames(styles.navbar, [className])}>
            <TextDeprecated
                className={styles.appName}
                title="Production project"
                theme={TextTheme.INVERTED}
            />
            <AppLinkDeprecated
                to={getRouteArticleCreate()}
                theme={AppLinkTheme.INVERTED}
                className={styles.create}
            >
                {t('articles:article-creation')}
            </AppLinkDeprecated>
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
