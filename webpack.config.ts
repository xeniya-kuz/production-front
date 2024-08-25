// //среда NodeJS, до установки ts
// const path = require('path');
// //подгружает наши файлы js в index.html, т.е. добавляет <script defer src="bundle.fdb2493bc4045c544048.js"></script>
// const HTMLWebpack = require('html-webpack-plugin');
// const webpack = require('webpack');

import type webpack from 'webpack'
import buildWebpackConfig from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    // entry: { bundle: path.resolve(__dirname, 'src', 'index.ts') }
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode ?? 'development'
  const isDev = mode === 'development'
  const PORT = !isNaN(env.port) ? env.port : 3000
  const apiUrl = env.apiUrl ?? 'http://localhost:8000'

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend'
  })
  return config
}
