import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export default function buildWebpackConfig (
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options
  return {
    // все ниже обязательно указывать
    mode,
    // точка входа (название:путь относительно этого файла)
    entry: {
      bundle: paths.entry
    },
    // bundle
    output: {
      // 'build' - название папки
      path: paths.build,
      // шаблон для динамического названия файла, брарузер кеширует файлы бандла: если название не поменялось, то файл не обновится.
      // contenthash рандомный набор букв и цифр
      filename: '[name].[contenthash].js',
      // если не указать, то каждый раз будет создаваться новый файл, а старые не удаляются
      clean: true,
      // если не указать, то урлы типа articles/1 будут искаться в папке articles, которой у нас в бандле нет.
      // (Примерный запрос: http://localhost:3000/articles/bundle.87e98b914bbc91817038.js)
      publicPath: '/'
    },
    plugins: buildPlugins(options),
    module: {
      // файлы с разными расширенями будут обрабатывать разные лоудеры
      rules: buildLoaders(isDev)
    },

    resolve: buildResolvers(options),
    // помогает четко видеть, где в коде произошла ошибка
    devtool: isDev ? 'inline-source-map' : undefined,
    // локальный сервер (port:3000 и hot reloading)
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
