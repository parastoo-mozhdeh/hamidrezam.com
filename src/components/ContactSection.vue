
<template>
   <!-- Contact Section
   ================================================== -->
   <section id="contact">

<div class="row section-head">

   <div class="two columns header-col">

      <h1><span>Get In Touch.</span></h1>

   </div>

   <div class="ten columns">

         <p class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
         eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
         voluptatem quia voluptas sit aspernatur aut odit aut fugit.
         </p>

   </div>

</div>

<div class="row">

   <div class="eight columns">

      <!-- form -->
      <form action="" method="post" id="contactForm" name="contactForm">
           <fieldset>

         <div>
                  <label for="contactName">Name <span class="required">*</span></label>
                  <input type="text" value="" size="35" id="contactName" name="contactName">
         </div>

         <div>
                  <label for="contactEmail">Email <span class="required">*</span></label>
                  <input type="text" value="" size="35" id="contactEmail" name="contactEmail">
         </div>

         <div>
                  <label for="contactSubject">Subject</label>
                  <input type="text" value="" size="35" id="contactSubject" name="contactSubject">
         </div>

         <div>
            <label for="contactMessage">Message <span class="required">*</span></label>
            <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
         </div>

         <div>
            <button class="submit">Submit</button>
            <span id="image-loader">
               <img alt="" src="../images/loader.gif">
            </span>
         </div>

           </fieldset>
          </form> <!-- Form End -->

      <!-- contact-warning -->
      <div id="message-warning"> Error boy</div>
      <!-- contact-success -->
          <div id="message-success">
         <i class="fa fa-check"></i>Your message was sent, thank you!<br>
          </div>

   </div>


   <aside class="four columns footer-widgets">

      <div class="widget widget_contact">

              <h4>Address and Phone</h4>
              <p class="address">
                  Jonathan Doe<br>
                  1600 Amphitheatre Parkway <br>
                  Mountain View, CA 94043 US<br>
                  <span>(123) 456-7890</span>
              </p>

          </div>

      <div class="widget widget_tweets">

         <h4 class="widget-title">Latest Tweets</h4>

         <ul id="twitter">
            <li>
               <span>
               This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
               Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
               <a href="#">http://t.co/CGIrdxIlI3</a>
               </span>
               <b><a href="#">2 Days Ago</a></b>
            </li>
            <li>
               <span>
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
               eaque ipsa quae ab illo inventore veritatis et quasi
               <a href="#">http://t.co/CGIrdxIlI3</a>
               </span>
               <b><a href="#">3 Days Ago</a></b>
            </li>
         </ul>

        </div>

   </aside>

</div>

</section> <!-- Contact Section End-->
  </template>
  
  <script>
  export default {
    name: 'ContactSection', // The name of your component
    data() {
      return {
        // Data properties for your component
      };
    },
    methods: {
      // Methods for your component
    },
    computed: {
      // Computed properties for your component
    },
    // Other component options such as props, watch, etc.
  }
  </script>
  
  <style scoped>
 
 /* Contact Section */
 
#contact {
   background: #191919;
   padding-top: 96px;
   padding-bottom: 102px;
   color: #636363;
}
#contact .section-head { margin-bottom: 42px; }

#contact a, #contact a:visited  { color: #11ABB0; }
#contact a:hover, #contact a:focus { color: #fff; }

#contact h1 {
   font: 18px/24px 'opensans-bold', sans-serif;
   text-transform: uppercase;
   letter-spacing: 3px;
   color: #EBEEEE;
   margin-bottom: 6px;
}
#contact h1 span { display: none; }
#contact h1:before {
   font-family: 'FontAwesome';
   content: "\f0e0";
	padding-right: 10px;
	font-size: 72px;
   line-height: 72px;
   text-align: left;
   float: left;
   color: #ebeeee;
}

#contact h4 {
   font: 16px/24px 'opensans-bold', sans-serif;
   color: #EBEEEE;
   margin-bottom: 6px;
}
#contact p.lead {
   font: 18px/36px 'opensans-light', sans-serif;
   padding-right: 3%;
}
#contact .header-col { padding-top: 6px; }


/* contact form */
#contact form { margin-bottom: 30px; }
#contact label {
   font: 15px/24px 'opensans-bold', sans-serif;
   margin: 12px 0;
   color: #EBEEEE;
	display: inline-block;
	float: none;
   width: 26%;
}
#contact input,
#contact textarea,
#contact select {
   padding: 18px 20px;
	color: #eee;
	background: #373233;
	margin-bottom: 42px;
	border: 0;
	outline: none;
   font-size: 15px;
   line-height: 24px;
   width: 65%;
}
#contact input:focus,
#contact textarea:focus,
#contact select:focus {
	color: #fff;
	background-color: #11ABB0;
}
#contact button.submit {
	text-transform: uppercase;
	letter-spacing: 3px;
	color:#fff;
   background: #0D0D0D;
	border: none;
   cursor: pointer;
   height: auto;
   display: inline-block;
	border-radius: 3px;
   margin-left: 26%;
}
#contact button.submit:hover {
	color: #0D0D0D;
	background: #fff;
}
#contact span.required {
	color: #11ABB0;
	font-size: 13px;
}
#message-warning, #message-success {
   display: none;
	background: #0F0F0F;
	padding: 24px 24px;
	margin-bottom: 36px;
   width: 65%;
   margin-left: 26%;
}
#message-warning { color: #D72828; }
#message-success { color: #11ABB0; }

#message-warning i,
#message-success i {
   margin-right: 10px;
}
#image-loader {
   display: none;
   position: relative;
   left: 18px;
   top: 17px;
}


/* Twitter Feed */
#twitter {
   margin-top: 12px;
   padding: 0;
}
#twitter li {
   margin: 6px 0px 12px 0;
   line-height: 30px;
}
#twitter li span {
   display: block;
}
#twitter li b a {
   font: 13px/36px 'opensans-regular', Sans-serif;
   color: #474747 !important;
   border: none;
}

  </style>
