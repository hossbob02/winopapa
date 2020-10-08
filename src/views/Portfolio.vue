<template>
    <div class="container">
        <!--==========================
    Blog Section
  ============================-->
  <section id="blog" class="padd-section wow fadeInUp">

    <div class="container">
      <div class="section-title text-center">

        <h2>Our Portfolios</h2>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-md-6 col-lg-4" v-for="item in portfolio" :key="item.key" style="margin-top: 15px;">
          <div class="block-blog text-left">
            <a v-bind:href="item.url" target="_blank"><img v-bind:src="item.image" alt="img" style="height: 210px;"></a>
            <div class="content-blog">
              <h4><a v-bind:href="item.url" target="_blank">{{item.titre}}</a></h4>
              <a class="pull-right readmore btn btn-success" style="color:white;" v-bind:href="item.url" target="_blank">Preview</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   <footer class="footer">
  <div class="copyrights">
      <div class="container">
        <p>&copy; Copyrights WinoPapa 2013-2020. All rights reserved.</p>
       
      </div>
    </div>
    </footer>
    </div>
</template>

<script>
import firebase from '../Firebase'
export default {
  name:'Portfolio',
  data(){
    return{
      portfolio:[],
      ref:firebase.firestore().collection('portoflios')
    }
  },

  created(){
    this.ref.onSnapshot((querySnapshot)=>{
      this.portfolio=[]
      querySnapshot.forEach((doc)=>{
        this.portfolio.push({
          key:doc.id,
          titre:doc.data().titre,
          image:doc.data().image,
          url:doc.data().url,
        })
      })
    })
  }
  
}
</script>