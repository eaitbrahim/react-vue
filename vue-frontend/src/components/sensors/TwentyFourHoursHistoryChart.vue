<script>
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faTools,
    };
  },
};
</script>

<template>
    <div class="Sensor">
      <div class="icon">
        <font-awesome-icon icon="faTools" size="6x" />
      </div>
      <div class="message">
        Chart Under Construction
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
  