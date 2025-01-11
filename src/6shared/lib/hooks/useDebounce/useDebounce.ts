/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useCallback, useRef } from 'react'

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
