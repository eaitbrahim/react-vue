<template>
    <div class="BatteryIcon">
      <component :is="icon" class="icon" :style="{ color: percentageColor }" />
      <span class="Percentage">{{ level }}%</span>
    </div>
  </template>
  
  <script>
  import { FaBatteryFull, FaBatteryHalf, FaBatteryEmpty } from 'react-icons/fa';
  
  export default {
    props: {
      level: {
        type: Number,
        required: true,
      },
    },
    computed: {
      icon() {
        if (this.level >= 75) {
          return FaBatteryFull;
        } else if (this.level >= 50) {
          return FaBatteryHalf;
        } else {
          return FaBatteryEmpty;
        }
      },
      percentageColor() {
        if (this.level >= 75) {
          return 'green';
        } else if (this.level >= 50) {
          return 'darkOrange';
        } else {
          return 'red';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .BatteryIcon {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
  }

  .icon {
    font-size: 36px;
    margin: auto; 
    transform: rotate(-90deg);
  };
  
  .BatteryIcon span.Percentage {
    font-size: 14px;
    margin-top: 5px;
  }
  
  </style>
  