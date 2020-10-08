<template>
<div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background: #71c55d!important;">
  <div class="container">
    <a class="navbar-brand" href="/" style="color:white;">WinoPapa</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" style="margin-left: 30%;">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/" style="color:white;">Home</router-link>
      </li>
      <li class="nav-item ">
        <router-link class="nav-link" to="/portfolio" style="color:white;">Portfolios</router-link>
      </li>
       <li class="nav-item ">
        <router-link class="nav-link" to="/contact" style="color:white;">Contact</router-link>
      </li>
      <li class="nav-item " v-if="user">
        <router-link class="nav-link" to="/addportoflio" style="color:white;">Add Portfolio</router-link>
      </li>
         <li class="nav-item " v-if="user">
        <router-link class="nav-link" to="/allcontacts" style="color:white;">All Contacts</router-link>
      </li>
      <li class="nav-item " v-if="user" style="color:white;">
        <a class="nav-link" style="cursor:pointer;" @click="logout()" >Logout</a>
      </li>
     
    </ul>
  </div>
  </div>
</nav>


</div>

</template>
<script>
import firebase from '../Firebase'
import router from '../router'
export default {
  name:'Navbar',
  data(){
		return {user:null}
	},
	created(){
		firebase.auth().onAuthStateChanged((user)=>{
			if (user) {
				this.user=user
			} else {
				this.user=null
			}
		})
	},
  methods:{
    logout(){
		firebase.auth().signOut().then(()=>{
			router.push({
				name:'Login'
			})
		})}
  }
}
</script>



<style>
.main-item {
  width: 150px;
  height: 150px;
  position: relative;
}
li a{
      font-family: sans-serif;
    font-size: 15px;
}
</style>