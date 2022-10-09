# nuxt bridge issue with Vuetify

## Short explanation
After one of `@nuxt/bridge` updates vuetify components began causing runtime errors:
* DEV: page builds successfully during SSR, but Vuetify scripts have `undefined` Vue at runtime
![image](https://user-images.githubusercontent.com/11289484/194767151-a97093fe-181a-4e5c-9813-eb55971688f5.png)
* PROD: some vuetify styles are missing
![image](https://user-images.githubusercontent.com/11289484/194767243-61598e5d-fe93-4ac0-abae-596278fca7fe.png)

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
