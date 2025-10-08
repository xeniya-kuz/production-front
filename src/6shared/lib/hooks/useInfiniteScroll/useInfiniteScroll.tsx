import { type RefObject, useEffect } from 'react'

export interface UseInfiniteScrollOptions {
    callback?: () => void
    triggerRef: RefObject<HTMLElement | null>
    wrapperRef?: RefObject<HTMLElement | null>
}

export const useInfiniteScroll = ({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScrollOptions): void => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null
        const wrapperElement = wrapperRef?.current ?? null
        const triggerElement = triggerRef.current

        if (callback !== undefined) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            }

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options)

            if (triggerElement !== null) {
                observer.observe(triggerElement)
            }

            return () => {
                if (observer !== null && triggerElement !== null) {
                    // observer.disconnect()
                    observer.unobserve(triggerElement)
                }
            }
        }
    }, [wrapperRef, triggerRef, callback])
}
