<template>
  <v-app>
    <v-main>
      <v-container>
        Hello Nuxt!
        <v-btn color="accent" @click="log">btn</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    console.log(this.$vuetify)
  },
  methods: {
    log(...args) {
      console.log(...args)
    }
  }
}
</script>
