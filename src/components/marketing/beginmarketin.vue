<template>

  <v-layout row wrap>
    <v-carousel class="text-md-center" interval="20000" hide-delimiters>
      <v-carousel-item v-for="item in questions" :key="item.content" :src="item.title" >
        <v-layout align-center justify-center row fill-height>

          <v-flex xs6>
            <v-card width="100%" height="500" color="light-blue darken-4">
              <v-card-text class="display-1 text-uppercase px-4 font-weight-bold">
                <div class="titulos"> {{ item.title }} </div>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs6>
            <v-card height="500" width="100%" color="grey darken-4">
              <v-card-text v-for="tem in (item.list)" :key="tem.name">
               <div class="headline text-sm-left"> {{ tem.name }} </div>
               <div class="headline text-sm-left pl-3"> {{ tem.subname }} </div>
               <div class="cyan--text headline px-3 text-sm-left"> {{ tem.content }} </div>
               <div class="yellow--text headline px-4 text-sm-left"> {{ tem.example }} </div>
              </v-card-text>
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
      questions: [
        {
          title: '¿Qué debemos tener en cuenta para definir una estrategia de marketing digital?',
          list: [
            {
              name: 'Usuario'
            },
            {
              name: 'Objetivos:',
              content: 'Concretos, Medibles y orientados al negocio'
            },
            {
              name: 'Recursos:',
              content: 'Humanos, Economicos y Materiales'
            },
            {
              name: 'Ejecusión:',
              content: 'Talento y conocimiento de los implicados en el proyecto'
            },
            {
              name: 'Contexto:',
              content: 'El Mercado, el Entorno, los Competidores...'
            }
          ]
        },
        {
          title: '¿Qué define un buen plan de marketing digital?',
          list: [
            {
              name: 'PreClick:',
              subname: 'Conseguir tráfico',
              content: 'Canales de captación de tráfico: email, SEO, Search PPC(pago por click), Mobile y Social Media.'
            },
            {
              name: 'PostClick',
              subname: 'Convertir al usuario en cliente',
              content: 'Analítica digital: key performance indicator(KPIs)'
            }
          ]
        },
        {
          title: '¿Cuáles son las tendencias del marketing digital para el 2019?',
          list: [
            {
              name: 'Fast content para fast users',
              subname: 'El usuario desea consumir contenidos de una manera rápida, amena y sencilla',
              content: 'Apostar por el contenido efímero, fugaz, pero que deje huella en el usuario',
              example: 'Instagram, Twitter, Facebook'
            },
            {
              name: 'Context marketing',
              subname: 'Tecnologías permiten realizar análisis más precisos',
              content: 'Conocer a la audiencia y Personalizar los contenidos',
              example: ''
            },
          ]
        },
        {
          title:'¿Cuáles son las tendencias del marketing digital para el 2019?',
          list: [
            {
              name: 'Publicidad nativa',
              content: 'Contenido patrocinado'
            },
            {
              name: 'Vídeo programático: Consumo de vídeo bajo demanda',
              subname: 'El usuario puede elegir cuándo, dónde y qué ver.',
              content: 'Capacidad de segmentación y Mayor conversión',
              example: 'SVOD: Netflix, TVOD: Apple iTunes o Amazon Prime Video, AVOD: Youtube'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
img {
  width: min-content;
  height: min-content;
}
.titulos {
  padding: 200px 0;
  position: absolute;
}
</style>