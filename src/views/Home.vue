<template>
  <v-layout row wrap py-5>

    <v-flex xs12 class="display-1 font-weight-black text-uppercase text-xs-center">
      Bienvenidos al mini Taller de SEO y SEM
    </v-flex>

    <v-flex xs12>
    <diapositiva></diapositiva>
    </v-flex>


    <v-flex xs12 md4 py-2>
      <v-card height="750">
        <v-card-actions>
          <v-btn block class="info headline" to="/marketing"> Marketing Digital</v-btn>
        </v-card-actions>
        <v-card-title class="title text-xs-center font-weight-black">
          Marketing Web - Marketing online
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="subheading">
          <v-flex v-for="t in marketing" :key="t.content">
            <p> {{ t.content }} </p>
          </v-flex>
        </v-card-text>        
      </v-card>
    </v-flex>

    <v-flex xs12 md4 py-2>
      <v-card height="750">
        <v-card-actions>
          <v-btn block class="warning headline" to="/seo"> SEO </v-btn>
        </v-card-actions>
        <v-card-title class="title text-xs-center font-weight-black">
          Search Engine Optimization
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="subheading">
          <p>
           La optimización de motores de búsqueda (SEO) es la práctica de optimizar el contenido del sitio web de tal manera que su sitio web de cliente se clasifique antes que nada en los motores de búsqueda en una palabra clave deseada y relevante. Un sitio web que está optimizado perfectamente de acuerdo con los algoritmos ofrece una mejor oportunidad para que la empresa atraiga visitantes y clientes de calidad y relevantes a su marca.
          </p>
        </v-card-text>        
      </v-card>
    </v-flex>

    <v-flex xs12 md4 py-2>
      <v-card height="750">
        <v-card-actions>
          <v-btn block class="success headline" to="/sem"> SEM </v-btn>
        </v-card-actions>
        <v-card-title class="title text-xs-center font-weight-black">
          Seach Engine Marketing
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="subheading">
          <v-flex v-for="tx in sem" :key="tx.content">
            <p> {{ tx.content }} </p>
          </v-flex>
        </v-card-text>        
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
import atec from '../components/atec.vue'

  export default {
    components: {
      diapositiva: atec,
    },
    data() {
      return {
        marketing: [
          {
            content: 'Se refiere a una amplia categoría de publicidad que toma muchas formas diferentes, pero generalmente involucra cualquier actividad de marketing realizada en línea. Los mercadólogos han cambiado sus esfuerzos en línea porque tiende a ser significativamente menos costoso. Muchos espacios publicitarios en línea son de uso gratuito. '
          },
          {
            content: 'Las empresas pueden subir videos a Youtube o iniciar un blog sin costo alguno. Otros medios como los sitios web oficiales o el marketing de búsqueda pagado cuestan una fracción de lo que costaría una campaña publicitaria televisiva importante. La web también presenta nuevas y emocionantes oportunidades para que las empresas perfilen a sus clientes.'
          },
          {
            content: 'El espacio interactivo de Internet simplifica la capacidad de una empresa para rastrear, almacenar y analizar datos sobre la demografía, las preferencias personales y el comportamiento en línea de un cliente. Estos datos permiten al anunciante proporcionar una experiencia publicitaria más personalizada y relevante para el cliente.'
          }
        ],
        sem: [
          {
            content: 'El marketing de motores de búsqueda es la práctica de comercializar una empresa mediante anuncios pagados que aparecen en las páginas de resultados de los motores de búsqueda. Los anunciantes pujan por las palabras clave que los usuarios de servicios como Google y Bing podrían ingresar cuando buscan ciertos productos o servicios, lo que le brinda al anunciante la oportunidad de que sus anuncios aparezcan junto a los resultados de esas consultas de búsqueda.'
          },
          {
            content: 'Estos anuncios, a menudo conocidos por el término anuncios de pago por clic, vienen en una variedad de formatos. Algunos son pequeños anuncios basados ​​en texto, mientras que otros, como los anuncios de listados de productos (PLA, también conocidos como anuncios de Shopping) son anuncios más visuales, basados ​​en productos que permiten a los consumidores ver información importante de un vistazo, como el precio. y comentarios.'
          },
          {
            content: 'La mayor fortaleza del marketing de motores de búsqueda es que ofrece a los anunciantes la oportunidad de poner sus anuncios frente a clientes motivados que están listos para comprar en el momento preciso en que están listos para hacer una compra.'
          }
        ]
      }
    }
  }
</script>
