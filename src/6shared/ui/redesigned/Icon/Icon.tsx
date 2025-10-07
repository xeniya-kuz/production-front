import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Icon.module.scss'
import { memo, type SVGProps, type JSX, type FC } from 'react'

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onCLick'>

interface IconBaseProps extends SvgProps {
    className?: string
    Svg: FC<SVGProps<SVGSVGElement>>
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
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    onClick,
    ...props
}: IconProps): JSX.Element {
    const icon = (
        <Svg
            className={classNames(styles.icon, [className])}
            width={width}
            height={height}
            {...props}
        />
    )
    if (clickable) {
        return (
            <button
                type="button"
                className={styles.button}
                onClick={onClick}
                style={{ height, width }}
            >
                {icon}
            </button>
        )
    }

    return icon
})
