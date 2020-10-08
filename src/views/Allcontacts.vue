<template>
    <div class="container">
        <br>
        <h4 style="text-align:center;">***** All Contacts *****</h4>
        <br>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Subject</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in contacts" :key="item.key">
      <td>{{item.name}}</td>
      <td>{{item.email}}</td>
      <td>{{item.subject}}</td>
      <td><button type="submit" class="alert alert-primary" data-toggle="modal" data-target="#exampleModal" @click="details(item.message)">Details</button></td>
    </tr>
    
  </tbody>
</table>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {{dataModel.message}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    </div>
</template>

<script>
import firebase from '../Firebase'
export default {
  name:'Allcontacts',
  data(){
  return { 
    contacts:[],
    ref:firebase.firestore().collection('allcontacts'),
     dataModel:{
      message:'',
    }
    } 
   
  },
  created(){
    this.ref.onSnapshot((querySnapshot)=>{
      this.contacts=[]
      querySnapshot.forEach((doc)=>{
        this.contacts.push({
          key:doc.id,
          name:doc.data().name,
          email:doc.data().email,
          subject:doc.data().subject,
          message:doc.data().message
        })
      })
    })
  },
  methods:{
    details(message){
      this.dataModel.message=message
    }
  }        
}

</script>