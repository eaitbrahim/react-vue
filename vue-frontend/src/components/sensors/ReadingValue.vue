<script setup>
    import { ref, watch } from 'vue';

    const props = defineProps({
    value: [Number, String],
    min: Number,
    max: Number,
    });

    const emit = defineEmits(['onBackgroundColorChange']);
    // Reactive variables
    const displayValue = ref('');

    // Watch props.value for changes
    watch(() => props.value, (newValue) => {
        if (newValue === undefined) {
            displayValue.value = '';
        } else if (newValue === '#') {
            displayValue.value = 'Probe missing';
        } else {
            displayValue.value = `${+newValue.toFixed(2)}° F`;
        }

        // Calculate backgroundColor and color
        let backgroundColor, color;
        if (newValue < props.min) {
            backgroundColor = '#3899ff'; // blue
            color = '#ffffff';
        } else if (newValue > props.max) {
            backgroundColor = '#990200'; // red
            color = '#ffffff';
        } else if (newValue === '#') {
            backgroundColor = '#f8a736'; // orange
            color = '#000000';
        } else {
            backgroundColor = '#8cd98c'; // green
            color = '#000000';
        }

        emit('onBackgroundColorChange', { backgroundColor, color });
        
    }, { immediate: true });
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
  