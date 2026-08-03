import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import ProductPage from '../pages/ProductPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: LandingPage },
    { path: '/product', name: 'product', component: ProductPage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/contact', name: 'contact', component: ContactPage },
  ],
})

export default router
