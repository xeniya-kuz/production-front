import { ProfileCard, ProfileValidate } from '@/features/ProfileCard'
import {
    fetchProfileData,
    profileActions,
    profileReducer,
    selectEditedProfile,
    selectProfileError,
    selectProfileIsLoading,
    selectProfileReadonly,
    type Profile,
} from '@/entities/Profile'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { memo, useCallback, type JSX } from 'react'
import { useSelector } from 'react-redux'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'

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
        void dispatch(fetchProfileData(profileId))
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
                align="center"
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<></>}
                    off={
                        <>
                            <EditableProfileCardHeader />
                            <ProfileValidate />
                        </>
                    }
                />

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
