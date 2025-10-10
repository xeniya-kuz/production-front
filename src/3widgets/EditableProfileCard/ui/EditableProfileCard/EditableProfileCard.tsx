import { type Profile } from '@/5entities/Profile'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useInitialEffect } from '@/6shared/lib/hooks'
import { VStack } from '@/6shared/ui/redesigned/Stack'
import { type JSX, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
    selectEditedProfile,
    selectProfileError,
    selectProfileIsLoading,
    selectProfileReadonly,
} from '../../model/selectors'
import { fetchProfileData } from '../../model/services'
import { profileActions, profileReducer } from '../../model/slice'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'
import { EditableProfileErrors } from '../EditableProfileErrors/EditableProfileErrors'
import { ProfileCard } from '@/4features/ProfileCard'

interface EditableProfileCardProps {
    className?: string
    profileId: string | undefined
}

const initialReducer: ReducerList = {
    profile: profileReducer,
}

export const EditableProfileCard = memo(function EditableProfileCard({
    className,
    profileId,
}: EditableProfileCardProps): JSX.Element {
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

    const onChange = useCallback(
        (name: keyof Profile, value: string | number) => {
            dispatch(profileActions.updateProfile({ [name]: value }))
        },
        [dispatch],
    )

    return (
        <DynamicModuleLoader reducers={initialReducer}>
            <VStack
                gap="16"
                max
                className={className}
            >
                <EditableProfileCardHeader />
                <EditableProfileErrors />
                <ProfileCard
                    profile={editingProfile}
                    isLoading={isLoading}
                    error={error}
                    onChange={onChange}
                    readonly={readonly}
                />
            </VStack>
        </DynamicModuleLoader>
    )
})
