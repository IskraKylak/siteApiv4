<template>
  <div class="experts">
    <div class="box_bread_crumbs">
      <div class="box_content container">
        <a href="#">Головна </a><a href="#">Експерти</a>
      </div>
    </div>
    <section class="experts_section-1">
      <h2>Експерти</h2>
      <div class="box_content container">
        <div
          class="box_mini box_mini-1"
          v-for="(expert, idx) in experts"
          :key="idx"
        >
          <div class="box_img">
            <img
              loading="lazy"
              width="175"
              height="175"
              :src="expert.image"
              alt=""
              data-aos="zoom-in"
              class="aos-init aos-animate"
            />
          </div>
          <div class="box_text">
            <h5>{{ expert.full_name }}</h5>
            <p>
              {{ expert.information }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["GET_INFO5_FROM_API"]),
  },
  mounted() {
    this.GET_INFO5_FROM_API();
  },
  computed: {
    experts() {
      return this.$store.getters.getInfo5Api;
    },
  },
};
</script>

<style scoped src="@/assets/css/screen.css" >
</style>
<style scoped>
</style>
