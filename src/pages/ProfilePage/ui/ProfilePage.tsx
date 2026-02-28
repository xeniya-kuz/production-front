import { Page } from '@/widgets/Page'
import { EditableProfileCard } from '@/widgets/EditableProfileCard'
import { DATA_TEST_ID } from '@/shared/const/tests'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type JSX, memo } from 'react'
import { useParams } from 'react-router-dom'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(function ProfilePage({
    className,
}: ProfilePageProps): JSX.Element {
    const { profileId } = useParams<{ profileId: string }>()

    return (
        <Page
            data-testid={DATA_TEST_ID.profilePage}
            className={classNames(className)}
        >
            <EditableProfileCard profileId={profileId} />
        </Page>
    )
})

export default ProfilePage
