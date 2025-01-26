import HTMLWebpack from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CopyPlugin from 'copy-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export function buildPlugins ({
  paths,
  isDev,
  apiUrl,
  project
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpack({
      // без этой строки index.html каждый раз создается "чистым", т.е. в нем нет <div class="root"></div>, а нам надо для встраивания кода. А теперь используется наш index.html в качестве шаблона
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    // помогает прокидывать глобальные переменные (окружения??) в сам проект
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project)
    }),
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: false
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        }
      }
    })
  ]

  if (isDev) {
    plugins.push(
      // hot replacement (reloading), also needs hot: true in devServer
      new webpack.HotModuleReplacementPlugin()
    )
    plugins.push(
      // HotModuleReplacementPlugin плохо работал с реактом
      new ReactRefreshWebpackPlugin()
    )
    plugins.push(new BundleAnalyzerPlugin(
      // чтобы страница не открывалась автоматически при каждой сборке
      { openAnalyzer: false }
    ))
  } else {
    // чтобы css было не в файлах js, а отдельно
    // css/ - папка, куда попадают все css файлы
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))

    plugins.push(new CopyPlugin(
      // копируем переводы из public в build
      {
        patterns: [
          { from: paths.locales, to: paths.buildLocales }
        ]
      }
    ))
  }

  return plugins
}
