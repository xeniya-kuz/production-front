import { ToggleFeatures } from '@/shared/lib/features'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import {
    Input as InputDeprecated,
    type InputProps as InputDeprecatedProps,
} from '@/shared/ui/deprecated/Input'
import {
    Input as InputRedesigned,
    type InputProps as InputRedesignedProps,
} from '@/shared/ui/redesigned/Input'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text'
import {
    Button as ButtonDeprecated,
    type ButtonProps as ButtonDeprecatedProps,
} from '@/shared/ui/deprecated/Button'
import {
    Button as ButtonRedesigned,
    type ButtonProps as ButtonRedesignedProps,
} from '@/shared/ui/redesigned/Button'
import {
    StarRating as StarRatingDeprecated,
    type StarRatingProps as StarRatingDeprecatedProps,
} from '@/shared/ui/deprecated/StarRating'
import {
    StarRating as StarRatingRedesigned,
    type StarRatingProps as StarRatingRedesignedProps,
} from '@/shared/ui/redesigned/StarRating'

import { type FC, type JSX, type ReactNode } from 'react'

export const Card: FC<{ className?: string; children: ReactNode }> = (
    props,
): JSX.Element => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={
            <CardRedesigned
                padding="24"
                {...props}
            />
        }
        off={<CardDeprecated {...props} />}
    />
)

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
