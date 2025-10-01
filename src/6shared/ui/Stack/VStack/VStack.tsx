import { type JSX } from 'react'
import { Flex, type FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = function VStack(props: VStackProps): JSX.Element {
    const { align = 'start' } = props

    return (
        <Flex
            {...props}
            direction="column"
            align={align}
        />
    )
}
