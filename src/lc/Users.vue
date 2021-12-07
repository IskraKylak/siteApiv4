<template>
  <div class="lc_content" v-if="myAcc.role === 'admin'" >
    <TableBaseUsers/>
  </div>
</template>

<script>
import TableBaseUsers from '@/components/TableBaseUsers.vue'
import axios from "axios";

export default {
  data () {
    return {
      myAcc: []
    }
  },
  components: {
    TableBaseUsers
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
