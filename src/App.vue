<template>
  <div id="app">
    <Navbar/>  
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components:{
    Navbar
  },

}
</script>
<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
@import './assets/lib/bootstrap/css/bootstrap.min.css';
@import './assets/lib/owlcarousel/assets/owl.carousel.min.css';
@import './assets/lib/owlcarousel/assets/owl.theme.default.min.css';
@import './assets/lib/font-awesome/css/font-awesome.min.css';
@import './assets/lib/animate/animate.min.css';
@import './assets/lib/modal-video/css/modal-video.min.css';
@import './assets/css/style.css';


</style>
