import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Icon.module.scss'
import { memo, type SVGProps, type JSX, type FC } from 'react'

export const enum IconColors {
    PRIMARY_FILL = 'primaryFill',
    SECONDARY_FILL = 'secondaryFill',
    INVERTED_PRIMARY_FILL = 'invertedPrimaryFill',
    INVERTED_SECONDARY_FILL = 'invertedSecondaryFill',
    PRIMARY_STROKE = 'primaryStroke',
    SECONDARY_STROKE = 'secondaryStroke',
    INVERTED_PRIMARY_STROKE = 'invertedPrimaryStroke',
    INVERTED_SECONDARY_STROKE = 'invertedSecondaryStroke',
}

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
    className?: string
    Svg: FC<SVGProps<SVGSVGElement>>
    color?: IconColors | IconColors[]
}

export const Icon = memo(function Icon({
    className,
    Svg,
    color = IconColors.PRIMARY_FILL,
    width = 20,
    height = 20,
    ...props
}: IconProps): JSX.Element {
    const colorStyles = Array.isArray(color)
        ? color.map((c) => styles[c])
        : [styles[color]]

    return (
        <Svg
            className={classNames(styles.icon, [className, ...colorStyles])}
            width={width}
            height={height}
            {...props}
        />
    )
})
