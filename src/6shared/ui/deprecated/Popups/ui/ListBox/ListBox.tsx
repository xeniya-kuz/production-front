import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import { type DropdownDirection } from '@/6shared/types/ui'
import { Listbox as HListbox } from '@headlessui/react'
import { type JSX, type ReactNode } from 'react'
import DoneIcon from '@/6shared/assets/icons/done-20-20.svg'
import { Button } from '../../../Button'
import { Icon, IconColors } from '../../../Icon'
import { HStack } from '../../../../redesigned/Stack'
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
    value?: T
    onChange: ({ name, value }: { name: string; value: T }) => void
    name?: string
    disabled?: boolean
    label?: string
    direction?: DropdownDirection
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const ListBox = <T extends string>(
    props: ListBoxProps<T>,
): JSX.Element => {
    const {
        className,
        options,
        value,
        onChange,
        name = '',
        disabled,
        label,
        direction = 'bottom left',
    } = props

    const handleOnChange = (value: T): void => {
        onChange({ name, value })
    }

    const selectedOption = options.find((option) => option.value === value)

    const mods: Mods = {
        [popupStyles.disabled]: disabled,
    }

    return (
        <HStack className={classNames(className, [])}>
            {label !== undefined && (
                <span
                    className={classNames(styles.label, [], mods)}
                >{`${label}>`}</span>
            )}
            <HListbox
                as="div"
                value={value}
                className={classNames(styles.listBox, [
                    className,
                    popupStyles.popup,
                ])}
                onChange={handleOnChange}
                disabled={disabled}
            >
                <HListbox.Button
                    as={'div'}
                    className={classNames(styles.trigger)}
                >
                    <Button disabled={disabled}>{selectedOption?.label}</Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(styles.options, [
                        mapDirectionsClass[direction],
                        popupStyles.content,
                    ])}
                >
                    {options.map((option) => (
                        <HListbox.Option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                        >
                            {({ active, selected, disabled }) => (
                                <div
                                    className={classNames(
                                        styles.option,
                                        undefined,
                                        {
                                            [styles.active]: active,
                                            [styles.disabled]: disabled,
                                        },
                                    )}
                                >
                                    {selected && (
                                        <Icon
                                            Svg={DoneIcon}
                                            color={
                                                active
                                                    ? IconColors.INVERTED_PRIMARY_FILL
                                                    : IconColors.PRIMARY_FILL
                                            }
                                        />
                                    )}
                                    {option.label}
                                </div>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    )
}
