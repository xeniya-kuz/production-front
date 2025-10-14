import { EditProfileButton } from '../../../EditableProfileButton'
import { CountryDropdown } from '@/5entities/CountryDropdown'
import { CurrencyDropdown } from '@/5entities/CurrencyDropdown'
import { type Profile } from '@/5entities/Profile'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { Avatar } from '@/6shared/ui/redesigned/Avatar'
import { Card } from '@/6shared/ui/redesigned/Card'
import { Input } from '@/6shared/ui/redesigned/Input'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'
import { type JSX } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'
import { ToggleFeatures } from '@/6shared/lib/features'
import { ProfileValidate } from '../ProfileValidate/ProfileValidate'

interface ProfileCardProps {
    className?: string
    profile: Profile | undefined
    readonly?: boolean
    onTextChange: ({ name, value }: { name: string; value: string }) => void
    onNumberChange: ({ name, value }: { name: string; value: string }) => void
}

export const ProfileCard = (props: ProfileCardProps): JSX.Element => {
    const { className, profile, readonly, onTextChange, onNumberChange } = props
    const { t } = useTranslation(['profile', 'buttons', 'alerts'])

    return (
        <Card
            className={classNames(styles.profileCard, [className])}
            padding="24"
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<EditProfileButton className={styles.editProfileBtn} />}
                off={<></>}
            />
            <VStack gap="32">
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

                <ProfileValidate />

                <HStack
                    gap="24"
                    max
                    align="start"
                >
                    <VStack
                        gap="16"
                        max
                    >
                        <Input
                            name="firstname"
                            value={profile?.firstname}
                            label={t('first-name')}
                            onChange={onTextChange}
                            readOnly={readonly}
                            data-testid={DATA_TEST_ID.profileCardFirstname}
                            placeholder="placeholder"
                            size="l"
                        />
                        <Input
                            name="lastname"
                            value={profile?.lastname}
                            label={t('last-name')}
                            onChange={onTextChange}
                            readOnly={readonly}
                            data-testid={DATA_TEST_ID.profileCardLastname}
                            placeholder="placeholder"
                            size="l"
                        />
                        <Input
                            name="age"
                            value={profile?.age}
                            label={t('age')}
                            onChange={onNumberChange}
                            readOnly={readonly}
                            data-testid={DATA_TEST_ID.profileCardAge}
                            placeholder="placeholder"
                            size="l"
                        />
                        <Input
                            name="city"
                            value={profile?.city}
                            label={t('city')}
                            onChange={onTextChange}
                            readOnly={readonly}
                            data-testid={DATA_TEST_ID.profileCardCity}
                            placeholder="placeholder"
                            size="l"
                        />
                    </VStack>
                    <VStack
                        gap="16"
                        max
                    >
                        <Input
                            name="username"
                            value={profile?.username}
                            label={t('username')}
                            onChange={onTextChange}
                            readOnly={readonly}
                            data-testid={DATA_TEST_ID.profileCardUsername}
                            placeholder="placeholder"
                            size="l"
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
                </HStack>
            </VStack>
        </Card>
    )
}
