<template>
    <div class="container">
        <br>
        <br>
        <form @submit="onsubmit">
  <div class="form-group">
    <label for="exampleInputEmail1" >Titre</label>
    <input type="test" class="form-control" v-model="portfolio.titre" >
  </div>

   <div class="form-group">
    <label for="exampleInputEmail1">Image</label>
    <input type="test" class="form-control"  v-model="portfolio.image">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Url</label>
    <input type="test" class="form-control"  v-model="portfolio.url">
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
</template>
<script>
import firebase from '../Firebase'
import router from '../router'
export default {
  name:'Addportoflio',
  data(){
    return{
      portfolio:{},
      ref:firebase.firestore().collection('portoflios')
    }
  },
  methods:{
    onsubmit(evt){
            evt.preventDefault()
      this.ref.add(this.portfolio).then(()=>{
        this.portfolio.titre=''
        this.portfolio.image=''
        this.portfolio.url=''
        router.push({
          name:'Portfolio'
        })
      }).catch((err)=>alert('Error',err))
    }
  }
}
</script>