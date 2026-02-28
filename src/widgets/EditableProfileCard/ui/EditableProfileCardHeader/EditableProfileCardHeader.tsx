import { EditProfileButton } from '@/features/EditableProfileButton'
import { Text } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { type JSX } from 'react'
import { useTranslation } from 'react-i18next'

interface ProfilePageHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = ({
    className,
}: ProfilePageHeaderProps): JSX.Element => {
    const { t } = useTranslation('buttons')

    return (
        <HStack
            justify="between"
            className={className}
            max
        >
            <Text title={t('profile:profile')} />
            <EditProfileButton />
        </HStack>
    )
}
