import { createRouter, createWebHistory } from 'vue-router';
import SensorTiles from '../components/sensors/SensorTiles.vue';
import SensorDetail from '../components/sensors/SensorDetail.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Sensors',
        component: SensorTiles
      }, {
        path: '/sensor/:id',
        name: 'SensorDetail',
        component: SensorDetail
      },
    ],
  });