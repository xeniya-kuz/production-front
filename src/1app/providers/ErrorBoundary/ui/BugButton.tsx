import { Button } from '@/6shared/ui/Button/Button'
import { type JSX, useEffect, useState } from 'react'
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

    return <Button onClick={onThrow}>{t('ошибка')}</Button>
}
