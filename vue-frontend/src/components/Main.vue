<script>
  import SlideMenu from './menu/SlideMenu.vue';
</script>

<template>
    <div class="container">
      <SlideMenu />
      <router-view />
    </div>
  </template>

  
  <style scoped>
  .container {
    display: flex;
  }
  </style>
  