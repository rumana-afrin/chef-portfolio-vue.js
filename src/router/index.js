import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { layout: 'DefaultLayout' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { layout: 'DefaultLayout' },
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('../views/Recipe.vue'),
      meta: { layout: 'DefaultLayout' },
    },
    {
      path: '/vegetable',
      name: 'vegetable',
      component: () => import('../views/Vegetable.vue'),
      meta: { layout: 'DefaultLayout' },
    },
    {
      path: '/nonvag',
      name: 'nonvag',
      component: () => import('../views/NonVeg.vue'),
      meta: { layout: 'DefaultLayout' },
    },
    {
      path: '/single-view/:id',
      name: 'single-view',
      component: () => import('../views/SingleView.vue'),
      meta: { layout: 'DefaultLayout' },
      props: true,
    },
    {
      path: '/gallary',
      name: 'gallary',
      component: () => import('../views/GallaryView.vue'),
      meta: { layout: 'DefaultLayout' },
    },

    //page not found /:pathMatch(.*)*
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/NotFound.vue'),
      meta: { layout: 'notfound' },
    },
    
  ]
})

export default router
