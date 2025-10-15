import { Skeleton } from '@/6shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'
import { type JSX, memo } from 'react'
import { MainLayout } from '../MainLayout'
import styles from './AppLoaderLayout.module.scss'

interface AppLoaderLayoutProps {
    withSidebar?: boolean
}

export const AppLoaderLayout = memo(function AppLoaderLayout({
    withSidebar = false,
}: AppLoaderLayoutProps): JSX.Element {
    return (
        <MainLayout
            header={
                <HStack className={styles.header}>
                    <Skeleton
                        width={40}
                        height={40}
                        border="50%"
                    />
                </HStack>
            }
            content={
                <VStack
                    gap="16"
                    style={{ height: '100%' }}
                >
                    <Skeleton
                        width="70%"
                        height={32}
                        border="16px"
                    />
                    <Skeleton
                        width="40%"
                        height={16}
                        border="16px"
                    />
                    <Skeleton
                        width="50%"
                        height={16}
                        border="16px"
                    />

                    <Skeleton
                        height="40%"
                        border="16px"
                    />
                    <Skeleton
                        height="35%"
                        border="16px"
                    />
                </VStack>
            }
            sidebar={
                withSidebar ? (
                    <Skeleton
                        border="32px"
                        width={220}
                        height="100%"
                    />
                ) : (
                    <></>
                )
            }
        />
    )
})
