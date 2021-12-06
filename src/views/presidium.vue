<template>
  <div class="presidium" v-if="info">
    <div class="box_bread_crumbs">
      <div class="box_content container">
        <a href="#">Головна </a><a href="#">{{ info.title }}</a>
      </div>
    </div>
    <section class="presidium_section-1 container">
      <div class="box_title">
        <h2>{{ info.title }}</h2>
        <div class="box_text">
          <p>
            {{ info.text }}
          </p>
        </div>
      </div>
      <div class="box_content container">
        <div class="box_mini box_mini-2">
          <div class="box_img">
            <img
              loading="lazy"
              width="175"
              height="175"
              :src="info.presidium_member_photo1"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="300"
              class="aos-init aos-animate"
            />
          </div>
          <div class="box_text">
            <h5 class="text-h5">{{ info.presidium_member_position1 }}</h5>
            <h6>{{ info.presidium_member_name1 }}</h6>
            <p>
              {{ info.presidium_member_description1 }}
            </p>
          </div>
        </div>
        <div class="box_mini box_mini-1">
          <div class="box_img">
            <img
              loading="lazy"
              width="175"
              height="175"
              :src="info.presidium_member_photo2"
              alt=""
              data-aos="zoom-in"
              class="aos-init aos-animate"
            />
          </div>
          <div class="box_text">
            <h5 class="text-h5">{{ info.presidium_member_position2 }}</h5>
            <h6>{{ info.presidium_member_name2 }}</h6>
            <p>
              {{ info.presidium_member_description2 }}
            </p>
          </div>
        </div>
        <div class="box_mini box_mini-3">
          <div class="box_img">
            <img
              loading="lazy"
              width="175"
              height="175"
              :src="info.presidium_member_photo3"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="600"
              class="aos-init aos-animate"
            />
          </div>
          <div class="box_text">
            <h5 class="text-h5">{{ info.presidium_member_position3 }}</h5>
            <h6>{{ info.presidium_member_name3 }}</h6>
            <p>
              {{ info.presidium_member_description3 }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {mapActions} from "vuex";

export default {
  name: "calendarevent",
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(["GET_INFO3_FROM_API"]),
  },
  mounted() {
    this.GET_INFO3_FROM_API();
  },
  computed: {
    info() {
      return this.$store.getters.getInfo3Api;
    },
  },
};
</script>
<style scoped src="@/assets/css/screen.css" >
</style>
<style scoped>
</style>
