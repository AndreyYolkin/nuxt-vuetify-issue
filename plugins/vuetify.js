import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework.js'

const theme = {
  primary: '#2E294E',
  secondary: '#820263',
  accent: '#D90368',
}

const options = {
  theme: {
    dark: true,
    themes: {
      dark: theme,
      light: theme,
    },
    options: {
      customProperties: true,
    },
  },
}

Vue.use(Vuetify)

// extracted from `@nuxtjs/vuetify` New plugin format didn't solve the problem
export default (ctx) => {
  const vuetifyOptions = typeof options === 'function' ? options(ctx) : options

  const vuetify = new Vuetify(vuetifyOptions)

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
