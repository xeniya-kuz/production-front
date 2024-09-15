import { classNames } from '6shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { DynamicModuleLoader, type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useInitialEffect } from '6shared/lib/hooks'
import { useSelector } from 'react-redux'
import { fetchProfileData, validateProfileErrorsTranslations } from '../model/services'
import { type Profile, ProfileCard } from '5entities/Profile'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { profileActions, profileReducer } from '../model/slice'
import {
  selectEditedProfile,
  selectProfileError,
  selectProfileIsLoading,
  selectProfileReadonly,
  selectProfileValidateErrors
} from '../model/selectors'
import { Text, TextTheme } from '6shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from '3widgets/Page'

const initialReducer: ReducerList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo(function ProfilePage ({ className }: ProfilePageProps): JSX.Element {
  const dispatch = useAppDispatch()
  const editingProfile = useSelector(selectEditedProfile)
  const isLoading = useSelector(selectProfileIsLoading)
  const error = useSelector(selectProfileError)
  const readonly = useSelector(selectProfileReadonly)
  const validateErrors = useSelector(selectProfileValidateErrors)
  const { t } = useTranslation()
  const { profileId } = useParams<{ profileId: string }>()

  useInitialEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      void dispatch(fetchProfileData(profileId))
    }
  })

  const onChange = useCallback((name: keyof Profile, value: string | number) => {
    dispatch(profileActions.updateProfile({ [name]: value }))
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={initialReducer}>
          <Page className={classNames(undefined, [className])}>
              <ProfilePageHeader/>
              {validateErrors?.length !== undefined &&
               validateErrors?.map(err =>
                   <Text key={err} theme={TextTheme.ERROR} text={t(validateProfileErrorsTranslations[err])}/>
               )}
              <ProfileCard
                profile={editingProfile}
                isLoading={isLoading}
                error={error}
                onChange={onChange}
                readonly={readonly}
              />
          </Page>
      </DynamicModuleLoader>
  )
})

export default ProfilePage
