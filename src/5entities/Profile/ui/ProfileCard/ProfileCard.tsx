import { CountryDropdown } from '4features/CountryDropdown'
import { type Currency, CurrencyDropdown } from '4features/CurrencyDropdown'
import { classNames, type Mods } from '6shared/lib/classNames/classNames'
import { Avatar } from '6shared/ui/Avatar/Avatar'
import { Error } from '6shared/ui/Error/Error'
import { Input } from '6shared/ui/Input/Input'
import { Loader } from '6shared/ui/Loader/Loader'
import { HStack, VStack } from '6shared/ui/Stack'
import { useTranslation } from 'react-i18next'
import { type Profile } from '../../model/types/profile'
import styles from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  profile: Profile | undefined
  isLoading?: boolean
  error?: string
  onChange?: (name: keyof Profile, value: string | number) => void
  readonly?: boolean
}

export const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { className, profile, isLoading, error, onChange, readonly } = props
  const { t } = useTranslation(['profile', 'buttons', 'alerts'])

  if (isLoading === true) {
    return (
        <HStack justify='center' max className={classNames(styles.profileCard, [className, styles.loader])}>
            <Loader/>
        </HStack>
    )
  }

  if (error !== undefined) {
    return (
        <HStack justify='center' max className={classNames(styles.profileCard, [className, styles.error])}>
            <Error/>
        </HStack>
    )
  }

  const onTextChange = ({ name, value }: { name: string | Currency, value: string }): void => {
    onChange?.(name as keyof Profile, value)
  }

  const onNumberChange = ({ name, value }: { name: string, value: string }): void => {
    if (!isNaN(+value)) {
      onChange?.(name as keyof Profile, +value === 0 ? '' : +value)
    }
  }

  const mods: Mods = {
    [styles.editing]: readonly !== true
  }

  return (
      <VStack gap='16' max className={classNames(styles.profileCard, [className], mods)}>
          {profile?.avatar !== undefined &&
              <HStack justify='center' max>
                  <Avatar src={profile?.avatar} alt={t('profile:avatar')}/>
              </HStack>
              }
          <Input
              // eslint-disable-next-line i18next/no-literal-string
              name='first'
              value={profile?.firstname}
              placeholder={t('first-name')}
              onChange={onTextChange}
              readOnly={readonly}
              data-testid='profileCard.Firstname'
              />
          <Input
              // eslint-disable-next-line i18next/no-literal-string
              name='lastname'
              value={profile?.lastname}
              placeholder={t('last-name')}
              onChange={onTextChange}
              readOnly={readonly}
              data-testid='profileCard.Lastname'
              />
          <Input
              // eslint-disable-next-line i18next/no-literal-string
              name='age'
              value={profile?.age}
              placeholder={t('age')}
              onChange={onNumberChange}
              readOnly={readonly}
              data-testid='profileCard.Age'
              />
          <Input
              // eslint-disable-next-line i18next/no-literal-string
              name='city'
              value={profile?.city}
              placeholder={t('city')}
              onChange={onTextChange}
              readOnly={readonly}
              data-testid='profileCard.City'
              />
          <Input
              // eslint-disable-next-line i18next/no-literal-string
              name='username'
              value={profile?.username}
              placeholder={t('username')}
              onChange={onTextChange}
              readOnly={readonly}
              data-testid='profileCard.Username'
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
