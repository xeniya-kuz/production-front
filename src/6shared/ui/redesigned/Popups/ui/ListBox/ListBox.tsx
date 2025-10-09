import { classNames } from '@/6shared/lib/classNames/classNames'
import { type DropdownDirection } from '@/6shared/types/ui'
import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, type JSX, type ReactNode } from 'react'
import { Button } from '../../../Button/Button'
import { mapDirectionsClass } from '../styles/const'
import styles from './ListBox.module.scss'
import popupStyles from '../styles/popup.module.scss'
import { Icon } from '../../../Icon'
import ArrowIcon from '@/6shared/assets/icons/arrow-bottom.svg'

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
    direction?: DropdownDirection
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
        disabled,
        direction = 'bottom left',
    } = props

    const handleOnChange = (value: T): void => {
        onChange({ name, value })
    }

    const selectedOption = options.find((option) => option.value === value)

    return (
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
            <HListbox.Button className={classNames(styles.trigger)}>
                {({ open, disabled }) => (
                    <Button
                        disabled={disabled}
                        variant="filled"
                        className={styles.button}
                    >
                        <p className={styles.label}>{selectedOption?.label}</p>
                        <Icon
                            Svg={ArrowIcon}
                            iconClassName={classNames(styles.arrow, [], {
                                [styles.open]: open,
                            })}
                        />
                    </Button>
                )}
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
                            <>
                                <li
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
                                </li>
                            </>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    )
}
