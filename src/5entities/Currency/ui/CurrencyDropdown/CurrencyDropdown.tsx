import { classNames } from '6shared/lib/classNames/classNames'
import { Dropdown } from '6shared/ui/Dropdown/Dropdown'
import { Currency } from '5entities/Currency/model/types'
import { useTranslation } from 'react-i18next'
import { type ChangeEvent, memo } from 'react'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  disabled?: boolean
  onChange: (name: string, value: Currency) => void
}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD }
]

const NAME = 'currency'

export const CurrencyDropdown = memo(
  function CurrencyDropdown ({ className, value, disabled, onChange }: CurrencySelectProps): JSX.Element {
    const { t } = useTranslation(['profile'])

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
      onChange?.(NAME, event.target.value as Currency)
    }

    return (
        <Dropdown
          // eslint-disable-next-line i18next/no-literal-string
          name={NAME}
          value={value}
          label={t(NAME)}
          options={options}
          className={classNames(undefined, [className])}
          disabled={disabled}
          onChange={onChangeHandler}
          />
    )
  })
