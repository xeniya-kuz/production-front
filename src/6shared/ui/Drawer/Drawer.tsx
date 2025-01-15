import { useTheme } from '1app/providers/ThemeProvider'
import { memo, type ReactNode } from 'react'
import { classNames, type Mods } from '6shared/lib/classNames/classNames'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import cls from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Drawer = memo(function Drawer (props: DrawerProps) {
  const {
    className,
    children,
    onClose,
    isOpen
  } = props
  const { theme } = useTheme()

  const mods: Mods = {
    [cls.opened]: isOpen
  }

  return (
      <Portal>
          <div className={classNames(cls.drawer, [className, theme, 'app_drawer'], mods)}>
              <Overlay onClick={onClose} />
              <div
                  className={cls.content}
                >
                  {children}
              </div>
          </div>
      </Portal>
  )
})
