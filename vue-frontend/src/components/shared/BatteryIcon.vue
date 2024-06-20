<script setup>
    import { ref, computed } from 'vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    const props = defineProps({
        level: {
            type: Number,
            required: true
        }
    });

    let Icon;
    let percentageColor;

    if (props.level >= 75) {
        Icon = ['fas', 'battery-full'];
        percentageColor = 'green';
    } else if (props.level >= 50) {
        Icon = ['fas', 'battery-half'];
        percentageColor = 'darkOrange';
    } else {
        Icon = ['fas', 'battery-empty'];
        percentageColor = 'red';
    }

</script>

<template>
    <div class="BatteryIcon">
        <component :is="Icon" class="icon" :style="{ color: percentageColor }" />
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
  