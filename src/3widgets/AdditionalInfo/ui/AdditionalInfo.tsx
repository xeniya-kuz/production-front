import { EditArticleButton } from '@/4features/EditArticleButton'
import { type User } from '@/5entities/User'
import { Avatar } from '@/6shared/ui/redesigned/Avatar'
import { VStack } from '@/6shared/ui/redesigned/Stack'
import { Text } from '@/6shared/ui/redesigned/Text'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'

interface AdditionalInfoProps {
    author: User
    createdAt: string
    views: number
}

export const AdditionalInfo = memo(function AdditionalInfoContainer({
    author,
    createdAt,
    views,
}: AdditionalInfoProps): JSX.Element {
    const { t } = useTranslation('articles')
    return (
        <VStack gap="32">
            <VStack gap="8">
                <Avatar
                    size={32}
                    src={author.avatar ?? ''}
                    alt="author avatar"
                    username={author.username}
                    gap="8"
                />
                <Text text={createdAt} />
            </VStack>

            <EditArticleButton />
            {/* plural form */}
            <Text text={t('{{count}} views', { count: views })} />
        </VStack>
    )
})
