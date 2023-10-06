import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import SignInView from '../views/SignInView.vue';
import DashboardView from '../views/DashboardView.vue';
import BlogView from '../views/BlogView.vue';
import CvPageView from '../views/CvPageView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
    {
        path: '/sign-in',
        name: 'signin',
        component: SignInView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView
    },
    {
        path: '/cv',
        name: 'cv',
        component: CvPageView
    }
  ]
})

export default router
