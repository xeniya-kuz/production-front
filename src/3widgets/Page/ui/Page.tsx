import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Page.module.scss'
import { memo, type MutableRefObject, useRef, type ReactNode, type UIEvent } from 'react'
import { useInfiniteScroll, useInitialEffect, useThrottle } from '6shared/lib/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { pageActions } from '../model/slice/pageSlice'
import { useLocation } from 'react-router-dom'
import { selectScrollByPath } from '../model/selectors/selectScrollByPath/selectScrollByPath'
import { type StateSchema } from '1app/providers/StoreProvider'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo(function Page
({ className, children, onScrollEnd }: PageProps): JSX.Element {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => selectScrollByPath(state, pathname))

  useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEnd })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>): void => {
    dispatch(pageActions.setScrollPosition({
      path: pathname, position: event.currentTarget.scrollTop
    }))
  }, 500)

  return (
      <main
        ref={wrapperRef}
        className={classNames(styles.page, [className])}
        onScroll={onScroll}
      >
          {children}
          {onScrollEnd !== undefined && <div className={styles.trigger} ref={triggerRef}/>}
      </main>

  )
})
