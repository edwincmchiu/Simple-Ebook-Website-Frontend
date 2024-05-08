<template>
  <div>
    <div class="header">
      <div class="logo">Pics Library</div>
      <nav class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </div>

    <div id='hero'>
      <div class='layer-bg layer' data-depth='0.10' data-type='parallax'></div>
      <div class='layer-1 layer' data-depth='0.20' data-type='parallax'></div>
      <div class='layer-2 layer' data-depth='0.50' data-type='parallax'></div>
      <div class='layer-3 layer' data-depth='0.80' data-type='parallax'></div>
      <div class='layer-overlay layer' data-depth='0.85' data-type='parallax'></div>
      <!-- New text layer -->
      <div class="text-layer">
        <h1>Welcome to Pics Library</h1>
        <p>Discover amazing images and explore the world of art.</p>
      </div>
    </div>
    <div id='hero-mobile'></div>

    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.addEventListener('scroll', () => {
    const topDistance = window.pageYOffset
    const layers = document.querySelectorAll("[data-type='parallax']")
    
    for (const layer of layers) {
      const depth = layer.getAttribute('data-depth')
      const movement = -(topDistance * depth)
      const translate3d = 'translate3d(0, ' + movement + 'px, 0)'
      layer.style['-webkit-transform'] = translate3d
      layer.style['-moz-transform'] = translate3d
      layer.style['-ms-transform'] = translate3d
      layer.style['-o-transform'] = translate3d
      layer.style.transform = translate3d
    }
  })
})
</script>

<style>
/* Add your CSS styles here */
body {
	padding: 0;
	margin: 0;
	background-color: #130d0a;
  font-family: Arial;
	/* font-family: "Playfair Display", serif; */
	color: #fff;
}

#hero {
	height: 800px;
	overflow: hidden;
	position: relative;
}
#hero-mobile {
	display: none;
	background: url("https://i.ibb.co/d7hw559/full-illustration.png") no-repeat center bottom / cover;
	height: 320px;
}

.layer {
	background-position: bottom center;
	background-size: auto;
	background-repeat: no-repeat;
	width: 100%;
	height: 800px;
	position: fixed;
	z-index: -1;
}

.layer-bg {
	background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg");
}
.layer-1 {
	background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png");
	background-position: left bottom;
}
.layer-2 {
	background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png");
}
.layer-3 {
	background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png");
	background-position: right bottom;
}
.layer-overlay {
	background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png");
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
	background-color:#130d0a;
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

.content {
  background-color: #130d0a;
	padding: 100px 20px;
	width: 100vw;
	height: fit-content;
	/* overflow: auto; */
}

.text-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.text-layer h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.text-layer p {
  font-size: 18px;
}
</style>
