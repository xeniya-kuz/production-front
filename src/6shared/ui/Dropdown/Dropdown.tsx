import { classNames, type Mods } from '6shared/lib/classNames/classNames'
import styles from './Dropdown.module.scss'
import { type ChangeEvent, memo, useMemo } from 'react'

export interface Options {
  value: string
  content: string
}

interface DropdownProps {
  className?: string
  label?: string
  options: Options[]
  value?: string
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  name?: string
  disabled?: boolean
}

export const Dropdown = memo(function Dropdown (props: DropdownProps): JSX.Element {
  const { className, label, options, value, onChange, disabled } = props

  const optionList = useMemo(() => {
    return options.map((option) =>
        <option
        key={option.value}
        className={styles.option}
        value={option.value}
        >{option.content}
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
          onChange={onChange}
          disabled={disabled}
          // defaultValue={value}
          >
              {optionList}
          </select>
      </div>
  )
})
