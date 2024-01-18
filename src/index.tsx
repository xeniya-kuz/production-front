// eslint-disable-next-line
import { render } from 'react-dom'
import App from './1app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '1app/providers/ThemeProvider'
// библиотека для интренализации приложения (подключения разных языков)
import '6shared/config/routeConfig/i18n/i18n'
import { ErrorBoundary } from '1app/providers/ErrorBoundary'
import { PageError } from '3widgets/PageError'

render(
    <BrowserRouter>
        <ErrorBoundary fallback={<PageError/>}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)
