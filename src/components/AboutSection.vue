<template>
  <div>
    <!-- About Section -->
    <section id="about">
      <div class="row">
        <div class="three columns">
          <img
            class="profile-pic"
            src="/images/profilepic.jpg"
            alt="Profile Picture"
          />
        </div>

        <div class="nine columns main-col">
          <h2>About Me</h2>

          <p>
            {{ aboutMe.text }}
          </p>

          <div class="row" v-if="aboutMe.contact">
            <div class="columns contact-details">
              <h2>Contact Details</h2>
              <p class="address">
                <span
                  v-for="address in aboutMe.contact.addresses"
                  :key="address"
                  >{{ address }}</span
                ><br />
                <span v-for="phone in aboutMe.contact.phones" :key="phone">{{
                  phone
                }}</span
                ><br />
                <span v-for="email in aboutMe.contact.emails" :key="email">{{
                  email
                }}</span>
              </p>
            </div>

            <div class="columns download">
              <p>
                <a :href="aboutMe.resume.path" class="button"
                  ><i class="fa fa-download"></i>{{ aboutMe.resume.label }}</a
                >
              </p>
            </div>
          </div>
          <!-- end row -->

          <div v-else>
            <p>Loading...</p>
          </div>
        </div>
        <!-- end .main-col -->
      </div>
    </section>
    <!-- About Section End-->
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  props: {
    aboutMe: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
