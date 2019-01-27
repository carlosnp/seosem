<template>
  <v-app>
    <seonavbar></seonavbar>
    <v-content>
      <router-view/>
    </v-content>
    <seofoot></seofoot>
  </v-app>
</template>

<script>
import navbar from './components/navbar.vue'
import foot from './components/footerseo.vue'

export default {
  name: 'App',
  components: {
    seonavbar: navbar,
    seofoot: foot
  },
  data () {
    return {
      //
    }
  }
}
</script>
