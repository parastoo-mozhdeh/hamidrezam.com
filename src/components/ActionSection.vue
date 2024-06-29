<template>
  <!-- Call-To-Action Section
   ================================================== -->
  <section id="call-to-action">
    <div class="row">
      <div class="two columns header-col">
        <h1><span>Get Hosting.</span></h1>
      </div>

      <div class="seven columns">
        <h2><span class="lead">Unde Omnis Iste</span></h2>
        <p>
          <span class="lead"
            >Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae.
          </span>
        </p>
      </div>

      <div class="three columns action"></div>
    </div>
  </section>
  <!-- Call-To-Action Section End-->
</template>

<script>
export default {
  name: "ActionSection", // The name of your component
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
};
</script>

<style scoped>
/* f. Call To Action Section
/* ------------------------------------------------------------------ */

#call-to-action {
  background: #212121;
  padding-top: 66px;
  padding-bottom: 48px;
}
#call-to-action h1 {
  font: 18px/24px "opensans-bold", sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff;
}
#call-to-action h1 span {
  display: none;
}
#call-to-action .header-col h1:before {
  font-family: "FontAwesome";
  content: "\f0ac";
  padding-right: 10px;
  font-size: 72px;
  line-height: 72px;
  text-align: left;
  float: left;
  color: #fff;
}
#call-to-action .action {
  margin-top: 12px;
}
#call-to-action h2 {
  font: 28px/36px "opensans-bold", sans-serif;
  color: #ebeeee;
  margin-bottom: 6px;
}
#call-to-action h2 a {
  color: inherit;
}
#call-to-action p {
  color: #636363;
  font-size: 17px;
}
/*#
call-to-action .button {
	color:#fff;
   background: #0D0D0D;
}
*/
#call-to-action .button:hover,
#call-to-action .button:active {
  background: #ffffff;
  color: #0d0d0d;
}
#call-to-action p span {
  font-family: "opensans-semibold", sans-serif;
  color: #d8d8d8;
}

/* ------------------------------------------------------------------
/* g. Testimonials
/* ------------------------------------------------------------------ */

#testimonials {
  background: #1f1f1f url(../assets/images/testimonials-bg.jpg) no-repeat center center;
  background-size: cover !important;
  -webkit-background-size: cover !important;
  background-attachment: fixed;

  position: relative;
  min-height: 200px;
  width: 100%;
  overflow: hidden;
}
#testimonials .text-container {
  padding-top: 96px;
  padding-bottom: 66px;
}
#testimonials h1 {
  font: 18px/24px "opensans-bold", sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff;
}
#testimonials h1 span {
  display: none;
}
#testimonials .header-col {
  padding-top: 9px;
}
#testimonials .header-col h1:before {
  font-family: "FontAwesome";
  content: "\f10d";
  padding-right: 10px;
  font-size: 72px;
  line-height: 72px;
  text-align: left;
  float: left;
  color: #fff;
}

/*	Blockquotes */
#testimonials blockquote {
  margin: 0 0px 30px 0px;
  padding-left: 0;
  position: relative;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 1);
}
#testimonials blockquote:before {
  content: none;
}
#testimonials blockquote p {
  font-family: "librebaskerville-italic", serif;
  padding: 0;
  font-size: 24px;
  line-height: 48px;
  color: #fff;
}
#testimonials blockquote cite {
  display: block;
  font-size: 12px;
  font-style: normal;
  line-height: 18px;
  color: #fff;
}
#testimonials blockquote cite:before {
  content: "\2014 \0020";
}
#testimonials blockquote cite a,
#testimonials blockquote cite a:visited {
  color: #8b9798;
  border: none;
}

/* Flex Slider */

.flexslider a:active,
.flexslider a:focus {
  outline: none;
}
.slides,
.flex-control-nav,
.flex-direction-nav {
  margin: 0;
  padding: 0;
  list-style: none;
}
.slides li {
  margin: 0;
  padding: 0;
}

/* Necessary Styles */
.flexslider {
  position: relative;
  zoom: 1;
  margin: 0;
  padding: 0;
}
.flexslider .slides {
  zoom: 1;
}
.flexslider .slides > li {
  position: relative;
}

/* Hide the slides before the JS is loaded. Avoids image jumping */
.flexslider .slides > li {
  display: none;
  -webkit-backface-visibility: hidden;
}
/* Suggested container for slide animation setups. Can replace this with your own */
.flex-container {
  zoom: 1;
  position: relative;
}

/* Clearfix for .slides */
.slides:before,
.slides:after {
  content: " ";
  display: table;
}
.slides:after {
  clear: both;
}

/* No JavaScript Fallback */
/* If you are not using another script, such as Modernizr, make sure you
 * include js that eliminates this class on page load */
.no-js .slides > li:first-child {
  display: block;
}

/* Slider Styles */
.slides {
  zoom: 1;
}
.slides > li {
  /*margin-right: 5px; */
  overflow: hidden;
}

/* Control Nav */
.flex-control-nav {
  width: 100%;
  position: absolute;
  bottom: -20px;
  text-align: left;
}
.flex-control-nav li {
  margin: 0 6px;
  display: inline-block;
  zoom: 1;
  display: inline;
}
.flex-control-paging li a {
  width: 12px;
  height: 12px;
  display: block;
  background: #ddd;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  text-indent: -9999px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -o-border-radius: 20px;
  border-radius: 20px;
  box-shadow: inset 0 0 3px rgba(255, 255, 255, 0.3);
}
.flex-control-paging li a:hover {
  background: #ccc;
  background: rgba(255, 255, 255, 0.7);
}
.flex-control-paging li a.flex-active {
  background: #fff;
  background: rgba(255, 255, 255, 0.9);
  cursor: default;
}
</style>
