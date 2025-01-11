import { Menu } from '@headlessui/react'
import styles from './Dropdown.module.scss'
import { classNames, type Mods } from '6shared/lib/classNames/classNames'
import { Fragment, type JSX, type ReactNode } from 'react'
import { type DropdownDirection } from '6shared/types/ui'
import { AppLink } from '../AppLink/AppLink'

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

export const Dropdown = ({ className, trigger, items, direction }: DropdownProps): JSX.Element => {
  const mods: Mods = {
    [styles.topLeft]: direction === 'top left',
    [styles.topRight]: direction === 'top right',
    [styles.bottomLeft]: direction === 'bottom left',
    [styles.bottomRight]: direction === 'bottom right'
  }

  return (
      <Menu as={'div'} className={classNames(styles.dropdown, [className])}>
          <Menu.Button className={styles.btn}>{trigger}</Menu.Button>
          <Menu.Items className={classNames(styles.menu, [], mods)}>
              {items.map((item, index) => {
                const content = ({ active }: { active: boolean }): JSX.Element => (
                    <button
                        onClick={item.onClick}
                        disabled={item.disabled}
                        className={classNames(
                          styles.item,
                          undefined,
                          { [styles.active]: active })}
                  >
                        {item.content}
                    </button>
                )
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                if (item.href) {
                  return (
                      <Menu.Item as={AppLink} key={index} disabled={item.disabled} to={item.href}>
                          {content}
                      </Menu.Item>
                  )
                }

                return (
                    <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
                        {content}
                    </Menu.Item>
                )
              })}

          </Menu.Items>
      </Menu>
  )
}
