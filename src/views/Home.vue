<template>
  <v-layout row wrap py-5>

    <v-flex xs12 class="display-1 font-weight-black text-uppercase text-xs-center">
      Bienvenidos al mini Taller de SEO y SEM
    </v-flex>

    <v-flex xs12 md4 py-2>
      <v-card height="300">
        <v-card-actions>
          <v-btn block class="info headline" to="/marketing"> Marketing Digital</v-btn>
        </v-card-actions>
        <v-card-title class="text-xs-center font-weight-black">
          </v-card-title>
        <v-card-text class="subheading">
          Es la aplicación de las estrategias de comercialización llevadas a cabo en los medios digitales. Todas las técnicas del mundo off-line son imitadas y traducidas a un nuevo mundo, el mundo online. En el ámbito digital aparecen nuevas herramientas como la inmediatez, las nuevas redes que surgen día a día, y la posibilidad de mediciones reales de cada una de las estrategias empleadas. 
        </v-card-text>        
      </v-card>
    </v-flex>

    <v-flex xs12 md4 py-2>
      <v-card height="300">
        <v-card-actions>
          <v-btn block class="warning headline"> SEO </v-btn>
        </v-card-actions>
        <v-card-title class="title text-xs-center font-weight-black">
          Search Engine Optimization
          </v-card-title>
        <v-card-text class="subheading">
           Es la práctica de utilizar un rango de técnicas, incluidas la reescritura del código html, la edición de contenidos, la navegación en el site, campañas de enlaces y más acciones, con el fin de mejorar la posición de un website en los resultados de los buscadores para unos términos de búsqueda concretos.
        </v-card-text>        
      </v-card>
    </v-flex>

    <v-flex xs12 md4 py-2>
      <v-card height="300">
        <v-card-actions>
          <v-btn block class="success headline"> SEM </v-btn>
        </v-card-actions>
        <v-card-title class="title text-xs-center font-weight-black">
          Seach Engine Marketing
          </v-card-title>
        <v-card-text class="subheading">
          Es el uso de herramientas y estrategias que nos ayudan a optimizar la visibilidad y a aumentar la accesibilidad de los sitios y páginas web gracias a los motores de los buscadores. Son además los propios buscadores quien muchas veces nos ofrecen esas herramientas para publicitarnos en sus medios de búsqueda.
        </v-card-text>        
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>


  export default {
    components: {
    }
  }
</script>
