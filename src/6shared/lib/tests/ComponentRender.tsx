import { type JSX, Suspense, type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from '@/6shared/config/i18n/i18nForTests'
import { type StateSchema, StoreProvider } from '@/1app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'

export interface componentRenderProps {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

interface TestProviderProps {
    children: ReactNode
    options?: componentRenderProps
}

export function TestProvider({
    children,
    options = {},
}: TestProviderProps): JSX.Element {
    const { route = '/', initialState, asyncReducers } = options

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialState}
            >
                <I18nextProvider i18n={i18nForTests}>
                    <Suspense fallback={''}>{children}</Suspense>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}

export function ComponentRender(
    component: ReactNode,
    props: componentRenderProps = {},
) {
    return render(<TestProvider options={props}>{component}</TestProvider>)
}
