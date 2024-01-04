import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './components/AboutPage/AboutPage.async';
import { MainPageAsync } from './components/MainPage/MainPage.async';
import { Suspense, useContext, useState } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', theme, {})}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      {/* без Suspense будут ошибки в консоли */}
      {/* Нужно, потому что у нас копмоненты подгружаются асинхронно (чанки=lazy loading)*/}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
          <Route />
        </Routes>
      </Suspense>
    </div>
  );
}
