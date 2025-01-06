import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, type ReactNode, useState } from 'react'
import styles from './ListBox.module.scss'
import { classNames, type Mods } from '6shared/lib/classNames/classNames'
import { Button } from '../Button/Button'
import DoneIcon from '../../assets/icons/done-20-20.svg'
import { Icon, IconColors } from '../Icon/Icon'
import { HStack } from '../Stack'

export interface ListBoxOption {
  value: string
  label: ReactNode
  disabled?: boolean
}

interface ListBoxProps<T extends string> {
  className?: string
  options: ListBoxOption[]
  value?: string
  defaulValue?: string
  onChange: ({ name, value }: { name: string, value: T }) => void
  name?: string
  disabled?: boolean
  label?: string
  direction?: DropdownDirection
}

type DropdownDirection = 'top' | 'bottom'

export const ListBox = <T extends string> (props: ListBoxProps<T>): JSX.Element => {
  const { className, options, value, defaulValue, onChange, name = '', disabled, label, direction = 'bottom' } = props

  const handleOnChange = (value: T): void => {
    onChange({ name, value })
  }

  const mods: Mods = {
    [styles.disabled]: disabled
  }

  return (
      <HStack className={classNames(className, [], mods)}>
          {label !== undefined && <span className={styles.label}>{`${label}>`}</span>}
          <HListbox
              as='div'
              value={value}
              className={classNames(styles.listBox, [className])}
              onChange={handleOnChange}
              disabled={disabled}
          >
              <HListbox.Button as={'div'} className={styles.trigger}>
                  <Button>{value ?? defaulValue}</Button>
              </HListbox.Button>
              <HListbox.Options className={classNames(styles.options, [styles[direction]], mods)}>
                  {options.map((option) => (
                      <HListbox.Option
                          key={option.value}
                          value={option.value}
                          as={Fragment}
                          disabled={option.disabled}
                  >
                          {({ active, selected, disabled }) => (
                              <>

                                  <li className={classNames(
                                    styles.option,
                                    undefined,
                                    {
                                      [styles.active]: active,
                                      [styles.disabled]: disabled
                                    })}>
                                      {selected && <Icon Svg={DoneIcon} color={IconColors.PRIMARY_FILL}/>}
                                      {option.label}
                                  </li>
                              </>
                          )}

                      </HListbox.Option>
                  ))}
              </HListbox.Options>
          </HListbox>
      </HStack>
  )
}
