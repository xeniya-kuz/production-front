import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Text.module.scss'
import { type JSX, memo } from 'react'

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'small',
    M = 'medium',
    L = 'large',
}

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
    'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
// memo забирает память, но у нас ее много, а вот вычислительные, процессорные мощности и видеокарту надо беречь
export const Text = memo(function Text(props: TextProps): JSX.Element {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId,
    } = props

    const additionalClassNames = [styles[theme], styles[align], styles[size]]

    const HeaderTag = mapSizeToHeaderTag[size]

    return (
        <div
            className={classNames(styles.text, [
                className,
                ...additionalClassNames,
            ])}
            data-testid={dataTestId}
        >
            {title != null && (
                <HeaderTag
                    data-testid={`${dataTestId}.Title`}
                    className={styles.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text != null && (
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
