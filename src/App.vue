<template>
  <div id="app">
    <MyHeader />
    <AboutSection />
    <ActionSection />
    <PortfolioSection />
    <TestimonialsSection />
    <ResumeSection />
    <SkillBarSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import AboutSection from "./components/AboutSection.vue";
import ActionSection from "./components/ActionSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import TestimonialsSection from "./components/TestimonialsSection.vue";
import ResumeSection from "./components/ResumeSection.vue";
import SkillBarSection from "./components/SkillBarSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    AboutSection,
    ActionSection,
    PortfolioSection,
    TestimonialsSection,
    ResumeSection,
    SkillBarSection,
    ContactSection,
    FooterSection,
  },
};
</script>

<style scoped>
body {
  background: #0f0f0f;
}
</style>
