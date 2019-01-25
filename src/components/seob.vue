<template>

    <v-layout row wrap>
			<v-carousel class="text-md-center" interval="20000" hide-delimiters height="550">
				<v-carousel-item v-for="item in seo" :key="item.title1" :src="item.title1">
					<v-layout align-center justify-center row fill-height>
            
            <v-flex xs6>
              <v-card width="100%" height="550" color="grey darken-2">
                <v-card-title class="px-4 font-weight-bold">
                  <div class="display-1 text-uppercase"> {{ item.title1 }} </div>
                  <v-icon>arrow_right</v-icon>
                  <div class="display-1"> {{ item.subtitle1 }} </div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text v-for="tem in (item.list1)" :key="tem.name">
                  <div class="headline text-sm-left pl-5"> {{tem.name}} </div>
                  <div class="subheadline text-sm-left pl-5"> {{tem.content}} </div>
                </v-card-text>
                <v-card-media contain height="auto" :src="item.src1" >
                </v-card-media>
              </v-card>
            </v-flex>
            
            <v-flex xs6>
              <v-card height="550" width="100%" color="grey darken-4">
                <v-card-title class="px-4 font-weight-bold">
                  <div class="display-1 text-uppercase"> {{ item.title2 }} </div>
                  <v-icon>arrow_right</v-icon>
                  <div class="display-1"> {{ item.subtitle2 }} </div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text v-for="tem in (item.list2)" :key="tem.name">
                  <div class="headline text-sm-left pl-5"> {{tem.name}} </div>
                  <div class="subheadline text-sm-left pl-5"> {{tem.content}} </div>
                  <div class="subheadline yellow--text text-sm-left pl-5"> {{tem.content2}} </div>
                </v-card-text>
                <v-card-media contain height="auto" :src="item.src2" >
                </v-card-media>                
              </v-card>
            </v-flex>

					</v-layout>
				</v-carousel-item>
			</v-carousel>
    </v-layout>

</template>

<script>
  export default {
    data() {
      return {
        seo: [
          {
            title1: 'Marketing en buscadores',
            title2: 'Estrategia Conjunta SEO y SEM',
            src1: './seo/marketingdigital.npg'
          },
          {
            title1: 'Metodologia SEO',
            title2: 'Factores SEO',
            src1: './seo/metodologia.jpg',
            src2: './seo/seotipos.jpg'
          },
          {
            title1: 'Seo',
            title2: 'Seo',
            subtitle1: ' on page',
            subtitle2: ' off page',
            pop: false,
            list1: [
              {
                name: 'Contenido',
                content: 'Textos, Etiquetado, Metadatos, Imágenes'
              },
              {
                name: 'Estructura',
                content: 'Dominio, URL amigable, arquitectura del site, enlaces internos'
              },
              {
                name: 'Rendimiento',
                content: 'Velocidad de carga, codigo fuente, servidor'
              },
              {
                name: 'Indexación',
                content: 'Renderización, Idiomas declarados, factores geográficos'
              }
            ],
            list2: [
              {
                name: 'Enlaces entrantes'
              },
              {
                name: 'Redes sociales'
              },
              {
                name: 'Notas de prensa y reviews'
              },
              {
                name: 'Directorios y marcadores sociales'
              }
            ]
          },
          {
            title1: 'Seo On page y Off page',
            title2: 'Seo Mobile',
            subtitle1: '',
            subtitle2: ' Recomendaciones',
            list1: [
              {
                name: 'Hay que pensar en el buscador y en el usuario.'
              },
              {
                name: 'No debemos obsesionarnos con las posiciones.'
              },
              {
                name: 'Buscamos calidad del tráfico más que cantidad.'
              }
            ], 
            list2: [
              {
                name: 'Diseño Responsive',
              },
              {
                name: 'Acortar direcciones'
              },
              {
                name: 'Sitemap móvil'
              }
            ]
          },
          {
            title1: 'Herramientas SEO',
            title2: 'Tecnicas SEO',
            subtitle1: 'de google',
            list1: [
              {
                name: 'Google Search Console'
              },
              {
                name: 'Google Trends'
              },
              {
                name: 'Google Adwords'
              },
              {
                name: 'Google Alerts'
              },
              {
                name: 'Google My Buisness'
              },
              {
                name: 'Google Analytics'
              }
            ],
            list2: [
              {
                name: 'Crear y compartir contenidos relevantes'
              },
              {
                name: 'Difundir contenido y crear marcadores en Redes Sociales'
              },
              {
                name: 'Keywords Research'
              },
              {
                name: 'Analitica Web',
                content: 'Cualitativa (comportamiento del usuario) y Cuantitativa(estadisticas)',
                content2: 'Nos permite conocer el comportamiento del usuario y evaluar el rendimiento de nuestas paginas web, para la tomar decisiones a nivel de negocio, producto o precio. Tambien nos permite comparar los diferentes medios de captación de usuarios (SEO, SEM,...), las tendencias y comportamientos recurrentes en el tiempo'
              },
            ]
          }         
        ]
      }
    }
  }
</script>