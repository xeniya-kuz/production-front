import { BuildOptions } from './types/config';
import type { Configuration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): Configuration {
  return {
    port: options.port,
    //автоматически открывает в браузере страницу с приложением
    open: true,
    //иначе при обновлении страницы на каком-то пути (/about) выпаадет ошибка can't get
    historyApiFallback: true,
    //hot replacement (reloading)? also needs plugin HotModuleReplacementPlugin
    hot: true,
  };
}
