import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Modal.module.scss'
import { useEffect, type MouseEvent, type ReactNode, useCallback } from 'react'
import { Portal } from '6shared/ui/Portal/Portal'
import { useTheme } from '1app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps): JSX.Element => {
  const mods = {
    [styles.opened]: isOpen
  }

  const { theme } = useTheme()

  const closeHandler = useCallback((): void => {
    onClose()
  }, [onClose])

  //! Новые ссылки на каждый ререндер
  const onContentClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
  }

  // используем useCallback, потому что он мемоизирует ссылку и возвращает всегда одну и ту же
  const onKeyDown = useCallback((e: globalThis.KeyboardEvent): void => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) { window.addEventListener('keydown', onKeyDown) }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return (
      <Portal>
          <div className={classNames(styles.modal, [theme, className], mods)} >
              <div className={styles.overlay} onClick={closeHandler}>
                  <div className={styles.content} onClick={onContentClick}>
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  )
}
