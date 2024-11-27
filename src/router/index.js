import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Actualites from '../views/Actualites.vue'
import Presentation from '../views/Presentation.vue'
import Ecole from '../views/Ecole.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/actualites',
      name: 'Actualites',
      component: Actualites
    },
    {
      path: '/presentation',
      name: 'Presentation',
      component: Presentation
    },
    {
      path: '/ecole',
      name: 'Ecole',
      component: Ecole
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router