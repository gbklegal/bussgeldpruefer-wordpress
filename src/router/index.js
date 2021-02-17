import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bussgeldbescheid-pruefen',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/ratgeber',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/bussgeldkatalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/wie-funktioniert-es',
    name: 'Process',
    component: () => import('../views/Process.vue')
  },
  {
    path: '/relevante-themen',
    name: 'Topics',
    component: () => import('../views/Topics.vue')
  },
  {
    path: '/partnerprogramm',
    name: 'Partner',
    component: () => import('../views/Partner.vue')
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/impressum',
    name: 'LegalContact',
    component: () => import('../views/LegalContact.vue')
  },
  {
    path: '/rechtliche-hinweise',
    name: 'TermsOfService',
    component: () => import('../views/TermsOfService.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
