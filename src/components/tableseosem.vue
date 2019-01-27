<template>
	<v-container>
		<div>
			<v-data-table 
			:headers="headers" 
			:items="desserts" 
			:search="search" 
			:pagination.sync="pagination" 
			class="elevation-1" 
			hide-actions>
				<template slot="items" slot-scope="props">
					<td width="20%" class="blue darken-4"> 
						<div class="text-uppercase white--text" id="title"> {{ props.item.title }} </div>
					</td>
					<td class="text-xs-right light-green accent-1" width="40%">
						<div class="text-xs-left" id="item"> {{ props.item.seo }} </div>
					</td>
					<td class="text-xs-right blue-grey lighten-5" width="40%">
						<div class="text-xs-left" id="item"> {{ props.item.sem }} </div>
					</td>
				</template>
			</v-data-table>
			<div class="text-xs-center pt-2">
				<v-pagination v-model="pagination.page" :length="pages" circle></v-pagination>
			</div>
		</div>
	</v-container>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        pagination: {},
        selected: [],
        headers: [
          {
            text: '',
            align: 'right',
            sortable: false,
            value: 'title',
          },
          { text: 'SEO', value: 'seo' },
          { text: 'SEM', value: 'sem' },
        ],
        desserts: [
          {
            title: 'Estrategía',
            seo: 'No asume los costos directos por cada visita',
            sem: 'Asume los costos por cada visita',
          },
					{
					title: 'N° de palabras clave',
					seo: 'Limitadas, depende del contenido',
					sem: 'Ilimitadas, es un sistema de pujas, se paga por los clicks que se reciben'
					},
					{
						title: 'Costo',
						seo: 'Se paga por el trabajo de optimización',
						sem: 'Se paga por cada visita y por la gestion de la campaña'
					},
					{
						title: 'Tiempo',
						seo: 'Los resultados se obtienen a Mediano y largo plazo',
						sem: 'Los resultados se obtienen case de inmediato'
					},
					{
						title: 'Flexibilidad de la Estrategía',
						seo: 'Poco flexible a los cambios',
						sem: 'Muy flexible'
					},
					{
						title: 'Tasa por click (CRT)',
						seo: 'En la primera posicion del buscador CRT = 30%, por debajo de la quinta posición CRT = 5%',
						sem: 'CRT muy alto en las primeras posiciones del buscador, varia entre el 30% y el 10% '
					},
					{
						title: 'Contenido',
						seo: 'Original, de calidad y de relevancia',
						sem: 'Debe ser relevante y enfocado en la conversión'
					},
					{
						title: 'Visibilidad',
						seo: 'No hay garantias',
						sem: 'Desde el comienza la campaña es posible estar entre los primeros resultados de busqueda'
					},
					{
						title: 'Rankigs',
						seo: 'Sin grandes fluctuaciones en la posición',
						sem: 'Variable'
					},
					{
						title: 'Medición',
						seo: 'Es compleja y en algunos casos no es posible',
						sem: 'Fácil de medir'
					}
        ]
      }
    },
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }
  }
</script>

<style scoped="">
td #title{
	font-size: 1.3em;
}
td #item {
	font-size: 1.2em;
	font-family: Verdana;
}
.table-header /deep/ {
  thead {
    background-color: black;
  }
}
table.v-dataTable thead tr {background-color:blue}
</style>