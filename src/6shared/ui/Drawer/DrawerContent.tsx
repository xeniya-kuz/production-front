import { useAnimationLibs } from '@/6shared/lib/components/AnimationProvider/AnimationProvider'
import { memo, useCallback, useEffect } from 'react'
import { Portal } from '../Portal/Portal'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { Overlay } from '../Overlay/Overlay'
import styles from './DrawerContent.module.scss'
import { type DrawerProps } from './types'

const height = window.innerHeight - 100

export const DrawerContent = memo(function DrawerContent (props: DrawerProps) {
  const {
    className,
    children,
    onClose,
    isOpen
  } = props
  const { Spring, Gesture } = useAnimationLibs()
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  const openDrawer = useCallback(() => {
    Promise.all(api.start(
      {
        y: 0,
        immediate: false
      }))
      .catch((e) => {
        console.log(e)
      })
  }, [api])

  useEffect(() => {
    if (isOpen) {
      openDrawer()
    }
  }, [api, isOpen, openDrawer])

  const close = (velocity = 0): void => {
    Promise.all(api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose
    }))
      .catch((e) => {
        console.log(e)
      })
  }

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel
    }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          openDrawer()
        }
      } else {
        Promise.all(api.start({
          y: my, immediate: true
        }))
          .catch((e) => {
            console.log(e)
          })
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true
    }
  )

  if (!isOpen) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
      <Portal>
          <div className={classNames(styles.drawer, [className, 'app_drawer'])}>
              <Overlay onClick={close} />
              {/* @ts-expect-error - проблема типизации: ругается на className и children */}
              <Spring.a.div
                  className={styles.content}
                  style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                  {...bind()}
              >
                  {children}
              </Spring.a.div>
          </div>
      </Portal>
  )
})
