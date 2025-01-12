import { buildCssLoader } from './loaders/buildCssLoader'
import type webpack from 'webpack'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders (isDev: boolean): webpack.RuleSetRule[] {
  // Если не используем ts, то нужен еще babel-loader
  // const tsLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/
  // }

  const cssLoader = buildCssLoader(isDev)

  const svgLoader = buildSvgLoader()

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [{ loader: 'file-loader' }]
  }

  const codebabelLoader = buildBabelLoader({ isTsx: false })
  const tsxCodebabelLoader = buildBabelLoader({ isTsx: true })

  //! порядок, при котором лоудеры возвращаются, имеет значение
  return [fileLoader, svgLoader, codebabelLoader, tsxCodebabelLoader, cssLoader]
}
