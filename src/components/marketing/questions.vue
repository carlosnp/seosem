<template>
	<v-container>
		<v-layout row wrap>
			<v-carousel class="text-md-center" interval="20000" hide-delimiters>
				<v-carousel-item v-for="item in questions" :key="item.content" :src="item.title" >
					<v-layout align-center justify-center row fill-height>
						<v-flex xs6>
							<v-card width="100%" height="500" color="grey darken-4">
								<v-card-text class="headline text-uppercase px-4 font-weight-bold">
									<div class="titulos"> ¿{{ item.title }}? </div>
								</v-card-text>
							</v-card>
						</v-flex>
						<v-flex xs6>
							<v-card height="500" width="100%" color="light-blue darken-4">
								<v-card-text>
									<v-icon class="py-5"> {{ item.icons }} </v-icon>
									<div class="white--text headline px-3 py-5 text-sm-left"> 
									{{ item.content }} 
									</div>
								</v-card-text>
								<v-card-media contain height="auto" :src="item.src" class="py-3">
								</v-card-media>
							</v-card>
						</v-flex>
					</v-layout>
				</v-carousel-item>
			</v-carousel>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				questions: [
					{
						title: 'qué',
						content:'producto a vender',
						icons: 'tag_faces',
						src: require('../../assets/marketing/que.jpg')
					},
					{
						title: 'quién',
						content:'público suceptible',
						src: require('../../assets/marketing/grupos.jpeg'),
						icons: 'group',
					},
					{
						title: 'cómo',
						content:'medios que se utilizarán',
						src: require('../../assets/marketing/redessociales.png')
					},
					{
						title: 'dónde',
						content:'',
						icons: 'location_city',
						src: require('../../assets/marketing/donde.jpeg')
					},
					{
						title: 'cuándo',
						content:'periodo de tiempo',
						src: require('../../assets/marketing/tiempo.jpeg'),
						icons: 'timelapse',
					},
					{
						title: 'por qué',
						content:'el producto es interesante, caracteristicas, diferencias',
						src: require('../../assets/marketing/porque.jpeg')
					},
				],
			}
		},
	}
</script>

<style scoped>
.titulos {
  padding: 200px 60px;
  position: absolute;
}
</style>