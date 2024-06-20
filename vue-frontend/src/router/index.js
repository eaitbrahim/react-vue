import { createRouter, createWebHistory } from 'vue-router';

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