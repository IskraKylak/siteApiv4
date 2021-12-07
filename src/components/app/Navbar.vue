<template>
  <header class="header" :class="{ open: isOpen }">
    <div class="top-menu">
      <div class="top-menu_left">
        <div class="burger" @click.prevent="$emit('click-my')">
          <span></span>
        </div>
        <h1 class="top-menu_name">Події</h1>
      </div>
      <div class="top-menu_right">
        <router-link to="/" class="top-menu_home">
          <i class="fas fa-home"></i>
        </router-link>
        <div class="top-menu_right_name_item" >
          <p class="top-menu_right_name" data-target="dropdown"
             ref="dropdown">{{ myAcc.email }}</p>
          <i class="fas fa-chevron-down">
          </i>
          <div id="dropdown" class="dropdown-content dropdown-menu">
            <router-link to="/lc-profile" class="black-text p_header">
              <p>Мій профіль</p>
            </router-link>
            <div class="p_header" @click.prevent="logout">
              <p>Вихід</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import axios from "axios";

export default {
  data () {
    return {
      myAcc: []
    }
  },
  props: {
    isOpen: {
      type: Boolean
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
    },
    async logout () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/in-login?message=logout')
        })
      // await this.$store.dispatch('logout')
      // this.$router.push('/in-login?message=logout')
    },
  },
  mounted () {
    M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
    })
  }
}
</script>
<style scoped src="@/assets/lc/css/style.min.css">
</style>
<style>
p.top-menu_right_name {
  min-width: 10px;
  height: 10px;
}


.main-lc header.header.open {
  width: calc(100% - 239px);
  margin-left: 239px;
}

.main-lc header.header {
  max-width: 100%;
  width: 100%;
  margin-left: 0;
  transition: all 0.3s ease;
}

.main-lc header.header.open .burger {
  display: none;
}

.main-lc header.header .burger {
  display: block;
}

</style>
