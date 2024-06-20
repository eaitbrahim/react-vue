<script setup>
    import { ref } from 'vue';
    import ReadingValue from './ReadingValue.vue';
    import BatteryIcon from '../shared/BatteryIcon.vue';
    import { useTileModeStore } from '../../stores/tileModeStore';

    const { expanded } = useTileModeStore();
    const props = defineProps({
        data: Object
    });
    const data = ref(props.data);
    const backgroundColor = ref('#8cd98c');
    const color = ref('#ffffff');

    const handleBackgroundColorChange = (bgColor, textColor) => {
        backgroundColor.value = bgColor;
        color.value = textColor;
    };
</script>

<template>
    <div class="tile" :style="{ backgroundColor, color }">
        <router-link :to="`/sensor/${data.SensorId}`" class="link">
            <h2>{{ data.SensorName }}</h2>
            <ReadingValue v-if="!expanded"
                :value="data.reading"
                :min="data.AlarmRange.min"
                :max="data.AlarmRange.max"
                @onBackgroundColorChange="handleBackgroundColorChange"
            />
            <template v-if="expanded">
                <p>{{ data.SensorType }}</p>
                <ReadingValue
                    :value="data.reading"
                    :min="data.AlarmRange.min"
                    :max="data.AlarmRange.max"
                    @onBackgroundColorChange="handleBackgroundColorChange"
                />
                <p>Alarm Range: {{ data.AlarmRange.min }} °F to {{ data.AlarmRange.max }} °F</p>
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
  