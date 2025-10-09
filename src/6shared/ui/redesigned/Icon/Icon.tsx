import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Icon.module.scss'
import { memo, type SVGProps, type JSX, type FC } from 'react'

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onCLick'>

type IconVariant = 'primary' | 'secondary'

interface IconBaseProps extends Omit<SvgProps, 'className'> {
    iconClassName?: string
    buttonClassName?: string
    Svg: FC<SVGProps<SVGSVGElement>>
    hover?: boolean
    variant?: IconVariant
}

interface IconClickableProps extends IconBaseProps {
    clickable?: false
}

interface IconNonclickableProps extends IconBaseProps {
    clickable: true
    onClick: () => void
}

type IconProps = IconClickableProps | IconNonclickableProps

export const Icon = memo(function Icon({
    iconClassName,
    buttonClassName,
    Svg,
    width = 32,
    height = 32,
    clickable,
    onClick,
    hover = true,
    variant = 'primary',
    ...props
}: IconProps): JSX.Element {
    const icon = (
        <Svg
            className={classNames(
                styles.icon,
                [iconClassName, styles[variant]],
                {
                    [styles.hover]: hover,
                },
            )}
            width={width}
            height={height}
            {...props}
        />
    )

    if (clickable) {
        return (
            <button
                type="button"
                className={classNames(styles.button, [buttonClassName])}
                onClick={onClick}
            >
                {icon}
            </button>
        )
    }

    return icon
})
