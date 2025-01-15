import { useTheme } from '1app/providers/ThemeProvider'
import { classNames, type Mods } from '6shared/lib/classNames/classNames'
import { type MouseEvent, useCallback, useEffect, useRef, useState, type JSX, type ReactNode } from 'react'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import styles from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

// мемоизировать компонент (memo) не имеет смысла, т.к. в кач-ве children всегда передается какая-то двевовидная структура, которая часто меняется и стоит дорого для мемоизации
export const Modal = ({ className, children, isOpen, onClose, lazy = false }: ModalProps): JSX.Element | null => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const timerRef = useRef<NodeJS.Timeout>(null)
  const { theme } = useTheme()

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing
  }

  const closeHandler = useCallback((): void => {
    setIsClosing(true)
    timerRef.current = setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, ANIMATION_DELAY)
  }, [onClose])

  //! Новые ссылки на каждый ререндер
  const onContentClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
  }

  // используем useCallback, потому что он мемоизирует ссылку и возвращает всегда одну и ту же
  const onKeyDown = useCallback((e: globalThis.KeyboardEvent): void => {
    console.log('onKeyDown', e.key)
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
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  if (lazy && !isMounted) {
    return null
  }

  return (
      <Portal>
          <div className={classNames(styles.modal, [theme, className], mods)} >
              <Overlay onClick={closeHandler}/>
              <div className={styles.content} onClick={onContentClick}>
                  {children}
              </div>
          </div>
      </Portal>
  )
}
