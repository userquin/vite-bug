import { defineConfig } from 'vite'
import preactRefresh from '@prefresh/vite'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`
  },
  base: '/pages/XfinityDesignSystem/xds-living-docs/',
  plugins: [
    preactRefresh()
  ]
})
