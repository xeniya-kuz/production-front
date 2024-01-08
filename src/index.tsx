import { render } from 'react-dom';
import App from './1app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '1app/providers/ThemeProvider';
//библиотека для интренализации приложения (подключения разных языков)
import '6shared/config/routeConfig/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
