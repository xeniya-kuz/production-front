// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

interface BuildBabelLoaderProps {
  isTsx?: boolean
}

export function buildBabelLoader ({ isTsx }: BuildBabelLoaderProps) {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
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
          ],
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx
            }
          ],
          '@babel/plugin-transform-runtime',
          isTsx && [
            babelRemovePropsPlugin(),
            {
              props: ['data-testid']
            }
          ]
        ]
      }
    }
  }
}
