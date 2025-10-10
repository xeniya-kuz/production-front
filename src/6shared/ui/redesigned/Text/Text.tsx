import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Text.module.scss'
import { type JSX, memo } from 'react'

export type TextAlign = 'right' | 'left' | 'center'

export type TextSize = 's' | 'm' | 'l'

export type TextVariant = 'primary' | 'error' | 'accent'

interface TextProps {
    className?: string
    title?: string
    text?: string
    variant?: TextVariant
    align?: TextAlign
    size?: TextSize
    'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
}

// memo забирает память, но у нас ее много, а вот вычислительные, процессорные мощности и видеокарту надо беречь
export const Text = memo(function Text(props: TextProps): JSX.Element {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'm',
        'data-testid': dataTestId,
    } = props

    const additionalClassNames = [styles[variant], styles[align], styles[size]]

    const HeaderTag = mapSizeToHeaderTag[size]

    if (!title && !text) {
        return <></>
    }

    return (
        <div
            className={classNames(styles.text, [
                className,
                ...additionalClassNames,
            ])}
            data-testid={dataTestId}
        >
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Title`}
                    className={styles.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    data-testid={`${dataTestId}.Text`}
                    className={styles.text}
                >
                    {text}
                </p>
            )}
        </div>
    )
})
