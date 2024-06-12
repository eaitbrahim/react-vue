<script>
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; 
import { faTools } from '@fortawesome/free-solid-svg-icons'; 

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const faTools = faTools;

    return {
      faTools,
      classes,
    };
  },
});
</script>

<template>
    <div class="sensor">
      <div class="icon">
        <font-awesome-icon icon="faTools" size="6x" />
      </div>
      <div class="message">
        Profile Under Construction
      </div>
    </div>
  </template>
  
  <style scoped>
  .Sensor {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .icon {
    margin-bottom: 20px;
  }
  
  .message {
    font-size: 24px;
    font-weight: bold;
  }
  </style>
  