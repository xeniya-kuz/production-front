import { classNames, type Mods } from '6shared/lib/classNames/classNames'
import styles from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from '6shared/ui/Text/Text'
import { Input } from '6shared/ui/Input/Input'
import { type Profile } from '../../model/types/profile'
import { Loader } from '6shared/ui/Loader/Loader'
import { Avatar } from '6shared/ui/Avatar/Avatar'
import { type Currency, CurrencyDropdown } from '5entities/Currency'
import { CountryDropdown } from '5entities/Country'

interface ProfileCardProps {
  className?: string
  profile?: Profile
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
        <div className={classNames(styles.profileCard, [className, styles.loader])}>
            <Loader/>
        </div>
    )
  }

  if (error !== undefined) {
    return (
        <div className={classNames(styles.profileCard, [className, styles.error])}>
            <Text
            title={t('error-while-downloading', { ns: 'alerts' })}
            text={t('update-page', { ns: 'alerts' })}
            theme={TextTheme.ERROR}
            align={TextAlign.CENTER}
            />
        </div>
    )
  }

  const onTextChange = (name: string | Currency, value: string): void => {
    onChange?.(name as keyof Profile, value)
  }

  const onNumberChange = (name: string, value: string): void => {
    if (!isNaN(+value)) {
      onChange?.(name as keyof Profile, +value === 0 ? '' : +value)
    }
  }

  const mods: Mods = {
    [styles.editing]: readonly !== true
  }

  return (
      <div className={classNames(styles.profileCard, [className], mods)}>
          <article>
              {profile?.avatar !== undefined &&
              <div className={styles.avatarWrapper}>
                  <Avatar src={profile?.avatar} alt={t('profile:avatar')}/>
              </div>
              }
              <Input
              // eslint-disable-next-line i18next/no-literal-string
              name='first'
              value={profile?.first}
              placeholder={t('first-name')}
              className={styles.input}
              onChange={onTextChange}
              readOnly={readonly}
              />
              <Input
              // eslint-disable-next-line i18next/no-literal-string
              name='lastname'
              value={profile?.lastname}
              placeholder={t('last-name')}
              className={styles.input}
              onChange={onTextChange}
              readOnly={readonly}
              />
              <Input
              // eslint-disable-next-line i18next/no-literal-string
              name='age'
              value={profile?.age}
              placeholder={t('age')}
              className={styles.input}
              onChange={onNumberChange}
              readOnly={readonly}
              />
              <Input
              // eslint-disable-next-line i18next/no-literal-string
              name='city'
              value={profile?.city}
              placeholder={t('city')}
              className={styles.input}
              onChange={onTextChange}
              readOnly={readonly}
              />
              <Input
               // eslint-disable-next-line i18next/no-literal-string
              name='username'
              value={profile?.username}
              placeholder={t('username')}
              className={styles.input}
              onChange={onTextChange}
              readOnly={readonly}
              />
              <CurrencyDropdown
              value={profile?.currency}
              disabled={readonly}
              onChange={onTextChange}
              className={styles.input}
              />
              <CountryDropdown
              value={profile?.country}
              disabled={readonly}
              onChange={onTextChange}
              className={styles.input}/>
          </article>
      </div>
  )
}
