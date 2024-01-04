import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export default function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    //все ниже обязательно указывать
    mode: mode,
    //точка входа (название:путь относительно этого файла)
    entry: {
      bundle: paths.entry,
    },
    //bundle
    output: {
      //'build' - название папки
      path: paths.build,
      // шаблон для динамического названия файла, брарузер кеширует файлы бандла: если название не поменялось, то файл не обновится.
      // contenthash рандомный набор букв и цифр
      filename: '[name].[contenthash].js',
      //если не указать, то каждый раз будет создаваться новый файл, а старые не удаляются
      clean: true,
    },
    plugins: buildPlugins(paths),
    module: {
      //файлы с разными расширенями будут обрабатывать разные лоудеры
      rules: buildLoaders(isDev),
    },

    resolve: buildResolvers(),
    //помогает четко видеть, где в коде произошла ошибка
    devtool: isDev ? 'inline-source-map' : undefined,
    //локальный сервер (port:3000 и hot reloading)
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
