import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // {
  //   path: '/',
  //   name: 'HomePage',
  //   component: HomePage,
  // },
  // {
  //   path: '/create',
  //   name: 'CreatePost',
  //   component: CreatePost,
  // },
  // {
  //   path: '/article/:id',
  //   name: 'articlePage',
  //   props: true,
  //   component: articlePage,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
