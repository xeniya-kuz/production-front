import { CountryDropdown } from '@/5entities/CountryDropdown'
import { CurrencyDropdown } from '@/5entities/CurrencyDropdown'
import { type Profile } from '@/5entities/Profile'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import { Avatar } from '@/6shared/ui/deprecated/Avatar'
import { Input } from '@/6shared/ui/deprecated/Input'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'
import { type JSX } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

interface ProfileCardDeprecatedProps {
    className?: string
    profile: Profile | undefined
    readonly?: boolean
    onTextChange: ({ name, value }: { name: string; value: string }) => void
    onNumberChange: ({ name, value }: { name: string; value: string }) => void
}

/**
 * Устарел, используем новый компонент из папки ProfileCard
 * @deprecated
 */
export const ProfileCardDeprecated = (
    props: ProfileCardDeprecatedProps,
): JSX.Element => {
    const { className, profile, readonly, onTextChange, onNumberChange } = props
    const { t } = useTranslation(['profile', 'buttons', 'alerts'])

    const mods: Mods = {
        [styles.editing]: !readonly,
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames(styles.profileCard, [className], mods)}
        >
            {profile?.avatar && (
                <HStack
                    justify="center"
                    max
                >
                    <Avatar
                        src={profile?.avatar}
                        alt={t('profile:avatar')}
                        size={128}
                    />
                </HStack>
            )}
            <Input
                name="firstname"
                value={profile?.firstname}
                placeholder={t('first-name')}
                onChange={onTextChange}
                readOnly={readonly}
                data-testid={DATA_TEST_ID.profileCardFirstname}
            />
            <Input
                name="lastname"
                value={profile?.lastname}
                placeholder={t('last-name')}
                onChange={onTextChange}
                readOnly={readonly}
                data-testid={DATA_TEST_ID.profileCardLastname}
            />
            <Input
                name="age"
                value={profile?.age}
                placeholder={t('age')}
                onChange={onNumberChange}
                readOnly={readonly}
                data-testid={DATA_TEST_ID.profileCardAge}
            />
            <Input
                name="city"
                value={profile?.city}
                placeholder={t('city')}
                onChange={onTextChange}
                readOnly={readonly}
                data-testid={DATA_TEST_ID.profileCardCity}
            />
            <Input
                name="username"
                value={profile?.username}
                placeholder={t('username')}
                onChange={onTextChange}
                readOnly={readonly}
                data-testid={DATA_TEST_ID.profileCardUsername}
            />
            <CurrencyDropdown
                value={profile?.currency}
                disabled={readonly}
                onChange={onTextChange}
            />
            <CountryDropdown
                value={profile?.country}
                disabled={readonly}
                onChange={onTextChange}
            />
        </VStack>
    )
}
