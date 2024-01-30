import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import i18n from '6shared/config/i18n/i18nForTests'

export interface componentRenderProps {
  route?: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function ComponentRender (component: ReactNode, props: componentRenderProps = {}) {
  const { route = '/' } = props

  return render(
      <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18n}>
              {component}
          </I18nextProvider>
      </MemoryRouter>)
}
