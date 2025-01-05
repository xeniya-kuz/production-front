import { selectUserAuthData } from '5entities/User'
import { useAppDispatch } from '6shared/lib/hooks'
import { Button, ButtonTheme } from '6shared/ui/Button/Button'
import { Text } from '6shared/ui/Text/Text'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { selectProfileData, selectProfileReadonly } from '../../model/selectors'
import { updateProfileData } from '../../model/services'
import { profileActions } from '../../model/slice'
import { HStack } from '6shared/ui/Stack'

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
      <HStack justify='between' className={className} max>
          <Text title={t('profile:profile')}/>
          {isAuthor &&
          <>
              {readonly === true
                ? <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                  >
                    {t('edit') }
                </Button>
                : <HStack gap='8'>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSave}
                >
                        {t('save') }
                    </Button>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onCancelEdit}
                >
                        {t('cancel') }
                    </Button>
                </HStack>
                }
          </>
          }

      </HStack>
  )
}
