import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Team from './views/Team.vue'
import Categories from './views/Categories.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component:Projects
      
    },
    {
      path: '/team',
      name: 'team',
      component:Team
    },
    {
      path: '/categories',
      name: 'categories',
      component:Categories
    }
   
  ]
})
