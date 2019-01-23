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
			<v-expansion-panel expand focusable>
				<v-expansion-panel-content v-for="question in questions" :key="question.title">
				<!-- Titulo -->
					<div class="text-uppercase display-1" slot="header">¿{{question.title}}?</div>
					<v-card>
						<v-card-text class="px-4 grey--text">
						<!-- Contenido del proyecto -->
						<div class="blue--text headline">{{question.content}}</div>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
			</v-flex>

			<v-flex xs12 sm6>
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

import begin from '../components/beginmarketin.vue'
import definition from '../components/definitions.vue'

	export default {
		components: {
			begin: begin,
			definition: definition
		},
		data() {
			return {
				questions: [
					{
						title: 'qué',
						content:'que producto se va a vender'
					},
					{
						title: 'quién',
						content:'publico suceptible'
					},
					{
						title: 'cómo',
						content:'medios que se utilizaran'
					},
					{
						title: 'dónde',
						content:''
					},
					{
						title: 'cuándo',
						content:'periodo de tiempo'
					},
					{
						title: 'por qué',
						content:'el producto es interesante, que caracteristicas tiene'
					},
				],
			}
		}
	}
</script>

<style scoped>
.carousel {
  height: 300px !important; 
}	
</style>