<template>
  <!-- Resume Section
================================================== -->
  <section id="resume">
    <!-- Education
----------------------------------------------- -->
    <div class="row education">
      <div class="three columns header-col">
        <h1><span>Education</span></h1>
      </div>

      <div class="nine columns main-col">
        <div class="row item">
          <div class="twelve columns">
            <h3>University of Life</h3>
            <p class="info">
              Master in Graphic Design <span>&bull;</span>
              <em class="date">April 2007</em>
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu
              pede mollis pretium.
            </p>
          </div>
        </div>
        <!-- item end -->

        <div class="row item">
          <div class="twelve columns">
            <h3>School of Cool Designers</h3>
            <p class="info">
              B.A. Degree in Graphic Design <span>&bull;</span>
              <em class="date">March 2003</em>
            </p>

            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat
            </p>
          </div>
        </div>
        <!-- item end -->
      </div>
      <!-- main-col end -->
    </div>
    <!-- End Education -->

    <!-- Work
----------------------------------------------- -->
    <div class="row work">
      <div class="three columns header-col">
        <h1><span>Work</span></h1>
      </div>

      <div class="nine columns main-col">
        <div class="row item">
          <div class="twelve columns">
            <h3>Awesome Design Studio</h3>
            <p class="info">
              Senior UX Designer <span>&bull;</span>
              <em class="date">March 2010 - Present</em>
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu
              pede mollis pretium.
            </p>
          </div>
        </div>
        <!-- item end -->

        <div class="row item">
          <div class="twelve columns">
            <h3>Super Cool Studio</h3>
            <p class="info">
              UX Designer <span>&bull;</span>
              <em class="date">March 2007 - February 2010</em>
            </p>

            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat
            </p>
          </div>
        </div>
        <!-- item end -->
      </div>
      <!-- main-col end -->
    </div>
    <!-- End Work -->

    <!-- Skills
----------------------------------------------- -->
    <div class="row skill">
      <div class="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>

      <div class="nine columns main-col">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>

        <div class="bars">
          <ul class="skills">
            <li>
              <span class="bar-expand photoshop"></span><em>Photoshop</em>
            </li>
            <li>
              <span class="bar-expand illustrator"></span><em>Illustrator</em>
            </li>
            <li>
              <span class="bar-expand wordpress"></span><em>Wordpress</em>
            </li>
            <li><span class="bar-expand css"></span><em>CSS</em></li>
            <li><span class="bar-expand html5"></span><em>HTML5</em></li>
            <li><span class="bar-expand jquery"></span><em>jQuery</em></li>
          </ul>
        </div>
        <!-- end skill-bars -->
      </div>
      <!-- main-col end -->
    </div>
    <!-- End skills -->
  </section>
  <!-- Resume Section End-->
</template>

<script>
export default {
  name: "ResumeSection",
};
</script>

<style scoped>

#resume {
  background: #fff;
  padding-top: 90px;
  padding-bottom: 72px;
  overflow: hidden;
}

#resume a,
#resume a:visited {
  color: #11abb0;
}
#resume a:hover,
#resume a:focus {
  color: #313131;
}

#resume h1 {
  font: 18px/24px "opensans-bold", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}
#resume h1 span {
  border-bottom: 3px solid #11abb0;
  padding-bottom: 6px;
}
#resume h3 {
  font: 25px/30px "opensans-bold", sans-serif;
}

#resume .header-col {
  padding-top: 9px;
}
#resume .main-col {
  padding-right: 10%;
}

.education,
.work {
  margin-bottom: 48px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e8e8e8;
}
#resume .info {
  font: 16px/24px "librebaskerville-italic", serif;
  color: #6e7881;
  margin-bottom: 18px;
  margin-top: 9px;
}
#resume .info span {
  margin-right: 5px;
  margin-left: 5px;
}
#resume .date {
  font: 15px/24px "opensans-regular", sans-serif;
  margin-top: 6px;
}

</style>
