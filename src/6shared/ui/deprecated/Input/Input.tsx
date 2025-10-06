import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import styles from './Input.module.scss'
import {
    memo,
    type InputHTMLAttributes,
    type ChangeEvent,
    useState,
    useEffect,
    useRef,
    type JSX,
} from 'react'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: ({ name, value }: { name: string; value: string }) => void
    autofocus?: boolean
    readOnly?: boolean
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
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
        ...otherProps
    } = props

    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [caretPosition, setCaretPosition] = useState<number>(0)

    const isCaretVisible = isFocused && readOnly !== true

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
        setCaretPosition(value.length)
    }

    const onBlur = (): void => {
        setIsFocused(false)
    }

    const onFocus = (): void => {
        setIsFocused(true)
    }

    const onSelect = (e: any): void => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/strict-boolean-expressions
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    const mods: Mods = {
        [styles.readonly]: readOnly,
    }

    return (
        <div className={classNames(styles.inputWrapper, [className], mods)}>
            {placeholder != null && (
                <div className={styles.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={styles.caretWrapper}>
                <input
                    ref={ref}
                    value={value}
                    onChange={onChangeHandler}
                    type={type}
                    className={styles.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readOnly}
                    {...otherProps}
                />

                {isCaretVisible && (
                    <span
                        className={styles.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    )
})
