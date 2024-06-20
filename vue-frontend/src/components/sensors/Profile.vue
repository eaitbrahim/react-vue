<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <div class="Sensor">
        <div class="icon">
            <font-awesome-icon :icon="['fas', 'tools']" size="6x" />
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
  