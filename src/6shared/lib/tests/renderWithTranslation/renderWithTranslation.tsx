import i18n from '6shared/config/routeConfig/i18n/i18nForTests'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'

export function renderWithTranslation (component: ReactNode) {
  return render(<I18nextProvider i18n={i18n}>
      {component}
  </I18nextProvider>)
}
