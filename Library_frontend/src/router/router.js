import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'; // Certifique-se do caminho correto
import Login from '@/components/Login.vue'; // Certifique-se do caminho correto

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


