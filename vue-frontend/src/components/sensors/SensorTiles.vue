<script setup>
    import { ref, onMounted, onUnmounted, computed } from 'vue';
    import axios from 'axios';
    import { storeToRefs } from 'pinia';
    import Tile from './Tile.vue';
    import PaginationButtons from '../shared/PaginationButtons.vue';
    import { useTileModeStore } from '../../stores/tileModeStore';
    
    const  store  = useTileModeStore();
    const { expanded } = storeToRefs(store);
    const sensorData = ref([]);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const loading = ref(true);

    const fetchData = async () => {
        try {
            loading.value = true;
            const response = await axios.get(`http://localhost:3000/sensor?page=${currentPage.value}`);
            sensorData.value = response.data;
            totalPages.value = 25;//parseInt(response.headers['x-total-pages'], 10);
            loading.value = false;
        } catch (error) {
            console.error('Error fetching sensor data:', error);
            loading.value = false;
        }
    };

    const handlePrevPage = () => {
        if (currentPage.value > 1) {
            currentPage.value -= 1;
            fetchData();
        }
    };

    const handleNextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value += 1;
            fetchData();
        }
    };

    const updateSensorData = (newData) => {
        const index = sensorData.value.findIndex(sensor => sensor.SensorId === newData.SensorId);
        if (index !== -1) {
            Object.assign(sensorData.value[index], newData);
        }
    };

    const ws = new WebSocket('ws://localhost:8080');

    onMounted(() => {
        fetchData();
        ws.onmessage = (event) => {
            const newData = JSON.parse(event.data);
            updateSensorData(newData);
        };
    });

    onUnmounted(() => {
        if (ws) {
            ws.close();
        }
    });

</script>

<template>
    <div class="SensorTiles" :style="expanded ? { gridTemplateColumns: 'repeat(4, 1fr)' } : { gridTemplateColumns: 'repeat(10, 1fr)' }">
        <template v-if="loading">
            <div>Loading...</div>
        </template>
        <template v-else>
            <p>{{ expanded }}</p>
        <template v-for="(data, index) in sensorData" :key="index">
            <Tile :data="data" />
        </template>
        <div class="PaginationButtonsWrapper">
            <PaginationButtons
                :currentPage="currentPage"
                :totalPages="totalPages"
                @onPrevPage="handlePrevPage"
                @onNextPage="handleNextPage"
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
  