import { type JSX, memo } from 'react'
import { Text } from '../Text/Text'
import { t } from 'i18next'

interface ErrorProps {
    className?: string
    title?: string
    text?: string
}

export const Error = memo(function Error(props: ErrorProps): JSX.Element {
    const {
        className,
        title = t('error-while-downloading'),
        text = t('update-page'),
    } = props

    return (
        <div className={className}>
            <Text
                title={title}
                text={text}
                align="center"
                variant="error"
            />
        </div>
    )
})
