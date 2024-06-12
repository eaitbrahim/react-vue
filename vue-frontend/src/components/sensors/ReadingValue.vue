<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    min: {
      type: Number,
      default: -100,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
  setup(props) {
    const backgroundColor = ref('');
    const color = ref('');

    const formattedValue = ref('');

    watch(() => props.value, () => {
      let value = props.value;
      let backgroundColorValue, colorValue;

      if (value < props.min) {
        backgroundColorValue = '#3899ff'; // blue
        colorValue = '#ffffff';
      } else if (value > props.max) {
        backgroundColorValue = '#990200'; // red
        colorValue = '#ffffff';
      } else if (value === '#') {
        backgroundColorValue = '#f8a736'; // orange
        colorValue = '#000000';
        value = 'Probe missing';
      } else {
        backgroundColorValue = '#8cd98c'; // green
        colorValue = '#000000';
      }

      backgroundColor.value = backgroundColorValue;
      color.value = colorValue;
      formattedValue.value = value === undefined ? '' : value.toFixed(2) + '° F';
    });

    return {
      backgroundColor,
      color,
      formattedValue,
    };
  },
});
</script>

<template>
    <span :style="{ backgroundColor, color }" class="reading-value">{{ formattedValue }}</span>
</template>
  
  <style scoped>
  .ReadingValue {
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 500;
    font-size: x-large;
  }
  </style>
  