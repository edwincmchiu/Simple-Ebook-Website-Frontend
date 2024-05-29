<template>
    <div class="registerBox">
        <h2>Register</h2>
        <form @submit.prevent="register">
            <label for="username">Username:</label>
            <input type="text" v-model="username" required>
            <label for="password">Password:</label>
            <input type="password" v-model="password" required>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import { fetchUserData } from '@/store/index.js';

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        async register() {
            try {
                const requestBody = {
                    username: this.username,
                    password: this.password
                };

                const response = await fetch('http://0.0.0.0:8080/api/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: requestBody
                });

                if (!response.ok) {
                    throw new Error('Register failed with status: ' + response.status);
                }
                alert('Register successful, please log in again');
                this.$router.push('/login');

            } catch (error) {
                alert('Register failed: ' + error.message);
                console.error('Register failed', error);
                this.$router.push('/register');
            }
        }
    }
};
</script>

<style>
.registerBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #1a1a1a;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    border: 2px solid #6b472c;
}

.registerBox h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #b8860b;
    text-align: center;
}

.registerBox label {
    display: block;
    margin-bottom: 10px;
    color: #b8860b;
}

.registerBox input[type="text"],
.registerBox input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #6b472c;
    border-radius: 8px;
    background-color: #302720;
    color: #b8860b;
}

.registerBox button {
    width: 100%;
    padding: 12px;
    background-color: #6b472c;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.registerBox button:hover {
    background-color: #8b5a2b;
}
</style>