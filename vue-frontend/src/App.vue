<script setup>
  import { createRouter, createWebHistory } from 'vue-router';
  import Header from './components/header/Header.vue';
  import Banner from './components/banner/Banner.vue';
  import Main from './components/Main.vue';
  import TileModeProvider from './store';
  
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      // Define your routes here
    ]
  });
  
  export default {
    components: {
      Header,
      Banner,
      Main
    },
    setup() {
      // Provide TileModeProvider
      provide('TileModeProvider', TileModeProvider);
  
      return { classes };
    }
  };
</script>
  
<template>
    <Router>
      <TileModeProvider>
        <div class="app">
          <Header />
          <Banner />
          <Main />
        </div>
      </TileModeProvider>
    </Router>
  </template>
  
  
  <style scoped>
  .app {
    background-color: white;
  }
  </style>