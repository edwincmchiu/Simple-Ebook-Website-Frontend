import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Dashboard from '../views/Dashboard.vue'
import TestView from '../views/TestView.vue'

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
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      //meta: { requiresAuth: true } // Specify that this route requires authentication
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = document.cookie.includes('token'); // Check if token exists in cookies
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router
