<template>
  <div class="loginBox">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" v-model="username" required>
      <label for="password">Password:</label>
      <input type="password" v-model="password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const username = String(this.username);
        const password = String(this.password);

        const requestBody = new URLSearchParams();
        requestBody.append('username', username);
        requestBody.append('password', password);

        const response = await fetch('http://0.0.0.0:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: requestBody
        });

        if (!response.ok) {
          throw new Error('Login failed with status: ' + response.status);
        }
        alert('success');
        this.$router.push('/dashboard');
        
      } catch (error) {
        alert('Login failed: ' + error.message);
        console.error('Login failed', error);
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style>
.loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1a1a1a;
  /* Dark background color */
  padding: 20px;
  border-radius: 15px;
  /* Increase border radius for decorative effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  /* Soft shadow */
  border: 2px solid #6b472c;
  /* Border color */
}

.loginBox h2 {
  margin-bottom: 20px;
  font-size: 24px;
  /* Increase font size */
  color: #b8860b;
  /* Text color */
  text-align: center;
  /* Center text */
}

.loginBox label {
  display: block;
  margin-bottom: 10px;
  color: #b8860b;
  /* Label text color */
}

.loginBox input[type="text"],
.loginBox input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #6b472c;
  /* Input border color */
  border-radius: 8px;
  /* Input border radius */
  background-color: #302720;
  /* Input background color */
  color: #b8860b;
  /* Input text color */
}

.loginBox button {
  width: 100%;
  padding: 12px;
  background-color: #6b472c;
  /* Button background color */
  color: #fff;
  /* Button text color */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  /* Smooth transition */
}

.loginBox button:hover {
  background-color: #8b5a2b;
  /* Darker background color on hover */
}
</style>
