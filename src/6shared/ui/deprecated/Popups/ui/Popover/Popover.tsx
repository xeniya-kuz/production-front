import { type DropdownDirection } from '@/6shared/types/ui'
import { Popover as HPopover } from '@headlessui/react'
import { type ReactNode, type JSX } from 'react'
import popupStyles from '../styles/popup.module.scss'
import styles from './Popover.module.scss'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { mapDirectionsClass } from '../styles/const'

interface PopoverProps {
    trigger: ReactNode
    direction?: DropdownDirection
    children: ReactNode
    className?: string
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Popover = ({
    trigger,
    direction = 'bottom right',
    children,
    className,
}: PopoverProps): JSX.Element => {
    return (
        <HPopover className={popupStyles.popup}>
            <HPopover.Button className={popupStyles.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                className={classNames(styles.panel, [
                    mapDirectionsClass[direction],
                    popupStyles.content,
                    className,
                ])}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}
