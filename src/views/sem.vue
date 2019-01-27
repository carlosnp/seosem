<template>
	<v-layout row wrap>
		<v-flex xs12 class="font-light-italic py-3 blue lighten-2" tag="h1">
			<div class="text-xs-center text-uppercase">SEM (Seach Engine Marketing)</div>
			<div class="text-xs-center">posicionamiento natural en buscadores</div>
		</v-flex>
		<v-flex xs12>
			<sem></sem>
		</v-flex>
    <v-flex xs12 py-2 class="display-1 font-weight-black text-uppercase text-xs-center">
      Diferencias entre SEO y SEM
    </v-flex>
    <v-flex xs12>
      <diferencias></diferencias>
    </v-flex>
	</v-layout>
</template>

<script>
		import sem from '../components/semA.vue'
		import tableseosem from '../components/tableseosem.vue'
		export default {
			data() {
				return {

				}
			},
			components: {
				sem: sem,
				diferencias: tableseosem
			}
		}
</script>