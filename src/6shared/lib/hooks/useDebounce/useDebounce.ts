/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useCallback, useRef } from 'react'

/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */
export const useDebounce = (callback: (...args: any[]) => void, delay: number): () => void => {
  const timer = useRef<any>(null)

  return useCallback((...args: any[]) => {
    if (timer.current !== null) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])
}
