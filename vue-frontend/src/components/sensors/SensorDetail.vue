  
  <script>
  import { defineComponent } from 'vue';
  import { Link } from 'vue-router'; 
  import Sensor from './Sensor.vue'; 
  import TwentyFourHoursHistoryChart from './TwentyFourHoursHistoryChart.vue'; 
  import Profile from './Profile.vue';
  import Readings from './Readings.vue'; 
  
  export default defineComponent({
    components: {
      Link,
      Sensor,
      TwentyFourHoursHistoryChart,
      Profile,
      Readings,
    },
    setup() {
      return {
        classes,
      };
    },
  });
</script>

<template>
    <div class="sensor-detail">
      <div class="item">
        <Sensor />
      </div>
      <div class="item">
        <TwentyFourHoursHistoryChart />
      </div>
      <div class="item">
        <Profile />
      </div>
      <div class="item">
        <Readings />
      </div>
      <router-link to="/">Go to Home</router-link>
    </div>
  </template>

  
  <style scoped>
  .SensorDetail {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    margin-top: 20px;
    width: 100%;
  }
  
  .item {
    border: 1px solid #4974A3; 
    padding: 20px;
  }
  </style>
  