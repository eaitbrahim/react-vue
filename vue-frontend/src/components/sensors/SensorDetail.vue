<script setup>
    import Sensor from './Sensor.vue';
    import TwentyFourHoursHistoryChart from './TwentyFourHoursHistoryChart.vue';
    import Profile from './Profile.vue';
    import Readings from './Readings.vue';
</script>

<template>
  <div class="SensorDetail">
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
      <Link to="/">Go to Home</Link>
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
  