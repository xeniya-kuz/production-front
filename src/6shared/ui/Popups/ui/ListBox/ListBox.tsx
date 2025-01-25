import { classNames } from '@/6shared/lib/classNames/classNames'
import { type DropdownDirection } from '@/6shared/types/ui'
import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, type JSX, type ReactNode } from 'react'
import DoneIcon from '../../../../assets/icons/done-20-20.svg'
import { Button } from '../../../Button/Button'
import { Icon, IconColors } from '../../../Icon/Icon'
import { HStack } from '../../../Stack'
import { mapDirectionsClass } from '../styles/const'
import styles from './ListBox.module.scss'
import popupStyles from '../styles/popup.module.scss'

export interface ListBoxOption {
  value: string
  label: ReactNode
  disabled?: boolean
}

interface ListBoxProps<T extends string> {
  className?: string
  options: ListBoxOption[]
  value?: string
  onChange: ({ name, value }: { name: string, value: T }) => void
  name?: string
  disabled?: boolean
  label?: string
  direction?: DropdownDirection
}

export const ListBox = <T extends string> (props: ListBoxProps<T>): JSX.Element => {
  const { className, options, value, onChange, name = '', disabled, label, direction = 'bottom left' } = props

  const handleOnChange = (value: T): void => {
    onChange({ name, value })
  }

  const selectedOption = options.find(option => option.value === value)

  return (
      <HStack className={classNames(className, [])}>
          {label !== undefined && <span className={classNames(styles.label, [], { [popupStyles.disabled]: disabled })}>{`${label}>`}</span>}
          <HListbox
              as='div'
              value={value}
              className={classNames(styles.listBox, [className, popupStyles.popup])}
              onChange={handleOnChange}
              disabled={disabled}
          >
              <HListbox.Button as={'div'} className={classNames(styles.trigger)}>
                  <Button disabled={disabled}>{selectedOption?.label}</Button>
              </HListbox.Button>
              <HListbox.Options className={classNames(styles.options, [mapDirectionsClass[direction], popupStyles.content])}>
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
                                      {selected && <Icon
                                          Svg={DoneIcon}
                                          color={active ? IconColors.INVERTED_PRIMARY_FILL : IconColors.PRIMARY_FILL}
                                       />}
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
