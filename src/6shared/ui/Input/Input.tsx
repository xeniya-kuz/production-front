import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Input.module.scss'
import { memo, type InputHTMLAttributes, type ChangeEvent, useState, useEffect, useRef } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
}

export const Input = memo(
  function Input (props: InputProps): JSX.Element {
    const { className, value, onChange, type = 'text', placeholder, autofocus = false, ...otherProps } = props
    const ref = useRef<HTMLInputElement>(null)

    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [caretPosition, setCaretPosition] = useState<number>(0)

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true)
        ref?.current?.focus()
      }
    }, [autofocus])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value
      // optional chaining
      onChange?.(value)
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

    return (
        <div className={classNames(styles.inputWrapper, [className])} >
            {(placeholder != null) && <div className={styles.placeholder}>
                {`${placeholder}>`}
            </div>}
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
                  {...otherProps}/>

                {isFocused &&
                <span className={styles.caret}
                style={{ left: `${caretPosition * 9}px` }}/>
                }
            </div>
        </div>
    )
  })
