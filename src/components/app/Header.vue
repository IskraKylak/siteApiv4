<template>
  <header class="main-header">
    <div class="container">
      <span class="burger"><span>☰</span></span>
      <div class="box_top">
        <router-link class="logo" to="/">
          <div class="strong">
            <img
              loading="lazy"
              width="210"
              height="51"
              src="@/assets/images/logo_white.png"
              alt=""
            />
          </div>
        </router-link>
        <div class="box_callback">
          <div class="box_enter" v-if="tokkent === ''">
            <router-link class="link" to="/in-login">Вхід</router-link>
            <router-link class="link" to="/register">Реєстрація</router-link>
          </div>
          <div class="box_enter" v-else>
            <router-link class="link" to="/lc-profile">{{ myAcc.email }}</router-link>
          </div>
          <div class="box_messendger">
            <a class="link_facebook" href="https://www.facebook.com/"
            >facebook</a
            >
          </div>
          <div class="box_lang">
            <ul>
              <li>
                <a href="#" class="lang-ua active">ua</a>
              </li>
              <li>
                <a href="#" class="lang-en">en</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="box_bottom">
        <nav class="top-menu" id="navigation">
          <ul>
            <li>
              <router-link class="link link-2" to="/"
              >Про асоціацію</router-link
              >
            </li>
            <li>
              <router-link class="link link-2" to="/presidium"
              >Президіум</router-link
              >
            </li>
            <li>
              <router-link class="link link-2" to="/calendarevent"
              >Календарь <br />заходів</router-link
              >
              <!-- <a class="link link-2" href="#">Календарь <br />заходів</a> -->
            </li>
            <li>
              <a class="link link-3" href="#">Галерея</a>
            </li>
            <li>
              <a class="link link-3" href="#">Журнали</a>
            </li>
            <li>
              <router-link class="link link-2" to="/bmo">БМО-БПР</router-link>
              <!-- <a class="link link-2" href="#">БМО-БПР</a> -->
            </li>
            <li class="link link-2">
              <router-link class="link link-2" to="/experts"
              >Експерты</router-link
              >
            </li>
            <li>
              <router-link class="link link-2" to="/contact"
              >Контакти</router-link
              >
            </li>
          </ul>
          <div class="box_enter">
            <router-link class="link" to="/register">Реєстрація</router-link>
            <router-link class="link" to="/in-login">Вхід</router-link>
            <!-- <a class="link" href="#">Реєстрація</a>
            <a class="link" href="#">Вхід</a> -->
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>

import axios from "axios";
import {$array} from "alga-js";

export default {
  data () {
    return {
      myAcc: []
    }
  },
  computed: {
    tokkent() {
      return this.$store.getters.getToken
    }
  },
  created () {
    this.getNotify()
  },
  methods: {
    async getNotify() {
      await axios({
        method: 'GET',
        url: ('https://asprof-test.azurewebsites.net/api/me/'),
        headers: {
          'Authorization': 'Bearer ' + this.$store.getters.getToken
        }
      }).then(respons => {
        let res = respons.data
        this.$store.dispatch('setMyAcc', res)
        // this.messages = res;
      })
        .catch(error => {
          console.log(error)
        })
        .finally(() => (this.loading = false))
      this.myAcc = this.$store.getters.getMyAcc
    }
  }
}
</script>
<style scoped src="@/assets/css/screen.css" >
</style>
