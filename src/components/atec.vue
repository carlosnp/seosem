<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-carousel class="text-md-center" interval="15000" hide-delimiters>
        <v-carousel-item v-for="item in items" :key="item.content" :src="item.title" >
          <v-layout align-center justify-center row fill-height>
            <v-card height="500"  width="100%" flat color="blue-green darken-1" class="white--text">
              <v-card-title class="headline text-uppercase"> {{ item.title }} </v-card-title>
              <v-card-text>
                <v-layout align-center column fill-height>
                  <div class="display-2"> {{ item.content }} </div>
                  <img :src="item.src" alt="" width="1000"> 
                  <div class="blue--text headline"> {{ item.auth }} </div>
                </v-layout> 
              </v-card-text>
            </v-card>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      items: [
        {
          title:'la tecnología a cambiado al mundo',
          content:'',
          src: 'comunicacion-digital.jpg',
          auth: ''
        },
        {
          title:'La era digital ha transformado el mundo de la comunicación.',
          content:'',
          src: 'New-Media-Timeline-e1455890319643.jpg',
          auth: ''
        },
        {
          title: 'Crecimiento de las Redes Sociales',
          src: 'https://visual.ly/node/image/150315?_w=540',
          auth:''
        },
        {
          title: 'Nuevas Reglas del Juego: Transparencia',
          content: '',
          src:'transparencia.jpg',
          auth: ''
        },
        {
          title: 'Nuevas Reglas del Juego: Six Degrees: The Science of a Connected Age',
          content: 'Asegura que es posible acceder a cualquier persona del planeta en tan sólo seis “saltos”.',
          src:'seisgrados.jpeg',
          auth:'Duncan Watts (socialogo)'
        },
        {
          title: 'Nuevas Reglas del Juego: La tecnología se democratiza',
          content: '',
          src: 'Holiday-Devices-K6-12.png',
          auth: ''
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
</style>
