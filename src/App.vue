<template>
  <div id="app">
    <MyHeader :title="title" :subtitle="subtitle" :socials="socials"/>
    <AboutSection :aboutMe="aboutMe"/>
    <!-- <MyComponent/> -->
    <ResumeSection />
    <PortfolioSection />
    <ActionSection />
    <TestimonialsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import AboutSection from "./components/AboutSection.vue";
import ResumeSection from "./components/ResumeSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ActionSection from "./components/ActionSection.vue";
import TestimonialsSection from "./components/TestimonialsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";
// import MyComponent from "./components/MyComponent.vue";
import AxiosInstance from './axiosConfig';

export default {
  name: "App",
  components: {
    MyHeader,
    AboutSection,
    ResumeSection,
    PortfolioSection,
    ActionSection,
    TestimonialsSection,
    ContactSection,
    FooterSection,
    // MyComponent,
  },
  data() {
    return {
      title: '',
      subtitle: '',
      socials: [],
      aboutMe: {},
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await AxiosInstance.get('/data.json');
        this.title = response.data.title;
        this.subtitle = response.data.subtitle;
        this.socials = response.data.socials;
        this.aboutMe = response.data['about-me'];
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>

<style scoped>
body {
  background: #0f0f0f;
}
</style>
