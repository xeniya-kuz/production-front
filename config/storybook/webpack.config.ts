import webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { type RuleSetRule } from 'webpack'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import CopyPlugin from 'copy-webpack-plugin'
// переопределяем вебпак конфиг сторибука(!), который уже (где-то?) настроен

export default ({
    config,
}: {
    config: webpack.Configuration
}): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: path.resolve(__dirname, '..', '..', 'build', 'locales'),
        locales: path.resolve(__dirname, '..', '..', 'src', 'locales'),
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('ts', 'tsx')
    config.resolve!.alias = {
        ...config.resolve?.alias,
        '@': paths.src,
    }

    if (config.module?.rules !== undefined) {
        config.module.rules = config.module.rules?.map(
            (rule: RuleSetRule | '...') => {
                if (
                    rule !== '...' &&
                    rule.test instanceof RegExp &&
                    rule.test.toString().includes('svg')
                ) {
                    // отключаем обработку svg файлов
                    return { ...rule, exclude: /\.svg$/i }
                }
                return rule
            },
        )
    }

    config.module?.rules?.push(buildCssLoader(true))
    config.module?.rules?.push(buildSvgLoader())
    // помогает прокидывать глобальные переменные (окружения??) в сам проект
    config.plugins?.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('http://localhost:8000'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    )

    config.plugins?.push(
        new CopyPlugin(
            // копируем переводы из public в build
            {
                patterns: [{ from: paths.locales, to: paths.buildLocales }],
            },
        ),
    )

    return config
}
