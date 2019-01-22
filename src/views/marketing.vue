<template>
	<v-layout row wrap justify-space-around>
		
			<v-flex xs12 class="font-light-italic text-uppercase py-3 light-green accent-3" tag="h1">
				<div class="text-xs-center"> Algunas Definiciones de Marketing </div>
			</v-flex>

			<v-carousel height="420" class="text-md-center" interval="10000" hide-delimiters>
				<v-carousel-item v-for="item in mark" :key="item.text" :src="item.text" >
					<v-layout align-center justify-center row fill-height>
						<v-card flat color="blue-green darken-1" class="white--text" height="420" max-width="95%">
							<v-card-title> {{ item.time }} </v-card-title>
							<v-card-text>
								<v-layout align-center column fill-height>
									<div class="display-2"> "{{ item.text }}" </div>
									<div class="blue--text headline"> {{ item.autor }} </div> 
								</v-layout> 
							</v-card-text>
						</v-card>
					</v-layout>
				</v-carousel-item>
			</v-carousel>

			<v-flex xs12 class="font-light-italic text-uppercase py-3 light-green accent-3" tag="h1">
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

			<v-flex xs12 class="font-light-italic text-uppercase py-3 light-green accent-3" tag="h1">
				<div class="text-xs-center"> Antes de comenzar una campaña de Marketing </div>
			</v-flex>
			<v-flex xs12 sm8>
			<v-expansion-panel expand focusable>
				<v-expansion-panel-content v-for="question in marketing" :key="question.title">
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

	</v-layout>
</template>

<script>
	export default {
		data() {
			return {
				mark: [
					{
						text:'Resultado de las actividades empresariales que dirigen el flujo de bienes y servicios desde el productor hasta el consumidor.',
						time: 'Años 60',
						autor: '',
					},
					{
						text: 'Proceso de planificación y ejecución de la concepción, fijación de precios, comunicación y distribución de ideas, bienes y servicios para crear intercambios que satisfagan los objetivos de los individuos y las organizaciones.',
						time: 'Año 1985',
						autor: 'Concepto de MARCA'
					},
					{
						text: 'Marketing es una función organizativa y un conjunto de procesos para crear, comunicar y entregar valor a los clientes y para gestionar las relaciones con los clientes mediante procedimientos que beneficien a la organización y a todos los interesados',
						time: 'Actual',
						autor: ''
					},
					{
						text: 'Se trata de un proceso donde resulta completamente imprescindible conocer de antemano las necesidades de los consumidores para que posteriormente la empresa centre toda su actividad en buscar las fórmulas idóneas para satisfacerlas',
						time: '',
						autor: 'John A. Howard. Profesor en la Universidad de Columbia.'
					},
					{
						text: 'El marketing es una combinación de arte, ciencia, causa, efecto, magia y lógica.',
						time: '',
						autor: 'Keith Weed, Director de Marketing y Comunicación de Unilever.'
					},
					{
						text: 'El marketing es la acción de presentar algo a alguien.',
						time: '',
						autor: 'Michael Miller, en The Ultimate Web Marketing Guide.'
					},
					{
						text: 'El proceso social y administrativo por el cual los grupos e individuos satisfacen sus necesidades al crear e intercambiar bienes y servicios',
						time: '',
						autor: 'Philip Kotler'
					}
				],
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
				marketing: [
					{
						title: '¿Qué debemos tener en cuenta para definir una estrategia de marketing digital?',
						content: 'A los Usuarios, Objetivos(concretos, inequívocos, medibles y orientados a negocio), Recursos(humanos, economicos y materiales), Ejecusion(talento y conocimiento de los implicados en el proyecto) y Contexto(el mercado, el entorno, los competidores...)'
					},
					{
						title: '¿Qué define un buen plan de marketing digital?',
						content: ''
					},
					{
						title: '¿Cuáles son las tendencias actuales en marketing digital?',
						content: ''
					},
					{
						title: '¿Cómo convertir nuestros usuarios en clientes?',
						content: ''
					},
					{
						title: '¿Qué parámetros hay que tener en cuenta para analizar usuarios?',
						content: ''
					},
					{
						title: '',
						content: ''
					},
				]
			}
		}
	}
</script>

<style scoped>
.carousel {
  height: 300px !important; 
}	
</style>