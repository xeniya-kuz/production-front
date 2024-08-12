import { classNames } from '6shared/lib/classNames/classNames'
import { memo } from 'react'
import { DynamicModuleLoader, type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer, ProfileCard } from '5entities/Profile'

const initialReducer: ReducerList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo(function ProfilePage ({ className }: ProfilePageProps): JSX.Element {
  return (
      <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount>
          <div className={classNames(undefined, [className])}>
              <ProfileCard/>
          </div>
      </DynamicModuleLoader>
  )
})

export default ProfilePage
