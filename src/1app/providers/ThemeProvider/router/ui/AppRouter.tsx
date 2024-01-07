import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '6shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    // без Suspense будут ошибки в консоли
    // Нужно, потому что у нас копмоненты подгружаются асинхронно (чанки=lazy loading)
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={<div className="page-wrapper">{element}</div>}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
export default AppRouter;
