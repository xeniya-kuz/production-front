/* eslint-disable @typescript-eslint/explicit-function-return-type */
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

interface BuildBabelLoaderProps {
  isTsx: boolean
  isDev: boolean
}

export function buildBabelLoader ({ isTsx, isDev }: BuildBabelLoaderProps) {
  const isProd = !isDev

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        // добавляет cache
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        // вытаскивает переводы в отдельную папку и подтягивает переводы
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx
            }
          ],
          '@babel/plugin-transform-runtime',
          isTsx && isProd && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid']
            }
          ]
        ].filter(Boolean)
      }
    }
  }
}
