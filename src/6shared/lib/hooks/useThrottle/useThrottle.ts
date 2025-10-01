import { useCallback, useRef } from 'react'

export const useThrottle = (
    callback: (...args: any[]) => void,
    delay: number,
): (() => void) => {
    const throttleRef = useRef(false)

    return useCallback(
        (...args: any[]) => {
            if (!throttleRef.current) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                callback(...args)
                throttleRef.current = true

                setTimeout(() => {
                    throttleRef.current = false
                }, delay)
            }
        },
        [callback, delay],
    )
}
