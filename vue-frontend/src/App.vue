<script setup>
  import { defineComponent } from 'vue';
  import Header from './components/header/Header.vue';
  import Banner from './components/banner/Banner.vue';
  import Main from './components/Main.vue';
  
  export default defineComponent({
    components: {
      Header,
      Banner,
      Main
    },
  });
</script>
  
<template>
  <div class="app">
    <Header />
    <Banner />
    <Main />
  </div>
  </template>
  
  
  <style scoped>
  .app {
    background-color: white;
  }
  </style>