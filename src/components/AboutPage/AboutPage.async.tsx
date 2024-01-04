import { lazy } from 'react';
//нужно, чтобы бандл состоял не из всех файлов сразу, а из отдельных для загрузки только того контента, который нужен пользователю
export const AboutPageAsync = lazy(() => import('./AboutPage'));
