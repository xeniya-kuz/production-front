import { Flex, type FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = function HStack
(props: HStackProps): JSX.Element {
  return (
      <Flex {...props} direction='row' />
  )
}
