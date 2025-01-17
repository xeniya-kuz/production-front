import { useAnimationLibs } from '@/6shared/lib/components/AnimationProvider/AnimationProvider'
import { type JSX } from 'react'
import { DrawerContent } from './DrawerContent'
import { type DrawerProps } from './types'

export const DrawerAsync = (props: DrawerProps): JSX.Element | null => {
  const { isLoaded } = useAnimationLibs()

  if (!isLoaded) {
    return null
  }

  return <DrawerContent {...props} />
}
