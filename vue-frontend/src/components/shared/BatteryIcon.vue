<script setup>
    import { computed } from 'vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faBatteryFull, faBatteryHalf, faBatteryEmpty } from '@fortawesome/free-solid-svg-icons';

    const props = defineProps({
        level: {
            type: Number,
            required: true
        }
    });

    const icon = computed(() => {
    if (props.level >= 75) {
        return faBatteryFull;
    } else if (props.level >= 50) {
        return faBatteryHalf;
    } else {
        return faBatteryEmpty;
    }
});

    const percentageColor = computed(() => {
    if (props.level >= 75) {
        return 'green';
    } else if (props.level >= 50) {
        return 'darkOrange';
    } else {
        return 'red';
    }
    });
</script>

<template>
    <div class="BatteryIcon">
        <font-awesome-icon :icon="icon" :style="{ color: percentageColor }" class="icon" />
        <span class="Percentage">{{ level }}%</span>
    </div>
</template>
  
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
  
    .Percentage {
        font-size: 14px;
        margin-top: 5px;
    }
</style>
  