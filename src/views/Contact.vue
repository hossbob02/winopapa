<template>
    <div class="container">
          <!--==========================
    Contact Section
  ============================-->
  <section id="contact" class="padd-section wow fadeInUp">

    <div class="container">
      <div class="section-title text-center">
        <h2>Contact</h2>
        <p class="separator">Contact Us With Email Or Social Media</p>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center">

        <div class="col-lg-3 col-md-4">

          <div class="info">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>Rue Mohamed Salah Khabthani 233 Hay Khadhra<br>Tunisia, Beja 9000</p>
            </div>

            <div class="email">
              <i class="fa fa-envelope"></i>
              <p>winopapa@gmail.com</p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>+21628667542</p>
            </div>
          </div>

          <div class="social-links">
            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
            <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
            <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
          </div>

        </div>

        <div class="col-lg-5 col-md-8">
          <div class="form" @submit="onsubmit">
            <div id="errormessage"></div>
            <form action="" method="post" role="form" class="contactForm">
              <div class="form-group">
                <input type="text" name="name" class="form-control" v-model="contact.name"  id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" id="email" v-model="contact.email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" v-model="contact.subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" v-model="contact.message" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validation"></div>
              </div>
              <div class="alert alert-success" v-if="messageSuccess">{{messageSuccess}}</div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section><!-- #contact -->
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
   name:'Contact',
  data(){
    return{
      contact:{},
      messageSuccess:'',
      ref:firebase.firestore().collection('allcontacts')
    }
  },
  methods:{
    onsubmit(evt){
            evt.preventDefault()
      this.ref.add(this.contact).then(()=>{
        this.contact.name=''
        this.contact.email=''
        this.contact.subject=''
        this.contact.message=''
        this.messageSuccess='Your message has been sent, We will contact you with your Email Thank you! '
      }).catch((err)=>alert('Error',err))
    }
  }
}
</script>