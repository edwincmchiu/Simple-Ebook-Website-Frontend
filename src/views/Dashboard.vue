<template>
  <div>
    <h2>Dashboard</h2>
    <div class="profile-info">
      <h2>User Profile</h2>
      <div class="user-info">
        <p v-if="error" class="error-message">{{ error }}</p>
        <div v-else>
          <p><strong>Username:</strong> {{ user.username }}</p>
          <p><strong>Points:</strong> {{ user.point }}</p>
          <!-- Add more profile information here as needed -->
        </div>
      </div>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import apiClient from '../services/apiClient.js'; // Adjust the import path as needed

export default {
  data() {
    return {
      user: {},
      error: null
    };
  },
  async created() {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      const response = await fetch(`http://localhost:8000/user/${userId}`, {
        method: 'GET',
        headers: {
          'Access-Token': token
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();
      this.user = data;
    } catch (error) {
      console.error('Error:', error);
      this.error = 'Failed to fetch user data. Please try again later.';
    }
  },
  methods: {
    logout() {
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = '/login';
    }
  }
};
</script>

<style>

</style>
