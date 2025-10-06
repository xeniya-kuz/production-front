import { type JSX } from 'react'
import { Flex, type FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const HStack = function HStack(props: HStackProps): JSX.Element {
    return (
        <Flex
            {...props}
            direction="row"
        />
    )
}
