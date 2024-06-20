import { createRouter, createWebHistory } from 'vue-router';
import SensorTiles from '../components/sensors/SensorTiles.vue';
import SensorDetail from '../components/sensors/SensorDetail.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'All Sensors',
        component: SensorTiles
      }, {
        path: '/sensor/:id',
        name: 'Sensor Detail',
        component: SensorDetail
      },
    ],
  });