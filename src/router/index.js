import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Dashboard from '../views/Dashboard.vue'
import TestView from '../views/TestView.vue'
import Rankings from '../views/RankingsView.vue'
import AboutUs from '../views/AboutUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView, 
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView, 
    },
    {
      path: '/test',
      name: 'Test',
      component: TestView, 
    },
    {
      path: '/rankings',
      name: 'Rankings',
      component: Rankings, 
    },
    {
      path: '/about',
      name: 'About Us',
      component: AboutUs, 
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      //meta: { requiresAuth: true } // Specify that this route requires authentication
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Update the authentication state
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated.value) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router
