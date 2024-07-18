<template>
    <div class="row item">
      <div class="twelve columns">
        <h3>{{ company }}</h3>
        <p class="info">
          {{ title }} <span>&bull;</span>
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
    name: "WorkItem",
    props: {
      company: String,
      title: String,
      date: String,
      description: String
    }
  };
  </script>
  
  <style scoped></style>
  