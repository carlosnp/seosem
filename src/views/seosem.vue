<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
			<v-carousel class="text-md-center" interval="10000" hide-delimiters>
				<v-carousel-item v-for="item in items" :key="item.content" :src="item.src" >
					<v-layout align-center justify-center row fill-height>
						<v-card flat color="blue-green darken-1" class="white--text">
							<v-card-title> {{ item.title }} </v-card-title>
							<v-card-text>
								<v-layout align-center column fill-height>
									<div class="display-2"> "{{ item.context }}" </div>
									<div class="blue--text headline"> {{ item.auth }} </div>
                  <img :src="item.src" alt="">
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
          title:'',
          content:'',
          list: [],
          src: 'public/comunicacion-digital.jpg',
          auth: ''
        },
        {
          title:'',
          content:'',
          list: [],
          src: '',
          auth: ''
        }
      ]
    }
  }
}
</script>
