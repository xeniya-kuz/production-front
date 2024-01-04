import webpack from 'webpack';

export function buildResolvers(): webpack.ResolveOptions {
  return {
    // расширения тех файлов, при импорте которых не надо будет указывать расширение (например import Component from '/component'(нет расширения))
    extensions: ['.tsx', '.ts', '.js'],
  };
}
