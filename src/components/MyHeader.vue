<template>
  <header id="home">
    <nav id="nav-wrap">
      <a class="mobile-btn" href="#nav-wrap" title="Show navigation"
        >Show navigation</a
      >
      <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

      <ul id="nav" class="nav">
        <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
        <li><a class="smoothscroll" href="#about">About</a></li>
        <li><a class="smoothscroll" href="#resume">Resume</a></li>
        <li><a class="smoothscroll" href="#portfolio">Works</a></li>
        <li><a class="smoothscroll" href="#testimonials">Testimonials</a></li>
        <li><a class="smoothscroll" href="#contact">Contact</a></li>
      </ul>
      <!-- end #nav -->
    </nav>
    <!-- end #nav-wrap -->

    <div class="row banner">
      <div class="banner-text">
        <h1 class="responsive-headline">I'm Jonathan Doe.</h1>
        <h3>
          I'm a Manila based <span>graphic designer</span>,
          <span>illustrator</span> and <span>webdesigner</span> creating awesome
          and effective visual identities for companies of all sizes around the
          globe. Let's
          <a class="smoothscroll" href="#about">start scrolling</a> and learn
          more <a class="smoothscroll" href="#about">about me</a>.
        </h3>
        <hr />
        <ul class="social">
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-google-plus"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-linkedin"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-dribbble"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-skype"></i></a>
          </li>
        </ul>
      </div>
    </div>

    <p class="scrolldown">
      <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
    </p>
  </header>
  <!-- Header End -->
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      name: "Hamidreza Mozhdeh",
      introduction:
        "I am a full-stack developer. Let s go to the next step to know me more.",
    };
  },
};
</script>

<style scoped>
.header {
  background-image: url('../assets/images/header-background.jpg');
}

.overlay {
  background-image: url('../assets/images/overlay-bg.png');
}

.testimonials {
  background-image: url('../assets/images/testimonials-bg.jpg');
}

header {
  position: relative;
  height: 800px;
  min-height: 500px;
  width: 100%;
  background: #161415 url(../assets/images/header-background.jpg) no-repeat top center;
  background-size: cover !important;
  text-align: center;
  overflow: hidden;
}

header:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
header .banner {
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  width: 85%;
  padding-bottom: 30px;
  text-align: center;
}

header .banner-text {
  width: 100%;
}
header .banner-text h1 {
  font: 90px/1.1em "opensans-bold", sans-serif;
  color: #fff;
  letter-spacing: -2px;
  margin: 0 auto 18px auto;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
}
header .banner-text h3 {
  font: 18px/1.9em "librebaskerville-regular", serif;
  color: #a8a8a8;
  margin: 0 auto;
  width: 70%;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
}
header .banner-text h3 span,
header .banner-text h3 a {
  color: #fff;
}
header .banner-text hr {
  width: 60%;
  margin: 18px auto 24px auto;
  border-color: #2f2d2e;
}

header .social {
  margin: 24px 0;
  padding: 0;
  font-size: 30px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
}
header .social li {
  display: inline-block;
  margin: 0 15px;
}
header .social li a {
  color: #fff;
}
header .social li a:hover {
  color: #11abb0;
}

header .scrolldown a {
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -29px;
  color: #fff;
  height: 42px;
  width: 42px;
  font-size: 42px;
  line-height: 42px;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
}
header .scrolldown a:hover {
  color: #11abb0;
}
</style>
