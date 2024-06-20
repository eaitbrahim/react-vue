<script setup>
import { computed, ref, watchEffect } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
const props = defineProps({
  message: String,
  icon: String
});
const backgroundColor = ref('red');
const textColor = ref('white');
const iconobject = computed(() => {
    switch (props.icon){
        case 'faExclamationCircle':
            return ['fas', 'exclamation-circle'];
        case 'faSignal':
            return ['fas', 'signal'];
        case 'faBatteryEmpty':
            return ['fas' , 'battery-empty']
    }
});

watchEffect(() => {
  const interval = setInterval(() => {
    backgroundColor.value = backgroundColor.value === 'red' ? 'white' : 'red';
    textColor.value = textColor.value === 'white' ? 'blue' : 'white';
  }, 1000);

  return () => clearInterval(interval);
});
</script>

<template>
  <div class="alarm" :style="{ backgroundColor, color: textColor }">
    <font-awesome-icon :icon="iconobject" class="icon" />
    {{ message }}
  </div>
</template>

<style scoped>
.alarm {
    background-color: red;
    color: white;
    padding: 3px 12px;
    margin-bottom: 5px;
    border-radius: 8px;
  }

  .icon {
    margin-right: 3px; 
  }
</style>
