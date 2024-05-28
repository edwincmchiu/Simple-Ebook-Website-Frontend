<template>
  <div>
    <div class="header">
      <div class="logo">Pics Library</div>
      <nav class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About Us</router-link>
        <router-link to="/rankings" class="nav-link">Rankings</router-link>
        <router-link v-if="!state.isAuthenticated" to="/login" class="nav-link">Login</router-link>
        <router-link v-if="state.isAuthenticated && state.userData.username" to="/dashboard" class="nav-link">
          {{ state.userData.username }}'s Dashboard
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore, fetchUserData } from '@/store/index.js';  // Adjust the path if necessary

const state = useStore();

onMounted(() => {
  fetchUserData();
});
</script>

<style>
/* Add your CSS styles here */
body {
  padding: 0;
  margin: 0;
  background-color: #130d0a;
  font-family: Arial, sans-serif;
  color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #130d0a;
  color: #fff;
  padding: 0 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  display: flex;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #f39c12;
}
</style>
