import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '@/pages/Welcome.vue';
import singUpForm from '@/components/sign/singUpForm.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Welcome,
  },
  {
    path: '/signup',
    name: 'signUp',
    component: singUpForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
