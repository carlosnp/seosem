<template>
	<v-footer height="auto" color="primary lighten-1">
		<v-layout justify-center row wrap>

			<v-flex xs12 sm8 text-xs-center>
				<v-btn color="white" flat to="/"> <v-icon>home</v-icon> </v-btn>
				<v-btn color="white" flat to="/marketing">Marketing</v-btn>
				<v-btn color="white" flat to="/seo">SEO</v-btn>
				<v-btn color="white" flat to="/sem">SEM</v-btn>
			</v-flex>

			<v-flex xs12 sm4 class="text-xs-center">
				<v-btn color="white" flat disabled> &copy;2019 — <strong>Seo & Sem</strong> </v-btn>
			</v-flex>

		</v-layout>
	</v-footer>
</template>