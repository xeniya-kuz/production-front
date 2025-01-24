import { useCallback, useEffect, useRef, useState } from 'react'

interface UseModalProps {
  isOpen: boolean
  onClose: () => void
  delay?: number
}

interface UseModalReturn {
  isClosing: boolean
  close: () => void
  isMounted: boolean
}

/**
 * Переиспользуемый хук для модальных компонентов (drawer/modal)
 * @param delay
 * @param isOpen
 * @param onClose
 */
export const useModal = ({
  isOpen,
  onClose,
  delay = 0
}: UseModalProps): UseModalReturn => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const timerRef = useRef<NodeJS.Timeout>(null)

  const close = useCallback((): void => {
    setIsClosing(true)
    timerRef.current = setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, delay)
  }, [onClose, delay])

  // используем useCallback, потому что он мемоизирует ссылку и возвращает всегда одну и ту же
  const onKeyDown = useCallback((e: globalThis.KeyboardEvent): void => {
    if (e.key === 'Escape') {
      close()
    }
  }, [close])

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

  return {
    isClosing,
    close,
    isMounted
  }
}
