import { buildCssLoader } from './loaders/buildCssLoader'
import type webpack from 'webpack'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export function buildLoaders (isDev: boolean): webpack.RuleSetRule[] {
  // Если не используем ts, то нужен еще babel-loader
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoader = buildCssLoader(isDev)

  const svgLoader = buildSvgLoader()

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [{ loader: 'file-loader' }]
  }

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        // вытаскивает переводы в отдельную папку и подтягивает переводы
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  }

  //! порядок, при котором лоудеры возвращаются, имеет значение
  return [fileLoader, svgLoader, babelLoader, tsLoader, cssLoader]
}
