<template>
  <div class="container">
    <div class="profile">
      <form action="" method="POST">
        <div class="profile-top">

          <fieldset>
            <legend>Прізвище *</legend>
            <input type="text" class="profile_input" :value="myAcc.last_name" required>
          </fieldset>

          <fieldset>
            <legend>Ім'я *</legend>
            <input type="text" class="profile_input" :value="myAcc.first_name"  required>
          </fieldset>
          <fieldset>
            <legend>По-батькові *</legend>
            <input type="text" class="profile_input" :value="myAcc.patronymic"  required>
          </fieldset>
          <fieldset>
            <legend>Дата народження *</legend>
            <input type="date" class="profile_input" :value="myAcc.birth_date"  required>
          </fieldset>
          <fieldset>
            <legend>E-mail *</legend>
            <input type="text" class="profile_input" :value="myAcc.email"  required>
          </fieldset>
          <fieldset>
            <legend>Номер телефону *</legend>
            <input type="text" class="profile_input" :value="myAcc.phone"  required>
          </fieldset>
          <fieldset>
            <legend>Область *</legend>
            <input type="text" class="profile_input" :value="myAcc.region"  required>
          </fieldset>
          <fieldset>
            <legend>Населений пункт *</legend>
            <input type="text" class="profile_input" :value="myAcc.town" required>
          </fieldset>
          <fieldset>
            <legend>ВНЗ</legend>
            <input type="text" :value="myAcc.college" class="profile_input">
          </fieldset>
          <fieldset>
            <legend>Серія та номер диплома</legend>
            <input type="text" :value="myAcc.diploma" class="profile_input">
          </fieldset>
          <fieldset>
            <legend>Початок професійної діяльності</legend>
            <input type="date" :value="myAcc.start_activity_date" class="profile_input">
          </fieldset>
          <fieldset>
            <legend>Місце роботи *</legend>
            <input type="text" :value="myAcc.job_place" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>Спеціальність *</legend>
            <input type="text" :value="myAcc.job_name" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>Посада *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>Робочий номер телефону *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <div class="profile_success">
            <button class="profile_btn" type="submit">Зберегти</button>
          </div>
        </div>
      </form>
      <form class="form-bottom" action="">
        <div class="profile-bottom">
          <h2 class="profile-bottom_title">Заміна паролю</h2>
          <fieldset>
            <legend>Старий пароль *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>Пароль *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>Повторіть пароль *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <div class="profile_success">
            <button class="profile_btn" type="submit">Зберегти</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data () {
    return {
      myAcc: []
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
<style scoped src="@/assets/lc/css/style.min.css">
</style>
