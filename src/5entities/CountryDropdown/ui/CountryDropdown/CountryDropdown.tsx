import { classNames } from '@/6shared/lib/classNames/classNames'
import { ListBox as ListBoxDeprecated } from '@/6shared/ui/deprecated/Popups/ui/ListBox/ListBox'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Country } from '../../model/const/country'
import { ToggleFeatures } from '@/6shared/lib/features'
import { ListBox } from '@/6shared/ui/redesigned/Popups'

interface CountrySelectProps {
    className?: string
    value?: Country
    disabled?: boolean
    onChange: ({ name, value }: { name: string; value: Country }) => void
}

const options = [
    { value: Country.Russia, label: Country.Russia },
    { value: Country.Armenia, label: Country.Armenia },
    { value: Country.Belarus, label: Country.Belarus },
    { value: Country.Kazakhstan, label: Country.Kazakhstan },
]

const NAME = 'country'

export const CountryDropdown = memo(function CurrencyDropdown({
    className,
    value,
    disabled,
    onChange,
}: CountrySelectProps): JSX.Element {
    const { t } = useTranslation(['profile'])

    const onChangeHandler = ({
        name,
        value,
    }: {
        name: string
        value: Country
    }): void => {
        onChange?.({ name: NAME, value })
    }

    const props = {
        name: NAME,
        value,
        label: t(NAME),
        options,
        className: classNames(undefined, [className]),
        disabled,
        onChange: onChangeHandler,
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ListBox
                    {...props}
                    size="l"
                />
            }
            off={
                <ListBoxDeprecated
                    {...props}
                    direction="top right"
                />
            }
        />
    )
})
