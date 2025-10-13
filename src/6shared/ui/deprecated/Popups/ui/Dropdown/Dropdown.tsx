import { classNames } from '@/6shared/lib/classNames/classNames'
import { type DropdownDirection } from '@/6shared/types/ui'
import { Menu } from '@headlessui/react'
import { Fragment, type JSX, type ReactNode } from 'react'
import { AppLink } from '../../../AppLink'
import { mapDirectionsClass } from '../styles/const'
import styles from './Dropdown.module.scss'
import popupStyles from '../styles/popup.module.scss'

export interface DropdownItem {
    content: ReactNode
    disabled?: boolean
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Dropdown = ({
    className,
    trigger,
    items,
    direction = 'bottom right',
}: DropdownProps): JSX.Element => {
    return (
        <Menu
            as={'div'}
            className={classNames(styles.dropdown, [
                className,
                popupStyles.popup,
            ])}
        >
            <Menu.Button className={popupStyles.trigger}>{trigger}</Menu.Button>
            <Menu.Items
                className={classNames(styles.menu, [
                    mapDirectionsClass[direction],
                    popupStyles.content,
                ])}
            >
                {items.map((item, index) => {
                    const content = ({
                        active,
                    }: {
                        active: boolean
                    }): JSX.Element => (
                        <button
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(styles.item, undefined, {
                                [styles.activeTop]:
                                    active && direction.includes('top'),
                                [styles.activeBottom]:
                                    active && direction.includes('bottom'),
                            })}
                        >
                            {item.content}
                        </button>
                    )
                    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                key={index}
                                disabled={item.disabled}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        )
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            key={index}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
