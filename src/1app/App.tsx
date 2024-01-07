import './styles/index.scss';
import { classNames } from '6shared/lib/classNames/classNames';
import { useTheme } from '1app/providers/ThemeProvider';
import { AppRouter } from './providers/ThemeProvider/router';
import { Navbar } from '3widgets/Navbar';
import { Sidebar } from '3widgets/Sidebar';
export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}
