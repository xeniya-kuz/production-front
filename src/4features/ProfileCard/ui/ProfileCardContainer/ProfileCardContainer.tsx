import { type Currency } from '@/5entities/CurrencyDropdown'
import { type Profile } from '@/5entities/Profile'
import { ToggleFeatures } from '@/6shared/lib/features'
import { type JSX } from 'react'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import { ProfileCardError } from '../ProfileCard/ProfileCardError'
import { ProfileCardSkeleton } from '../ProfileCard/ProfileCardSkeleton'
import { ProfileCardDeprecated } from '../ProfileCardDeprecated/ProfileCardDeprecated'
import { ProfileCardDeprecatedError } from '../ProfileCardDeprecated/ProfileCardDeprecatedError'
import { ProfileCardDeprecatedLoader } from '../ProfileCardDeprecated/ProfileCardDeprecatedLoader'

interface ProfileCardProps {
    className?: string
    profile: Profile | undefined
    isLoading?: boolean
    error?: string
    onChange?: (name: keyof Profile, value: string | number) => void
    readonly?: boolean
}

export const ProfileCardContainer = (props: ProfileCardProps): JSX.Element => {
    const { onChange, isLoading, error, ...otherProps } = props

    const onTextChange = ({
        name,
        value,
    }: {
        name: string | Currency
        value: string
    }): void => {
        onChange?.(name as keyof Profile, value)
    }

    const onNumberChange = ({
        name,
        value,
    }: {
        name: string
        value: string
    }): void => {
        if (!isNaN(+value)) {
            onChange?.(name as keyof Profile, +value === 0 ? '' : +value)
        }
    }

    if (isLoading) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ProfileCardSkeleton />}
                off={<ProfileCardDeprecatedLoader />}
            />
        )
    }

    if (error) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ProfileCardError />}
                off={<ProfileCardDeprecatedError />}
            />
        )
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ProfileCard
                    {...otherProps}
                    onTextChange={onTextChange}
                    onNumberChange={onNumberChange}
                />
            }
            off={
                <ProfileCardDeprecated
                    {...otherProps}
                    onTextChange={onTextChange}
                    onNumberChange={onNumberChange}
                />
            }
        />
    )
}
