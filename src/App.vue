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
import navbar from './components/navbar/navbar.vue'
import foot from './components/navbar/footerseo.vue'

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
