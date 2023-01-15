import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Proposal from './pages/Proposal.vue'
import AboutUs from './pages/AboutUs.vue'
import ContactUs from './pages/ContactUs.vue'
import Faq from './pages/Faq.vue'


const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },  
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about-us',
      component: AboutUs
    },
       {
      path: '/faq',
      component: Faq
    },
       {
      path: '/contact-us',
      component: ContactUs
    },
    {
      path: '/proposal-call',
      component: Proposal
    }
  ]
})

export default router
