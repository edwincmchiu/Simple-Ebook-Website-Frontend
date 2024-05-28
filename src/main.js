import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useStore, fetchUserData } from './store/index.js';
import axios from 'axios';

const app = createApp(App)

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://0.0.0.0:8000/'; 

// Add a global navigation guard
router.beforeEach((to, from, next) => {
  const store = useStore(); // Use useStore to access the store
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    // If the route requires authentication and the user is not authenticated,
    // redirect to the login page
    next('/login')
  } else {
    // Otherwise, proceed to the next route
    next()
  }
})

app.use(router)
app.mount('#app')
