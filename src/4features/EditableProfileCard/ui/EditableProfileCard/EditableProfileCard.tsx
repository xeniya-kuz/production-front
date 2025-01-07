import { memo, useCallback } from 'react'
import { type Profile, ProfileCard } from '5entities/Profile'
import { useAppDispatch, useInitialEffect } from '6shared/lib/hooks'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileActions, profileReducer } from '../../model/slice'
import { selectEditedProfile, selectProfileError, selectProfileIsLoading, selectProfileReadonly } from '../../model/selectors'
import { fetchProfileData } from '../../model/services'
import { ProfileErrors } from '../Errors/ProfileErrors'
import { VStack } from '6shared/ui/Stack'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'

interface EditableProfileCardProps {
  className?: string
  profileId?: string
}

const initialReducer: ReducerList = {
  profile: profileReducer
}

export const EditableProfileCard = memo(function EditableProfileCard
({ className, profileId }: EditableProfileCardProps): JSX.Element {
  const dispatch = useAppDispatch()
  const editingProfile = useSelector(selectEditedProfile)
  const isLoading = useSelector(selectProfileIsLoading)
  const error = useSelector(selectProfileError)
  const readonly = useSelector(selectProfileReadonly)

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
          <VStack gap='16' max>
              <EditableProfileCardHeader/>
              <ProfileErrors/>
              <ProfileCard profile={editingProfile}
                  isLoading={isLoading}
                  error={error}
                  onChange={onChange}
                  readonly={readonly}
          />
          </VStack>
      </DynamicModuleLoader>
  )
})
