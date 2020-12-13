import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '@/pages/Main.vue';
import History from '@/pages/History.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/history/:type',
    name: 'history',
    component: History,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
