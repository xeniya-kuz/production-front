import { Suspense, type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from '6shared/config/i18n/i18nForTests'
import { type StateSchema, StoreProvider } from '1app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

export interface componentRenderProps {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function ComponentRender (component: ReactNode, props: componentRenderProps = {}) {
  const { route = '/', initialState } = props

  return render(
      <StoreProvider initialState={initialState}>
          <MemoryRouter initialEntries={[route]}>
              <I18nextProvider i18n={i18nForTests}>
                  <Suspense fallback={''}>
                      {component}
                  </Suspense>
              </I18nextProvider>
          </MemoryRouter>
      </StoreProvider>)
}
