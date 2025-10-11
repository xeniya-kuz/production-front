import ArrowIcon from '@/6shared/assets/icons/arrow-bottom.svg'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { Listbox as HListbox } from '@headlessui/react'
import { type JSX, type ReactNode } from 'react'
import { Button, type ButtonSize } from '../../../Button/Button'
import { Icon } from '../../../Icon'
import popupStyles from '../styles/popup.module.scss'
import styles from './ListBox.module.scss'
import { HStack } from '../../../Stack'
import { Text } from '../../../Text'

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
    label?: string
    name?: string
    disabled?: boolean
    direction?: 'top' | 'bottom'
    size?: ButtonSize
}

export const ListBox = <T extends string>(
    props: ListBoxProps<T>,
): JSX.Element => {
    const {
        className,
        options,
        value,
        onChange,
        name = '',
        label,
        disabled,
        direction = 'bottom',
        size,
    } = props

    const handleOnChange = (newValue: T): void => {
        value !== newValue && onChange({ name, value: newValue })
    }

    const selectedOption = options.find((option) => option.value === value)

    return (
        <HStack
            max
            gap="8"
        >
            <Text
                text={label}
                className={styles.label}
            />

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
                    {({ open, disabled }) => (
                        <Button
                            size={size}
                            disabled={disabled}
                            variant="filled"
                            addonRight={
                                <Icon
                                    Svg={ArrowIcon}
                                    iconClassName={classNames(
                                        styles.arrow,
                                        [],
                                        {
                                            [styles.open]: open,
                                        },
                                    )}
                                />
                            }
                        >
                            <p className={styles.label}>
                                {selectedOption?.label}
                            </p>
                        </Button>
                    )}
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(styles.options, [
                        styles[direction],
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
                                            [styles.selected]: selected,
                                        },
                                    )}
                                >
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
