import { classNames } from '@/6shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './Overlay.module.scss'

interface OverlayProps {
    className?: string
    onClick?: () => void
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Overlay = memo(function Overlay({
    className,
    onClick,
}: OverlayProps) {
    return (
        <div
            onClick={onClick}
            className={classNames(cls.overlay, [className])}
        />
    )
})
