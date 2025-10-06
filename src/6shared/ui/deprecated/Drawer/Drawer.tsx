import { AnimationPropvider } from '@/6shared/lib/components/AnimationProvider/AnimationProvider'
import { type JSX } from 'react'
import { DrawerAsync } from './Drawer.async'
import { type DrawerProps } from './types'

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Drawer = (props: DrawerProps): JSX.Element => {
    return (
        <AnimationPropvider>
            <DrawerAsync {...props} />
        </AnimationPropvider>
    )
}
