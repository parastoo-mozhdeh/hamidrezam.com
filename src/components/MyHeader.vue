<template>
  <header id="home">
    <img src="/css/images/header-background.jpg" alt="" />
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
        <h1 class="responsive-headline">{{ title }}</h1>
        <h3>{{ subtitle }}</h3>
        <hr />
        <ul class="social">
          <li v-for="social in socials" :key="social.title">
            <a :href="social.url"><i :class="social.icon"></i></a>
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
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    socials: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log(this.socials); // Debug the data
  },
};
</script>

<style scoped></style>
