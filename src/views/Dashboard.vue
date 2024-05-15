<template>
    <div>
      <h1>Welcome, {{ username }}!</h1>
      <!-- Your dashboard content goes here -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: ''
      };
    },
    methods: {
      async fetchUserData() {
        try {
          const token = localStorage.getItem('Access-Token');
          if (!token) {
            throw new Error('Token not found');
          }
  
          const response = await fetch('http://0.0.0.0:8000/user/1', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
  
          const userData = await response.json();
          this.username = userData.username;
  
        } catch (error) {
          console.error('Failed to fetch user data', error);
          alert("fail");
        }
      }
    },
    mounted() {
      this.fetchUserData();
    }
  };
  </script>
  
  <style>
  /* Dashboard component styles go here */
  </style>
  