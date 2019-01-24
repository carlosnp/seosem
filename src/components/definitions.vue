<template>

	<v-layout row wrap>
		<v-carousel class="text-md-center" interval="20000" hide-delimiters>
			<v-carousel-item v-for="item in mark" :key="item.text" :src="item.text" >
				<v-layout align-center justify-center row fill-height>
					<v-card flat color="blue-green darken-1" class="white--text" height="500" width="100%">
						<v-card-title> 
							<div class="headline pt-3 px-2"> {{ item.time }} </div>
						</v-card-title>
						<v-card-text>
						<v-layout align-center column fill-height>
							<div class="display-2 px-5 titulos"> "{{ item.text }}" </div>
							<div class="blue--text headline pl-3"> {{ item.autor }} </div> 
						</v-layout> 
						</v-card-text>
					</v-card>
				</v-layout>
			</v-carousel-item>
		</v-carousel>
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
			}
		}
	}
</script>

<style scoped>
.titulos {
  padding: 80px 0;
  position: absolute;
}
</style>