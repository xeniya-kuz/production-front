import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Page.module.scss'
import { type JSX, memo, useRef, type ReactNode, type UIEvent } from 'react'
import {
    useAppDispatch,
    useInfiniteScroll,
    useInitialEffect,
    useThrottle,
} from '@/6shared/lib/hooks'
import { useSelector } from 'react-redux'
import { pageActions } from '../model/slice/pageSlice'
import { useLocation } from 'react-router-dom'
import { selectScrollByPath } from '../model/selectors/selectScrollByPath/selectScrollByPath'
import { type StateSchema } from '@/1app/providers/StoreProvider'
import { type TestProps } from '@/6shared/types/tests'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { toggleFeatures } from '@/6shared/lib/features'

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
        // wrapperRef: toggleFeatures({
        //     name: 'isAppRedesigned',
        //     on: () => undefined,
        //     off: () => wrapperRef,
        // }),
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    })

    useInitialEffect(() => {
        if (wrapperRef.current !== null) {
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
            {onScrollEnd && (
                <div
                    className={styles.trigger}
                    ref={triggerRef}
                />
            )}
        </main>
    )
})
