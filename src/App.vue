<template>
  <v-app>
    <seonavbar></seonavbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    seonavbar: navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
