<script>
  import { ref, reactive, watchEffect } from 'vue';
  import axios from 'axios';
  import Tile from './Tile.vue';
  import PaginationButtons from '../shared/PaginationButtons.vue';
  
  export default {
    components: {
      Tile,
      PaginationButtons,
    },
    setup() {
      const expanded = ref(false);
      const sensorData = ref([]);
      const currentPage = ref(1);
      const totalPages = ref(1);
      const loading = ref(true);
  
      const fetchData = async () => {
        try {
          loading.value = true;
          const response = await axios.get(`http://localhost:3000/sensor?page=${currentPage.value}`);
          sensorData.value = response.data;
          const totalPagesHeader = response.headers['x-total-pages'];
          totalPages.value = totalPagesHeader;
          loading.value = false;
        } catch (error) {
          console.error('Error fetching sensor data:', error);
          loading.value = false;
        }
      };
  
      watchEffect(() => {
        fetchData();
      });
  
      const handlePrevPage = () => {
        currentPage.value--;
      };
  
      const handleNextPage = () => {
        currentPage.value++;
      };
  
      const isNextDisabled = computed(() => currentPage.value === totalPages.value);
      const gridTemplateColumns = computed(() => expanded.value ? 'repeat(4, 1fr)' : 'repeat(10, 1fr)');
  
      return {
        expanded,
        sensorData,
        currentPage,
        totalPages,
        loading,
        handlePrevPage,
        handleNextPage,
        isNextDisabled,
        gridTemplateColumns,
      };
    },
  };
</script>

<template>
    <div class="SensorTiles" :style="{ gridTemplateColumns: gridTemplateColumns }">
      <div v-if="loading">Loading...</div>
      <div v-else>
        <Tile v-for="(data, index) in sensorData" :key="index" :data="data" />
        <div class="PaginationButtonsWrapper">
          <PaginationButtons
            :currentPage="currentPage"
            :totalPages="totalPages"
            @prevPage="handlePrevPage"
            @nextPage="handleNextPage"
            :isNextDisabled="isNextDisabled"
          />
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .SensorTiles {
    display: grid;
    gap: 20px;
    justify-items: center; 
    margin-top: 20px;
    }
    
    .PaginationButtonsWrapper {
        grid-column: 1 / -1; 
        justify-self: center;
        margin-top: 20px;

    }
  </style>
  