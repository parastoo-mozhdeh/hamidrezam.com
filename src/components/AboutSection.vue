<template>
  <div>
    <!-- About Section -->
    <section id="about">
      <div class="row">
        <div class="three columns">
          <img class="profile-pic" src="../images/profilepic.jpg" alt="" />
        </div>

        <div class="nine columns main-col">
          <h2>About Me</h2>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>

          <div class="row">
            <div class="columns contact-details">
              <h2>Contact Details</h2>
              <p class="address">
                <span>Jonathan Doe</span><br />
                <span
                  >1600 Amphitheatre Parkway<br />
                  Mountain View, CA 94043 US </span
                ><br />
                <span>(123)456-7890</span><br />
                <span>anyone@website.com</span>
              </p>
            </div>

            <div class="columns download">
              <p>
                <a href="#" class="button"
                  ><i class="fa fa-download"></i>Download Resume</a
                >
              </p>
            </div>
          </div>
          <!-- end row -->
        </div>
        <!-- end .main-col -->
      </div>
    </section>
    <!-- About Section End-->
  </div>
</template>

<script>
export default {
  name: "AboutSection", 
  data() {
    return {
      // Data properties
    };
  },
  methods: {
    // Methods 
  },
  computed: {
    // Computed properties 
  },
  //  props, watch, etc.
};
</script>

<style scoped>
#about {
   background: #2B2B2B;
   padding-top: 96px;
   padding-bottom: 66px;
   overflow: hidden;
}

#about a, #about a:visited  { color: #fff; }
#about a:hover, #about a:focus { color: #11ABB0; }

#about h2 {
   font: 22px/30px 'opensans-bold', sans-serif;
   color: #fff;
   margin-bottom: 12px;
}
#about p {
   line-height: 30px;
   color: #7A7A7A;
}
#about .profile-pic {
   position: relative;
   width: 120px;
   height: 120px;
   border-radius: 100%;
}
#about .contact-details { width: 41.66667%; }
#about .download {
   width: 58.33333%;
   padding-top: 6px;
}
#about .main-col { padding-right: 5%; }
#about .download .button {
   margin-top: 6px;
   background: #444;
}
#about .download .button:hover {
   background: #fff;
   color: #2B2B2B;
}
#about .download .button i {
   margin-right: 15px;
   font-size: 20px;
}

</style>