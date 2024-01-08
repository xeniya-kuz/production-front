import './styles/index.scss';
import { classNames } from '6shared/lib/classNames/classNames';
import { useTheme } from '1app/providers/ThemeProvider';
import { AppRouter } from './providers/ThemeProvider/router';
import { Navbar } from '3widgets/Navbar';
import { Sidebar } from '3widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '6shared/config/routeConfig/i18n/i18n';

// const Component = () => {
//   const { t, i18n } = useTranslation();
//   const toggle = () => {
//     i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
//   };
//   return <button onClick={toggle}>lan</button>;
// };

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      {/* Здесь Suspense нужен, т.к. переводы из i18n будут подгружаться чанками */}
      <Suspense fallback="Loading...">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
