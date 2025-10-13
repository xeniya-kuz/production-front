import { ToggleFeatures, toggleFeatures } from '@/6shared/lib/features'
import { Card as CardDeprecated } from '@/6shared/ui/deprecated/Card'
import { Card as CardRedesigned } from '@/6shared/ui/redesigned/Card'
import {
    Input as InputDeprecated,
    type InputProps as InputDeprecatedProps,
} from '@/6shared/ui/deprecated/Input'
import {
    Input as InputRedesigned,
    type InputProps as InputRedesignedProps,
} from '@/6shared/ui/redesigned/Input'
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text'
import { Text as TextRedesigned } from '@/6shared/ui/redesigned/Text'
import {
    Button as ButtonDeprecated,
    type ButtonProps as ButtonDeprecatedProps,
} from '@/6shared/ui/deprecated/Button'
import {
    Button as ButtonRedesigned,
    type ButtonProps as ButtonRedesignedProps,
} from '@/6shared/ui/redesigned/Button'
import {
    StarRating as StarRatingDeprecated,
    type StarRatingProps as StarRatingDeprecatedProps,
} from '@/6shared/ui/deprecated/StarRating'
import {
    StarRating as StarRatingRedesigned,
    type StarRatingProps as StarRatingRedesignedProps,
} from '@/6shared/ui/redesigned/StarRating'

import { type FC, type JSX } from 'react'

export const Card = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => CardRedesigned,
    off: () => CardDeprecated,
})

export const Text = (props: { title?: string }): JSX.Element => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<TextRedesigned {...props} />}
        off={<TextDeprecated {...props} />}
    />
)

export const Button = (
    props: ButtonDeprecatedProps & ButtonRedesignedProps,
): JSX.Element => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<ButtonRedesigned {...props} />}
        off={<ButtonDeprecated {...props} />}
    />
)

export const Input = (
    props: InputRedesignedProps & InputDeprecatedProps,
): JSX.Element => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={
            <InputRedesigned
                {...props}
                label={props.placeholder}
            />
        }
        off={<InputDeprecated {...props} />}
    />
)

export const StarRating: FC<
    StarRatingDeprecatedProps & StarRatingRedesignedProps
> = (props) => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<StarRatingRedesigned {...props} />}
        off={<StarRatingDeprecated {...props} />}
    />
)
