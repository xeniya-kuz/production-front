import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text'
import { type FC, memo, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import { ToggleFeatures } from '@/shared/lib/features'

export const ArticlePageGreeting = memo(function ArticlePageGreeting() {
    const { t } = useTranslation('articles')
    const [isOpen, setIsOpen] = useState(false)
    const { isArticlesPageWasOpened } = useJsonSettings()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true)
            void dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }))
        }
    }, [dispatch, isArticlesPageWasOpened])

    const onClose = (): void => {
        setIsOpen(false)
    }

    const Text: FC<{ title: string; text: string }> = (props) => (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<TextRedesigned {...props} />}
            off={<TextDeprecated {...props} />}
        />
    )

    const text = (
        <Text
            title={t('articles-welcome-title')}
            text={t('articles-welcome-description')}
        />
    )

    if (isMobile) {
        return (
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
            >
                {text}
            </Drawer>
        )
    }

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
        >
            {text}
        </Modal>
    )
})
