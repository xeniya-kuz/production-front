import MiniCssExtractPlugin from 'mini-css-extract-plugin'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function buildCssLoader (isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      //! порядок важен
      // Creates `style` nodes from JS strings
      // 'style-loader',
      // используем вместо style-loader
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: isDev
              ? '[name]__[local]_[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }
}
