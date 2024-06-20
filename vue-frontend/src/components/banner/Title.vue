<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const title = computed(() => route.name);
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
  