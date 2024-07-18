<template>
  <!-- Resume Section -->
  <section id="resume">
    <!-- Education -->
    <!-- <EducationSection>
      <EducationItem
        institution="University of Life"
        degree="Master in Graphic Design"
        date="April 2007"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium."
      />
      <EducationItem
        institution="School of Cool Designers"
        degree="B.A. Degree in Graphic Design"
        date="March 2003"
        description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat"
      />
    </EducationSection> -->

    <!-- Work -->
    <WorkSection>
      <WorkItem
        company="Awesome Design Studio"
        title="Senior UX Designer"
        date="March 2010 - Present"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium."
      />
      <WorkItem
        company="Super Cool Studio"
        title="UX Designer"
        date="March 2007 - February 2010"
        description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat"
      />
    </WorkSection>

    <!-- Skills -->
    <SkillsSection
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    >
      <SkillItem skill="photoshop" />
      <SkillItem skill="illustrator" />
      <SkillItem skill="wordpress" />
      <SkillItem skill="css" />
      <SkillItem skill="html5" />
      <SkillItem skill="jquery" />
    </SkillsSection>
  </section>
  <!-- Resume Section End -->
</template>

<script>
// import EducationSection from './EducationSection.vue';
// import EducationItem from './EducationItem.vue';
import WorkSection from "./WorkSection.vue";
import WorkItem from "./WorkItem.vue";
import SkillsSection from "./SkillsSection.vue";
import SkillItem from "./SkillItem.vue";

export default {
  name: "ResumeSection",
  components: {
    // EducationSection,
    // EducationItem,
    WorkSection,
    WorkItem,
    SkillsSection,
    SkillItem,
  },
};
</script>

<style scoped></style>
