<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 Pics Library</p>
        <!-- <nav class="footer-nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav> -->
        <p>Made by L Group.</p>
      </div>
    </footer>
  </template>
  
  <style>
  .footer {
    background-color: #130d0a;
    color: #fff;
    padding: 20px 0;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-nav {
    display: flex;
  }
  
  .nav-link {
    color: #fff;
    text-decoration: none;
    margin-left: 20px;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #f39c12;
  }
  </style>
  