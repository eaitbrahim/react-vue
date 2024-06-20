<script setup>
import Header from './components/header/Header.vue';
</script>

<template>
    <Header />
    <!-- <Banner />
    <Main/> -->
</template>

<style>
  * {
  box-sizing: border-box;
}

:root {
  min-height: 100vh;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  background-image: radial-gradient(ellipse at top left, #ffffff, #f3f2f5);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 20px;
  text-align: center;
  color: #000000;
}

#app {
  background-color: white;
}
</style>