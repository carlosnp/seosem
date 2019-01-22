<template>
  <v-layout row wrap justify-space-around py-5>
  <v-flex xs12 sm6>
  	<v-flex xs12 class="font-light-italic text-uppercase" tag="h1">
      <div class="text-xs-center"> Algunas Definiciones de Marketing </div>
    </v-flex>
  <v-carousel height="320" class="text-md-center" interval="10000" hide-delimiters>
    <v-carousel-item v-for="item in mark" :key="item.text" :src="item.text" >
    	<v-layout align-center justify-center row fill-height>
    	<v-card flat color="blue-green darken-1" class="white--text" height="320" width="550">
    		<v-card-title> {{ item.time }} </v-card-title>
    		<v-card-text> 
    			<div class="headline"> "{{ item.text }}" </div>
    			<div class="blue--text"> {{ item.autor }} </div> 
    		</v-card-text>
    	</v-card>
    	</v-layout>
    </v-carousel-item>
  </v-carousel>
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
				questions: ['qué', 'quién', 'cómo', 'dónde', 'cuándo', 'por qué'],
				items: ['que producto voy a vender, que caracteristicas tiene y porque es interesante', 'a quien se lo voy a vender, publico suceptible de consumirlo', 'como lo voy hacer, que herramientas de comunicacion', 'Medios en donde lo voy a colocar', 'durante cuanto tiempo', 'caracateristicas del producto, para que va a servir'],
			}
		}
	}
</script>

<style scoped>
.carousel {
  height: 200px !important; 
}
#question {
	background-color: blue; 
}
	
</style>