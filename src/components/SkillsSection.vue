<template>
    <div class="row skill">
      <div class="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>
  
      <div class="nine columns main-col">
        <p>
          {{ description }}
        </p>
        <div class="bars">
          <ul class="skills">
            <slot></slot>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SkillsSection",
    props: {
      description: String
    }
  };
  </script>
  
  <style scoped></style>
  