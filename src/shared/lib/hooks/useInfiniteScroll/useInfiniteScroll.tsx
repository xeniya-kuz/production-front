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

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '10px',
                threshold: 1.0,
            }

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options)

            if (triggerElement) {
                observer.observe(triggerElement)
            }

            return () => {
                if (observer && triggerElement) {
                    // observer.disconnect()
                    observer.unobserve(triggerElement)
                }
            }
        }
    }, [wrapperRef, triggerRef, callback])
}
