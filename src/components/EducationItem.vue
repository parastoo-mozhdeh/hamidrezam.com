<template>
    <div class="row item">
      <div class="twelve columns">
        <h3>{{ institution }}</h3>
        <p class="info">
          {{ degree }} <span>&bull;</span>
          <em class="date">{{ date }}</em>
        </p>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "EducationItem",
    props: {
      institution: String,
      degree: String,
      date: String,
      description: String
    }
  };
  </script>
  
  <style scoped></style>
  