import { ThemeProvider } from '1app/providers/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './1app/App'
import { ErrorBoundary } from '1app/providers/ErrorBoundary'
import { StoreProvider } from '1app/providers/StoreProvider'
import { PageError } from '3widgets/PageError'
// библиотека для интренализации приложения (подключения разных языков)
import '6shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary fallback={<PageError/>}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
