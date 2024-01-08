import HTMLWebpack from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildPaths } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(
  paths: BuildPaths,
  isDev: boolean
): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpack({
      // без этой строки index.html каждый раз создается "чистым", т.е. в нем нет <div class="root"></div>, а нам надо для встраивания кода. А теперь используется наш index.html в качестве шаблона
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    //чтобы css было не в файлах js, а отдельно
    //css/ - папка, куда попадают все css файлы
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    //помогает прокидывать глобальные переменные (окружения??) в сам проект
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
}
