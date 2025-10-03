// //среда NodeJS, до установки ts
// const path = require('path');
// //подгружает наши файлы js в index.html, т.е. добавляет <script defer src="bundle.fdb2493bc4045c544048.js"></script>
// const HTMLWebpack = require('html-webpack-plugin');
// const webpack = require('webpack');

import type webpack from 'webpack'
import buildWebpackConfig from './config/build/buildWebpackConfig'
import {
    type BuildMode,
    type BuildEnv,
    type BuildPaths,
} from './config/build/types/config'
import path from 'path'

function getApiUrl(mode: BuildMode, apiUrl?: string): string {
    if (apiUrl) {
        return apiUrl
    }

    if (mode === 'production') {
        return '/api'
    }

    return 'http://localhost:8000'
}

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        // entry: { bundle: path.resolve(__dirname, 'src', 'index.ts') }
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
        locales: path.resolve(__dirname, 'src', 'locales'),
    }

    const mode = env.mode ?? 'development'
    const isDev = mode === 'development'
    const PORT = !isNaN(env.port) ? env.port : 3000
    const apiUrl = getApiUrl(mode, env.apiUrl)

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    })
    return config
}
