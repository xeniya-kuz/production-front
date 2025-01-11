import { classNames } from '6shared/lib/classNames/classNames'
import { ListBox } from '6shared/ui/ListBox/ListBox'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Currency } from '../../model/const/currency'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  disabled?: boolean
  onChange: ({ name, value }: { name: string, value: Currency }) => void
}

const options = [
  { value: Currency.EUR, label: Currency.EUR },
  { value: Currency.RUB, label: Currency.RUB },
  { value: Currency.USD, label: Currency.USD }
]

const NAME = 'currency'

export const CurrencyDropdown = memo(
  function CurrencyDropdown ({ className, value, disabled, onChange }: CurrencySelectProps): JSX.Element {
    const { t } = useTranslation(['profile'])

    const onChangeHandler = ({ name, value }: { name: string, value: Currency }): void => {
      onChange?.({ name: NAME, value })
    }

    return (
        <ListBox
            name={NAME}
            value={value}
            label={t(NAME)}
            options={options}
            className={classNames(undefined, [className])}
            disabled={disabled}
            onChange={onChangeHandler}
            direction='top right'
          />
    )
  })
