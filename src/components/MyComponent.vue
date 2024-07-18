<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.url">
        <i :class="user.icon"></i>
        <!-- {{ user.name }} - {{ user.email }} -->
        {{ user.title }} - <a :href="user.url">{{ user.url }}</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "MyComponent",
  props: {
    users: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>
