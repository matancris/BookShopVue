import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookApp from '../views/BookApp.vue'
import About from '../views/About.vue'
import BookDetails from '../views/BookDetails.vue'
import AboutShop from '@/cmps/AboutShop.vue'
import AboutTeam from '@/cmps/AboutTeam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: '/about/shop',
        component: AboutShop
      },
      {
        path: '/about/team',
        component: AboutTeam
      },

    ]
  },
  {
    path: '/book',
    name: 'Books',
    component: BookApp
  },

  {
    path: '/book/:id',
    component: BookDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
