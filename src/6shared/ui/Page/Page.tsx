import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Page.module.scss'
import { memo, type MutableRefObject, useRef, type ReactNode } from 'react'
import { useInfiniteScroll } from '6shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo(function Page
({ className, children, onScrollEnd }: PageProps): JSX.Element {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEnd })

  return (
      <main
        ref={wrapperRef}
        className={classNames(styles.page, [className])}
      >
          {children}
          <div ref={triggerRef}/>
      </main>

  )
})
