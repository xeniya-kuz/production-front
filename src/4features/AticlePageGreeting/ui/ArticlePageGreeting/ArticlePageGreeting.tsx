import { saveJsonSettings, useJsonSettings } from '@/5entities/User'
import { useAppDispatch } from '@/6shared/lib/hooks'
import { Drawer } from '@/6shared/ui/redesigned/Drawer'
import { Modal } from '@/6shared/ui/redesigned/Modal'
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text'
import { Text as TextRedesigned } from '@/6shared/ui/redesigned/Text'
import { type FC, memo, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { ToggleFeatures } from '@/6shared/lib/features'

export const ArticlePageGreeting = memo(function ArticlePageGreeting() {
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
            title="Добро пожаловать на страницу статей"
            text="Здесь вы можете искать и просматривать статьи на различные темы"
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
