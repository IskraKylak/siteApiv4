<template>
  <div class="lc_content" v-if="myAcc.role === 'admin'">
    <div class="import-excel">
      <h2 class="main_title">Статистика по курсам</h2>
      <button class="import_btn">ЕКСПОРТ В EXCEL</button>
    </div>
    <TableStatisticCurses />
    <div class="import-excel" style="margin-top: 40px">
      <h2 class="main_title">Статистика по вебінарам</h2>
      <button class="import_btn">ЕКСПОРТ В EXCEL</button>
    </div>
    <TableVebinar />
<!--    <div class="table_static_wrapper">-->
<!--      <div class="import-excel">-->
<!--        <h2 class="main_title">Статистика по подіях</h2>-->
<!--        <button class="import_btn">ЕКСПОРТ В EXCEL</button>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>
<script>
import TableStatisticCurses from '@/components/TableStatisticCurses.vue'
import TableVebinar from '@/components/TableVebinar'
import axios from "axios";

export default {
  data () {
    return {
      myAcc: []
    }
  },
  components: {
    TableStatisticCurses,
    TableVebinar
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
<style scoped src="@/assets/lc/css/style.min.css">
</style>
