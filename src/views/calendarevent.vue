<template>
  <div class="main_page calendar">
<!--    {{ info1 }}-->
    <div class="box_bread_crumbs">
      <div class="box_content container">
        <a href="#">Головна </a><a href="#">Календар заходів</a>
      </div>
    </div>
    <section class="calendar_section-1">
      <div class="box_content container">
        <div class="box_left">
          <h2>календар заходів</h2>
        </div>
        <div class="box_right">
          <div id="datepicker"></div>
        </div>
      </div>
    </section>
    <div class="calendar_section-2">
      <div class="box_content">
        <div class="box_left">
          <div class="box_inner">
            <div class="box_title">
              <h3>Найближча подія</h3>
              <div class="box_bottom">
                <div class="box_date">
                  <p>12 березня 2020</p>
                </div>
                <div class="box_location">
                  <p>Київ, Україна</p>
                </div>
              </div>
            </div>
            <div class="box_text">
              <h4>
                <a href="#"
                  >Симуляційний тренінг «Методика інсталяції та догляду
                  акушерських пессаріїв»</a
                >
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat
              </p>
            </div>
          </div>
        </div>
        <div class="box_right">
          <div class="box_img">
            <img
              loading="lazy"
              width="100"
              height="444"
              src="@/assets/images/calendar_sct-2_img-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="calendar_section-3">
      <div class="box_title container">
        <h3><a href="#">Усi заходи</a></h3>
      </div>
      <!-- {{ info }} -->
      <div class="box_content container" v-if="info1">
        <div v-for="(item, idx) in info1" class="item" :key="idx">
          <div @click="goTodetail(item.id)" class="box">
            <div class="box_img">
              <img
                loading="lazy"
                width="360"
                height="202"
                :src="item.image"
                alt=""
              />
              <div class="box_date">
                <p class="date_number">12</p>
                <p class="date_month">бер</p>
              </div>
            </div>
            <div class="box_text">
              <h4>
                {{ item.name }}
              </h4>
            </div>
            <div class="box_bottom">
              <div class="box_date">
                <p>{{ item.start_date }}</p>
              </div>
              <div class="box_location">
                <p>Київ, Україна</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {{ info1 }} -->
    <div class="box_pagination container">
      <ul class="pagination">
        <li><a class="prev" href="#"></a></li>
        <li><a class="active" href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">...</a></li>
        <li><a class="next" href="#"></a></li>
      </ul>
    </div>
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
    ...mapActions(["GET_INFO1_FROM_API"]),
    goTodetail(prodId) {
      let proId = prodId;
      this.$router.push({ name: "details", params: { Pid: prodId } });
    },
  },
  mounted() {
    this.GET_INFO1_FROM_API();
  },
  computed: {
    info1() {
      return this.$store.getters.getInfo1Api;
    },
  },
};
</script>
<style scoped src="@/assets/css/screen.css" >
</style>
<style scoped>
</style>
