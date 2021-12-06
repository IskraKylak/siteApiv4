<template>
  <div class="main_page">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
  components: {
    EmptyLayout, MainLayout
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout")
        }
        throw err;
      });
    });
  }
}
</script>

<style scoped>
body {
  margin: 0;
}
body {
  font-family: 'Montserrat', sans-serif;
  max-width: 1920px;
  margin: 0 auto 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #292929;
  background: #ffffff;
}
</style>
<style scoped src="@/assets/css/screen.css" >
</style>
