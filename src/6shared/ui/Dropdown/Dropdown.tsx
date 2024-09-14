import { classNames, type Mods } from '6shared/lib/classNames/classNames'
import styles from './Dropdown.module.scss'
import { type ChangeEvent, useMemo } from 'react'

export interface Options<T extends string> {
  value: T
  label: string
}

interface DropdownProps<T extends string> {
  className?: string
  label?: string
  options: Array<Options<T>>
  value?: T
  onChange?: ({ name, value }: { name: string, value: T }) => void
  name?: string
  disabled?: boolean
}

export const Dropdown = <T extends string> (props: DropdownProps<T>): JSX.Element => {
  const { className, label, options, value, onChange, disabled } = props

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange?.({ name: event.target.name, value: event.target.value as T })
  }

  const optionList = useMemo(() => {
    return options.map((option) =>
        <option
          key={option.value}
          className={styles.option}
          value={option.value}
        >
            {option.label}
        </option>
    )
  }, [options])

  const mods: Mods = {
    [styles.disabled]: disabled
  }

  return (
      <div className={classNames(styles.dropdown, [className], mods)}>
          {label !== undefined && <span className={styles.label}>{`${label}>`}</span>}
          <select
          className={classNames(styles.select)}
          value={value}
          onChange={onChangeHandler}
          disabled={disabled}
          // defaultValue={value}
          >
              {optionList}
          </select>
      </div>
  )
}
