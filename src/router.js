import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Proposal from './pages/Proposal.vue'


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
      path: '/proposal-call',
      component: Proposal
    }
  ]
})

export default router
