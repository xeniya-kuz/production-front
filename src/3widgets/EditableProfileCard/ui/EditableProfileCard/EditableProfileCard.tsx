import { ProfileCard, ProfileValidate } from '@/4features/ProfileCard'
import {
    fetchProfileData,
    profileActions,
    profileReducer,
    selectEditedProfile,
    selectProfileError,
    selectProfileIsLoading,
    selectProfileReadonly,
    type Profile,
} from '@/5entities/Profile'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/6shared/lib/features'
import { useAppDispatch, useInitialEffect } from '@/6shared/lib/hooks'
import { VStack } from '@/6shared/ui/redesigned/Stack'
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
