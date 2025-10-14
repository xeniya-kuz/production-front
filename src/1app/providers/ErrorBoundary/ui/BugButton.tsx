import { ToggleFeatures } from '@/6shared/lib/features'
import { Button as ButtonDeprecated } from '@/6shared/ui/deprecated/Button'
import { Button as ButtonRedesigned } from '@/6shared/ui/redesigned/Button'
import {
    type FC,
    type JSX,
    type PropsWithChildren,
    useEffect,
    useState,
} from 'react'
import { useTranslation } from 'react-i18next'

// компонент для тестирования ErrorBoundary
export const BugButton = (): JSX.Element => {
    const { t } = useTranslation()
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (error) {
            throw new Error('You threw an error')
        }
    }, [error])

    const onThrow = (): void => {
        setError(true)
    }

    const Button: FC<PropsWithChildren & { onClick: () => void }> = ({
        onClick,
        children,
    }) => (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ButtonRedesigned
                    onClick={onClick}
                    variant="outline"
                >
                    {children}
                </ButtonRedesigned>
            }
            off={
                <ButtonDeprecated onClick={onClick}>
                    {children}
                </ButtonDeprecated>
            }
        />
    )

    return <Button onClick={onThrow}>{t('ошибка')}</Button>
}
