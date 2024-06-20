<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    //const title = route.path.includes('/sensor/') ? 'Sensor Detail' : 'All Sensors';
    const title = 'All Sensors';
</script>

<template>
    <div class="title">
    <span>{{ title }}</span>
  </div>
</template>
  
<style scoped>
.title {
    font-weight: bold;
    color: white;
  }
</style>
  