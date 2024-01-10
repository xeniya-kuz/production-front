import type webpack from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolvers (options: BuildOptions): webpack.ResolveOptions {
  return {
    // расширения тех файлов, при импорте которых не надо будет указывать расширение (например import Component from '/component'(нет расширения))
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    // index главным по умолчанию, но тут мы указали явно
    mainFiles: ['index'],
    alias: {} // либо @ что тоже часто указывают
  }
}
