<template>
  <div>
    <h2>Dashboard</h2>
    <p>Welcome, {{ username }}!</p>
    <p>Welcome, {{ username }}!</p>
    <p>Welcome, {{ username }}!</p>
    <p>Welcome, {{ username }}!</p>
  </div>
</template>

<script>
import apiClient from '../services/apiClient.js'; // Adjust the import path as needed

export default {
  data() {
    return {
      username: null
    };
  },
  async created() {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://0.0.0.0:8000/user/1', {
        method: 'GET',
        headers: {
          'access-token': token
        },
      });
      const data = await response.json();
      this.username = data.username;
      if (!response.ok) {
        throw new Error('failed with status: ' + response.status);
      }
    } catch (error) {
      console.error('Failed to fetch user info:', error);
    }
  }
};
</script>

<style>
/* Your styles */
</style>
