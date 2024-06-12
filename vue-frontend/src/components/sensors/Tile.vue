<script>
  import { ref } from 'vue';
  import { useTileMode } from '../../context/TileModeContext';
  import ReadingValue from './ReadingValue.vue'; 
  import BatteryIcon from '../shared/BatteryIcon.vue';
  
  export default {
    components: {
      ReadingValue,
      BatteryIcon,
    },
    props: {
      data: Object, 
    },
    setup() {
      const { expanded } = useTileMode();
      const backgroundColor = ref('#8cd98c');
      const color = ref('#ffffff');
  
      const handleBackgroundColorChange = (bgColor, textColor) => {
        backgroundColor.value = bgColor;
        color.value = textColor;
      };
  
      return {
        expanded,
        backgroundColor,
        color,
        handleBackgroundColorChange,
      };
    },
  };
</script>
  
<template>
    <div :class="classes.Tile" :style="{ backgroundColor, color }">
      <router-link :to="`/sensor/${data.SensorId}`" class="link">
        <h2>{{ data.SensorName }}</h2>
        <ReadingValue
          :value="data.reading"
          :min="data.AlarmRange.min"
          :max="data.AlarmRange.max"
          @backgroundColorChange="handleBackgroundColorChange"
        />
        <template v-if="expanded">
          <p>{{ data.SensorType }}</p>
          <ReadingValue
            :value="data.reading"
            :min="data.AlarmRange.min"
            :max="data.AlarmRange.max"
            @backgroundColorChange="handleBackgroundColorChange"
          />
          <p>Alarm Range: {{ data.AlarmRange.min }} ° F to {{ data.AlarmRange.max }} ° F </p>
          <p>Reading: {{ new Date(data.readingDateTime).toString() }}</p>
          <p>Sensor ID: {{ data.SensorId }} / {{ data.Probe }}</p>
          <BatteryIcon :level="data.batteryLevel" />
        </template>
      </router-link>
    </div>
  </template>
  
  <style scoped>
  .Tile {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    color:rgb(255, 255, 255);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px; 

    h2 {
      font-weight: bold;
    }
  }

  .Tile:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); 
    background-color: #f0f0f0;
    transform: scale(1.05);
    cursor: pointer;
  }

  .link {
    text-decoration: none; 
    color: inherit; 
  }
  
  </style>
  