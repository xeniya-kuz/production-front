import { Page } from '@/widgets/Page'
import { UiDesignSwitcher } from '@/features/UiDesignSwitcher'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'

const SettingsPage = memo(function SettingsPage(): JSX.Element {
    const { t } = useTranslation()
    const Text = (props: { title: string }): JSX.Element => (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<TextRedesigned {...props} />}
            off={<TextDeprecated {...props} />}
        />
    )

    return (
        <Page>
            <VStack gap="16">
                <Text title={t('Настройки пользователя')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    )
})

export default SettingsPage
