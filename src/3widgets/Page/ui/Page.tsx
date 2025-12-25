import { type StateSchema } from '@/1app/providers/StoreProvider'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { toggleFeatures } from '@/6shared/lib/features'
import {
    useAppDispatch,
    useInfiniteScroll,
    useInitialEffect,
    useThrottle,
} from '@/6shared/lib/hooks'
import { type TestProps } from '@/6shared/types/tests'
import { type JSX, type ReactNode, memo, type UIEvent, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { selectScrollByPath } from '../model/selectors/selectScrollByPath/selectScrollByPath'
import { pageActions } from '../model/slice/pageSlice'
import styles from './Page.module.scss'

interface PageProps extends TestProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = memo(function Page({
    className,
    children,
    onScrollEnd,
    ...testProps
}: PageProps): JSX.Element {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const triggerRef = useRef<HTMLDivElement | null>(null)
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: StateSchema) =>
        selectScrollByPath(state, pathname),
    )

    useInfiniteScroll({
        wrapperRef: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => undefined,
            off: () => wrapperRef,
        }),
        triggerRef,
        callback: onScrollEnd,
    })

    useInitialEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTop = scrollPosition
        }
    })

    const onScroll = useThrottle((event: UIEvent<HTMLDivElement>): void => {
        dispatch(
            pageActions.setScrollPosition({
                path: pathname,
                position: event.currentTarget.scrollTop,
            }),
        )
    }, 500)

    // TODO: classPage при выполнении remove-toggle не удалится, надо дополнить линтер, чтобы он ругался, если в on и off передается функция с телом {}, либо поправить сам скрипт. А так же в идеале сделать так, чтобы старые функции (и файлы) тоже удалялись. Например, если в off передавать переменную или отдельный компонент
    const classPage = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => styles.pageRedesigned,
        off: () => styles.page,
    })

    return (
        <main
            ref={wrapperRef}
            className={classNames(classPage, [className])}
            onScroll={onScroll}
            data-testid={testProps['data-testid'] ?? DATA_TEST_ID.page}
        >
            {children}
            {onScrollEnd ? (
                <div
                    className={styles.trigger}
                    ref={triggerRef}
                />
            ) : null}
        </main>
    )
})
