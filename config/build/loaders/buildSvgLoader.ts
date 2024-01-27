export function buildSvgLoader (): {
  test: RegExp
  use: string[]
} {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }
}
