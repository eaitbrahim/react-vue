<script setup>
    import { ref } from 'vue';
    const { value, min, max, onBackgroundColorChange } = props;
    let backgroundColor, color;
    if (value.value < min.value) {
        backgroundColor = '#3899ff'; // blue
        color = '#ffffff';
    } else if (value.value > max.value) {
        backgroundColor = '#990200'; // red
        color = '#ffffff';
    } else if (value.value === '#') {
        backgroundColor = '#f8a736'; // orange
        color = '#000000';
    } else {
        backgroundColor = '#8cd98c'; // green
        color = '#000000';
    }

    onBackgroundColorChange(backgroundColor, color);

    const displayValue = ref(value.value === undefined ? '' : (value.value === '#' ? 'Probe missing' : `${value.value.toFixed(2)}° F`));
</script>

<template>
     <span class="RreadingValue">{{ displayValue }}</span>
</template>
  
<style scoped>
    .ReadingValue {
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: 500;
        font-size: x-large;
    }
</style>
  