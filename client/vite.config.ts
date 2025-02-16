import { type ConfigEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig((env: ConfigEnv) => {
  const mode = env.mode ?? 'development'
  const isDev = mode === 'development'
  const apiUrl = 'http://localhost:8000'
  const project = 'frontend'

  return {
    plugins: [
      svgr({ svgrOptions: { exportType: 'default' } }),
      react()
    ],
    resolve: {
      alias: [
        { find: '@', replacement: '/src' }
      ]
    },
    define: {
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project)
    }
  }
})
