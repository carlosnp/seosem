<template>
  <v-toolbar color="blue lighten-2">
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">
      <v-icon>home</v-icon>
      </v-btn>
      <v-btn flat to="/marketing">Marketing</v-btn>
      <v-btn flat to="/seo">SEO</v-btn>
      <v-btn flat to="/sem">SEM</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>