import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import styles from './Input.module.scss'
import {
    memo,
    type InputHTMLAttributes,
    type ChangeEvent,
    useEffect,
    useRef,
    type JSX,
    type ReactNode,
    useState,
} from 'react'
import { HStack } from '../Stack'
import { Text } from '../Text'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>

type InputSize = 's' | 'm' | 'l'
export interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: ({ name, value }: { name: string; value: string }) => void
    label?: string
    autofocus?: boolean
    readOnly?: boolean
    addonLeft?: ReactNode
    addonRight?: ReactNode
    size?: InputSize
}

export const Input = memo(function Input(props: InputProps): JSX.Element {
    const ref = useRef<HTMLInputElement>(null)
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus = false,
        readOnly,
        addonLeft,
        addonRight,
        label,
        size = 'm',
        ...otherProps
    } = props

    const [isFocused, setIsFocused] = useState<boolean>(false)

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref?.current?.focus()
        }
    }, [autofocus])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        const name = e.target.name
        const value = e.target.value

        onChange?.({ name, value })
    }

    const mods: Mods = {
        [styles.readonly]: readOnly,
        [styles.focused]: isFocused,
        [styles.withAddonRight]: !!addonRight,
        [styles.withAddonLeft]: !!addonLeft,
    }

    const onBlur = (): void => {
        setIsFocused(false)
    }

    const onFocus = (): void => {
        !readOnly && setIsFocused(true)
    }

    return (
        <HStack
            max
            gap="8"
        >
            <Text
                text={label}
                className={styles.label}
            />
            <div
                className={classNames(
                    styles.inputWrapper,
                    [className, styles[size]],
                    mods,
                )}
            >
                <div className={styles.addonLeft}>{addonLeft}</div>
                <input
                    ref={ref}
                    value={value}
                    onChange={onChangeHandler}
                    type={type}
                    className={styles.input}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    name="search"
                    {...otherProps}
                />
                <div className={styles.addonRight}>{addonRight}</div>
            </div>
        </HStack>
    )
})
