import { useTheme } from '1app/providers/ThemeProvider'
import { memo, type ReactNode } from 'react'
import { classNames, type Mods } from '6shared/lib/classNames/classNames'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import styles from './Drawer.module.scss'
import { useModal } from '6shared/lib/hooks'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

export const Drawer = memo(function Drawer (props: DrawerProps) {
  const {
    className,
    children,
    onClose,
    isOpen,
    lazy
  } = props
  const { theme } = useTheme()
  const { close, isClosing, isMounted } = useModal({ isOpen, onClose, delay: 300 })

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
      <Portal>
          <div className={classNames(styles.drawer, [className, theme, 'app_drawer'], mods)}>
              <Overlay onClick={close} />
              <div className={styles.content} >
                  {children}
              </div>
          </div>
      </Portal>
  )
})
