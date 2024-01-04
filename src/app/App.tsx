import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/ThemeProvider/router';
export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', theme, {})}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter />
    </div>
  );
}
