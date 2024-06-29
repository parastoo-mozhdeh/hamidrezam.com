<template>
  <div id="app">
    <MyHeader />
    <AboutSection />
    <ActionSection />
    <PortfolioSection />
    <ResumeSection />
    <SkillBarSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import AboutSection from "./components/AboutSection";
import ActionSection from "./components/ActionSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ResumeSection from "./components/ResumeSection.vue";
import SkillBarSection from "./components/SkillBarSection.vue";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default {
  name: "App",
  components: {
    MyHeader,
    AboutSection,
    ActionSection,
    PortfolioSection,
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
