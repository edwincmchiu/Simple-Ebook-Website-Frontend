import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { useStore, fetchUserData } from './store/index.js';
import axios from 'axios';

const app = createApp(App);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://0.0.0.0:8000/';

// Fetch user data on app initialization
fetchUserData();

router.beforeEach((to, from, next) => {
  const store = useStore();
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

app.use(router);
app.mount('#app');
