<script setup>
import Alarm from './Alarm.vue';
</script>

<template>
  <div class="alerts">
      <Alarm message="8 sensors have triggered an alarm" icon="faExclamationCircle" />
      <Alarm message="12 sensors have triggered a communication alarm" icon="faSignal" />
      <Alarm message="5 sensors have low battery" icon="faBatteryEmpty" />
    </div>
</template>

<style scoped>
.alerts {
    float: left; 
  }
</style>
