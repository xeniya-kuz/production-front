import { classNames } from '6shared/lib/classNames/classNames'
import { Dropdown } from '6shared/ui/Dropdown/Dropdown'
import { useTranslation } from 'react-i18next'
import { type ChangeEvent, memo } from 'react'
import { Country } from '../../model/types'

interface CountrySelectProps {
  className?: string
  value?: Country
  disabled?: boolean
  onChange: (name: string, value: Country) => void
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan }
]

const NAME = 'country'

export const CountryDropdown = memo(
  function CurrencyDropdown ({ className, value, disabled, onChange }: CountrySelectProps): JSX.Element {
    const { t } = useTranslation(['profile'])

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
      onChange?.(NAME, event.target.value as Country)
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
