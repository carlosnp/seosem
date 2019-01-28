<template>
	<v-layout row wrap justify-space-around>
		
			<v-flex xs12 class="font-light-italic text-uppercase py-4 light-green accent-3" tag="h1">
				<div class="text-xs-center"> Algunas Definiciones de Marketing </div>
			</v-flex>
			<v-flex xs12>
				<definition></definition>
			</v-flex>


			<v-flex xs12 class="font-light-italic text-uppercase py-5 light-green accent-3" tag="h1">
				<div class="text-xs-center"> Preguntas que debe responder Marketing </div>
			</v-flex>
			<v-flex xs12>
			</v-flex>

			<v-flex xs12 sm6>
				<question></question>
			</v-flex>

			<v-flex xs12 class="font-light-italic text-uppercase py-5 light-green accent-3" tag="h1">
				<div class="text-xs-center"> ¿Qué debemos saber? </div>
			</v-flex>
			<v-flex xs12>
				<begin></begin>
			</v-flex>

	</v-layout>
</template>

<script>

import begin from '../components/marketing/beginmarketin.vue'
import definition from '../components/marketing/definitions.vue'
import question from '../components/marketing/questions.vue'

	export default {
		components: {
			begin: begin,
			definition: definition,
			question: question
		},
	}
</script>

<style scoped>
.carousel {
  height: 300px !important; 
}	
</style>