import { classNames } from '6shared/lib/classNames/classNames'
import { memo, useEffect } from 'react'
import { DynamicModuleLoader, type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer, ProfileCard, fetchProfileData } from '5entities/Profile'
import { useAppDispatch } from '6shared/lib/hooks'

const initialReducer: ReducerList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo(function ProfilePage ({ className }: ProfilePageProps): JSX.Element {
  const dispatch = useAppDispatch()

  useEffect(() => {
    void dispatch(fetchProfileData())
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount>
          <div className={classNames(undefined, [className])}>
              <ProfileCard/>
          </div>
      </DynamicModuleLoader>
  )
})

export default ProfilePage
