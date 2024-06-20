<script setup>
import Header from './components/header/Header.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div className={classes.app}>
    <Header />
    <Banner />
    <Main/>
  </div>
</template>

<style scoped>
.app {
  background-color: white;
}
</style>
