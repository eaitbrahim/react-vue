<script>
  import { defineComponent, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default defineComponent({
    setup() {
      const route = useRoute();
      const title = computed(() => {
        return route.path.includes('/sensor/') ? 'Sensor Detail' : 'All Sensors';
      });
  
      return {
        title,
        styles,
      };
    },
  });
</script>
  
<template>
    <div class="title">
        <span>{{ title }}</span>
    </div>
</template>
  
<style scoped>
  .title {
    font-weight: bold;
    color: white;
  }
</style>
  