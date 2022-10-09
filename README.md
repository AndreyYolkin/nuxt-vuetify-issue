# nuxt bridge issue with Vuetify

## Short explanation
After one of `@nuxt/bridge` updates vuetify components began causing runtime errors:
* DEV: page builds successfully during SSR, but Vuetify scripts have `undefined` Vue at runtime
* PROD: some vuetify styles are missing

## Build Setup

```bash
# install dependencies
$ npm ci

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

```
