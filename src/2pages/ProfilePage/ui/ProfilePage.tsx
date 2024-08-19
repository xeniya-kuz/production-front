import { classNames } from '6shared/lib/classNames/classNames'
import { memo, useCallback, useEffect } from 'react'
import { DynamicModuleLoader, type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '6shared/lib/hooks'
import { useSelector } from 'react-redux'
import { fetchProfileData } from '../model/services'
import { type Profile, ProfileCard } from '5entities/Profile'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { profileActions, profileReducer } from '../model/slice'
import { selectEditedProfile, selectProfileError, selectProfileIsLoading, selectProfileReadonly } from '../model/selectors'

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

  useEffect(() => {
    void dispatch(fetchProfileData())
  }, [dispatch])

  const onChange = useCallback((name: keyof Profile, value: string | number) => {
    console.log(name, value)
    dispatch(profileActions.updateProfile({ [name]: value }))
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount>
          <div className={classNames(undefined, [className])}>
              <ProfilePageHeader/>
              <ProfileCard
                profile={editingProfile}
                isLoading={isLoading}
                error={error}
                onChange={onChange}
                readonly={readonly}
              />
          </div>
      </DynamicModuleLoader>
  )
})

export default ProfilePage
