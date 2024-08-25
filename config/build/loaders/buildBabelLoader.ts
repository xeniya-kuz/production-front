// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function buildBabelLoader () {
  return {
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
}
