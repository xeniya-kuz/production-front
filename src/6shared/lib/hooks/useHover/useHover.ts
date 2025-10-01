import { useCallback, useMemo, useState } from 'react'

interface UseHoverbind {
    onMouseEnter: () => void
    onMouseLeave: () => void
}

type UseHoverResult = [boolean, UseHoverbind]

export const useHover = (): UseHoverResult => {
    const [isHover, setIsHover] = useState(false)

    const onMouseEnter = useCallback(() => {
        setIsHover(true)
    }, [])

    const onMouseLeave = useCallback(() => {
        setIsHover(false)
    }, [])

    return useMemo(
        () => [isHover, { onMouseEnter, onMouseLeave }],
        [isHover, onMouseEnter, onMouseLeave],
    )
}
