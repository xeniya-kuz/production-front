import { ThemeProvider } from '1app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import App from './1app/App'
import { ErrorBoundary } from '1app/providers/ErrorBoundary'
import { StoreProvider } from '1app/providers/StoreProvider'
import { PageError } from '3widgets/PageError'
import { createRoot } from 'react-dom/client'
// библиотека для интренализации приложения (подключения разных языков)
import '6shared/config/i18n/i18n'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Контейнер не найден. Не удалось вмонтировать реакт приложение')
}
const root = createRoot(container)

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary fallback={<PageError/>}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
)
