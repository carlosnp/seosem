<template>
		<v-layout row wrap>
			<v-flex xs10>
				<v-img :src="require('../assets/seo/seo.jpg')" contain></v-img>
			</v-flex>
			<v-flex xs2>
				<div class="headline py-4 px-1">
				El SEO o tráfico orgánico es el arte o metodología de preparar una web para que sea más comprensible y relevante para los motores de búsqueda
				</div>
			</v-flex>
      <v-flex xs12 class="font-light-italic py-4 blue lighten-2" tag="h1">
				<div class="text-xs-center text-uppercase">SEO (Search Engine Optimization)</div>
				<div class="text-xs-center">posicionamiento natural en buscadores</div>
      </v-flex>
			<v-flex xs12>
				<seo></seo>
			</v-flex>
		</v-layout>
</template>

<script>
	import seo from '../components/seob.vue'
	export default {
		data() {
			return {
				seo: ['keywords research', 'links building', 'sitemap optimization', 'software develoment', 'web desing', 'feedback', 'strategy', 'social network', 'content', 'traffic monitoring', 'ranking']
			}
		},
		components: {
			seo: seo
		}
	}
</script>