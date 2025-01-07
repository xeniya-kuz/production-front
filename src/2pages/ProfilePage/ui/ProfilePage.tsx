import { Page } from '3widgets/Page'
import { EditableProfileCard } from '4features/EditableProfileCard'
import { classNames } from '6shared/lib/classNames/classNames'
import { memo } from 'react'
import { useParams } from 'react-router-dom'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo(function ProfilePage ({ className }: ProfilePageProps): JSX.Element {
  const { profileId } = useParams<{ profileId: string }>()

  return (
      <Page className={classNames(undefined, [className])}>
          <EditableProfileCard profileId={profileId}/>
      </Page>
  )
})

export default ProfilePage
