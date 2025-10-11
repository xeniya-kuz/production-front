import { Page } from '@/3widgets/Page'
import { UiDesignSwitcher } from '@/4features/UiDesignSwitcher'
import { ToggleFeatures } from '@/6shared/lib/features'
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text'
import { VStack } from '@/6shared/ui/redesigned/Stack'
import { Text as TextRedesigned } from '@/6shared/ui/redesigned/Text'
import { type JSX, memo } from 'react'

const SettingsPage = memo(function SettingsPage(): JSX.Element {
    const Text = ({ title }: { title: string }): JSX.Element => (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<TextRedesigned title={title} />}
            off={<TextDeprecated title={title} />}
        />
    )

    return (
        <Page>
            <VStack gap="16">
                <Text title="Настройки пользователя" />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    )
})

export default SettingsPage
