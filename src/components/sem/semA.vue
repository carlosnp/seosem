<template>
	<v-layout row wrap>
		<v-carousel class="text-md-center" interval="20000" hide-delimiters height="550">
			<v-carousel-item v-for="item in sem" :key="item.title" :src="item.title">
				<v-layout align-center justify-center row fill-height>
					
					<v-flex xs12>
						<v-card width="100%" height="550" color="grey darken-2">
							<v-container>
								<v-card-title class="px-4 font-weight-bold">
									<div class="display-1 text-uppercase"> {{ item.title }} </div>
								</v-card-title>
								<v-card-media contain max-height="550" :src="item.src">
								</v-card-media>
								<v-card-text class="px-5">
									<div class="headline text-sm-left yellow--text"> 
										<strong> {{ item.subtitle }} </strong>
									</div>
									<ol class="pl-5 text-sm-left">
										<div v-for="tem in (item.list)" :key="tem" class="pl-5">
											<li class="headline c pl-5"> {{ tem }} </li>
										</div>
									</ol>
								</v-card-text>
								<v-card-title class="pl-5 ">
									<div class="headline text-uppercase pl-5 orange--text"> {{ item.alert }}</div>
								</v-card-title>
							</v-container>
						</v-card>
					</v-flex>

				</v-layout>
			</v-carousel-item>
		</v-carousel>
	</v-layout>
</template>

<script>
	export default {
		data(){
			return {
				sem: [
					{
						title: 'SEM',
						content: '',
						src: require('../../assets/sem/hotelesseo1.png'),
					},
					{
						title: 'SEM',
						content: '',
						src: require('../../assets/sem/hotelesseo2.png'),
					},
					{
						title: 'SEM',
						subtitle: 'Vocabulario básico',
						list: [
						'Impresiones: nº de veces que ha aparecido un anuncio en la página de resultados de búsquedas.',
						'Clics: accesos al sitio web a través del anuncio.',
						'CTR: relación entre número de clics e impresiones (Clic/Impres).',
						'CPC: coste por cada clic que recibe el anuncio.',
						'Posición: ubicación jerarquizada del anuncio.',
						'Conversiones: nº de veces que se consigue el objetivo de la campaña.'
						]
					},
					{
						title: 'SEM',
						subtitle: 'El poder de la segmentación',
						list: [
						'Seleccionas las palabras clave relacionadas con el producto.',
						'Geográficamente: país o zona geográfica.',
						'Temporal: día de la semana, ajustes por hora…',
						'Idiomática: selecciona las búsquedas por idioma: en español, alemán, ingles…',
						'Dispositivo: Telefonos, PC, tablets'
						]
					},
					{
						title: '¿Por qué realizar publicidad SEM?',
						list: ['Captar tráfico de calidad.', 'Ocupar una posición destacada en las búsquedas.', 'Branding: construir la marca', 'Tú decides cuánto quieres invertir.', 'Sólo pagamos por las visitas que conseguimos.', 'Es posible conocer el coste de cada venta.', 'Es una publicidad segmentada.', 'Hacer una política coordinada con el SEO' 
						],
						alert: 'Se debe adecuar la página al tráfico SEM !!!'
					}
				]
			}
		}
	}
</script>