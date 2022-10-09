import { defineNuxtConfig } from '@nuxt/bridge'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  plugins: ['@/plugins/vuetify.js'],
  bridge: {
    vite: true
  },
  build: {
    transpile: ['vuetify', 'vuetify/lib/components']
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          {
            type: 'component',
            resolve: name => {
              if (name.match(/^V[A-Z]/)) { return { name, from: 'vuetify/lib' } }
            }
          }
        ]
      })
    ],
  },
  nitro: {
    sourceMap: process.env.NODE_ENV === 'development',
    imports: {
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/]
    },
  },
})
