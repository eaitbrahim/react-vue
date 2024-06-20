<script setup>
    import { ref, reactive, onMounted, onUnmounted, watchEffect } from 'vue';
    import axios from 'axios';
    import Tile from './Tile.vue';
    import PaginationButtons from '../shared/PaginationButtons.vue';
    
    const { expanded } = true;//useTileMode();
    const sensorData = ref([]);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const loading = ref(true);

    const styleExpanded = { gridTemplateColumns: 'repeat(4, 1fr)' };
    const styleCollapsed = { gridTemplateColumns: 'repeat(10, 1fr)' };

    const fetchData = async () => {
        try {
            loading.value = true;
            const response = await axios.get(`http://localhost:3000/sensor?page=${currentPage.value}`);
            sensorData.value = response.data;
            totalPages.value = parseInt(response.headers['x-total-pages'], 10);
            loading.value = false;
        } catch (error) {
            console.error('Error fetching sensor data:', error);
            loading.value = false;
        }
    };

    const handlePrevPage = () => {
        currentPage.value -= 1;
    };

    const handleNextPage = () => {
        currentPage.value += 1;
    };

    const ws = new WebSocket('ws://localhost:8080');

    onMounted(() => {
        ws.onmessage = (event) => {
            const newData = JSON.parse(event.data);
            updateSensorData(newData);
        };
    });

    onUnmounted(() => {
        ws.close();
    });

    const updateSensorData = (newData) => {
        const index = sensorData.value.findIndex(sensor => sensor.SensorId === newData.SensorId);
        if (index !== -1) {
            sensorData.value[index] = { ...sensorData.value[index], ...newData };
        }
    };

    watchEffect(() => {
        fetchData();
    });
</script>

<template>
    <div class="sensorTiles" :style="[expanded ? styleExpanded : styleCollapsed]">
        <template v-if="loading">
            <div>Loading...</div>
        </template>
        <template v-else>
        <template v-for="(data, index) in sensorData" :key="index">
            <Tile :data="data" />
        </template>
        <div class="PaginationButtonsWrapper">
            <PaginationButtons
                :currentPage="currentPage"
                :totalPages="totalPages"
                @onPrevPage="handlePrevPage"
                @onNextPage="handleNextPage"
                :isNextDisabled="isNextDisabled"
            />
        </div>
        </template>
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
  