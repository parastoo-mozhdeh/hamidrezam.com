<template>
    <li>
      <span class="bar-expand" :class="skill"></span>
      <em>{{ skill }}</em>
    </li>
  </template>
  
  <script>
  export default {
    name: "SkillItem",
    props: {
      skill: String
    }
  };
  </script>
  
  <style scoped></style>
  