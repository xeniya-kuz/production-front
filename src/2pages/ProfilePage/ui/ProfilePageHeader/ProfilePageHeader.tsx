import { classNames } from '6shared/lib/classNames/classNames'
import styles from './ProfilePageHeader.module.scss'
import { Button, ButtonTheme } from '6shared/ui/Button/Button'
import { Text } from '6shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { useAppDispatch } from '6shared/lib/hooks'
import { selectProfileData, selectProfileReadonly } from '../../model/selectors'
import { profileActions } from '../../model/slice'
import { updateProfileData } from '../../model/services'
import { selectUserAuthData } from '5entities/User'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('buttons')
  const readonly = useSelector(selectProfileReadonly)
  const user = useSelector(selectUserAuthData)
  const profile = useSelector(selectProfileData)
  const isAuthor = user?.id === profile?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    void dispatch(updateProfileData())
  }, [dispatch])

  return (
      <header className={classNames(styles.profileHeader, [className])}>
          <Text title={t('profile:profile')}/>
          {isAuthor &&
          <>
              {readonly === true
                ? <Button
                  theme={ButtonTheme.OUTLINE}
                  className={classNames(styles.editBtn)}
                  onClick={onEdit}
                  >
                    {t('edit') }
                </Button>
                : <>
                    <Button
                theme={ButtonTheme.OUTLINE}
                className={classNames(styles.saveBtn)}
                onClick={onSave}
                >
                        {t('save') }
                    </Button>
                    <Button
                theme={ButtonTheme.OUTLINE_RED}
                className={classNames(styles.cancelBtn)}
                onClick={onCancelEdit}
                >
                        {t('cancel') }
                    </Button>
                </>
                }
          </>
          }

      </header>
  )
}
