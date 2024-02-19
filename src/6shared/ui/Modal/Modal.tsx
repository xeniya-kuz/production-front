import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Modal.module.scss'
import { useEffect, type MouseEvent, type ReactNode, useCallback, useState } from 'react'
import { Portal } from '6shared/ui/Portal/Portal'
import { useTheme } from '1app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

// мемоизировать компонент (memo) не имеет смысла, т.к. в кач-ве children всегда передается какая-то двевовидная структура, которая часто меняется и стоит дорого для мемоизации
export const Modal = ({ className, children, isOpen, onClose, lazy = false }: ModalProps): JSX.Element | null => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

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
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) { window.addEventListener('keydown', onKeyDown) }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  if (lazy && !isMounted) {
    return null
  }

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
