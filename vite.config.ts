import { type ConfigEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

function getApiUrl(mode: string): string {
    if (mode === 'production') {
        return '/api'
    }

    return 'http://localhost:8000'
}

export default defineConfig((env: ConfigEnv) => {
    const mode = env.mode ?? 'development'
    const isDev = mode === 'development'
    const apiUrl = getApiUrl(mode)
    const project = 'frontend'

    return {
        plugins: [
            svgr({
                svgrOptions: {
                    icon: true,
                    replaceAttrValues: {
                        '#FFC700': 'currentColor',
                        '#74A2B2': 'currentColor',
                    },
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
                include: '**/*.svg',
            }),
            react(),
        ],
        resolve: {
            alias: [{ find: '@', replacement: '/src' }],
        },
        define: {
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        },
    }
})
