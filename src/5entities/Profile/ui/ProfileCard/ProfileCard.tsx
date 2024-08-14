import { classNames } from '6shared/lib/classNames/classNames'
import styles from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from '6shared/ui/Text/Text'
import { Button, ButtonTheme } from '6shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { selectProfileData } from '../../model/selectors/selectProfileData/selectProfileData'
import { Input } from '6shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps): JSX.Element => {
  const { t } = useTranslation(['profile', 'buttons'])
  const profile = useSelector(selectProfileData)

  return (
      <div className={classNames(styles.profileCard, [className])}>
          <div className={classNames(styles.header)}>
              <Text title={t('profile', { ns: 'profile' })}/>
              <Button
              theme={ButtonTheme.OUTLINE}
              className={classNames(styles.editBtn)}>
                  {t('edit', { ns: 'buttons' })
                  }</Button>
          </div>
          <div className={classNames(styles.data)}>
              <Input value={profile?.first} placeholder={t('first-name')} className={styles.input}/>
              <Input value={profile?.lastname} placeholder={t('last-name')} className={styles.input}/>
          </div>
      </div>
  )
}
