<template>
  <div class="App">
    <header class="Header">
      <h1>All Sensor</h1>
    </header>
    <SensorTiles />
  </div>
</template>

<script>
import SensorTiles from './components/sensors/SensorTiles.vue';

export default {
  name: 'App',
  components: {
    SensorTiles, // Register SensorTiles component
  },
};
</script>

<style scoped>
.App {
  text-align: center;
}

.Header {
  background-color: #282c34;
  padding: 20px;
  color: white;
}
</style>