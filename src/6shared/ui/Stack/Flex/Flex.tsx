import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Flex.module.scss'
import {
    type DetailedHTMLProps,
    type HTMLAttributes,
    type JSX,
    memo,
    type ReactNode,
} from 'react'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '2' | '4' | '8' | '16' | '32'

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

export interface FlexProps extends DivProps {
    className?: string
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    gap?: FlexGap
    max?: boolean
}

const justifyClasses: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
    2: styles.gap2,
    4: styles.gap4,
    8: styles.gap8,
    16: styles.gap16,
    32: styles.gap32,
}

export const Flex = memo(function Flex({
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
    ...props
}: FlexProps): JSX.Element {
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
    ]

    const mods = {
        [gapClasses[gap!]]: gap,
        [styles.max]: max,
    }

    return (
        <div
            className={classNames(styles.flex, classes, mods)}
            {...props}
        >
            {children}
        </div>
    )
})
