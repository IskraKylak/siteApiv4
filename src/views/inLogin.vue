<template>
  <div class="wrap_form">
    <h2 class="title_form">Вхід</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-item" :class="{ errorInput: v$.email.$error }">
        <input
          :class="{ error: v$.email.$error }"
          v-model="email"
          @change="v$.email.$touch()"
          placeholder="Еmail"
        />
        <p class="errorText" v-if="v$.email.required.$invalid">
          Filed is required
        </p>
        <p class="errorText" v-if="v$.email.email">Email is not correct</p>
      </div>
      <div class="form-item" :class="{ errorInput: v$.password.$error }">
        <input
          v-model="password"
          :class="{ error: v$.password.$error }"
          @change="v$.password.$touch()"
          placeholder="Пароль"
        />
        <p class="errorText" v-if="v$.password.required.$invalid">
          Filed is required
        </p>
        <p class="errorText" v-if="v$.password.minLength.$invalid">
          Password mast have at least {{ v$.password.minLength.$params.min }} !
        </p>
      </div>

      <button class="my_btn" @click="modalFirst = false">Вхід</button>
      <router-link class="my_btn" to="/register">Реєстрація</router-link>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
import axios from "axios";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      password: "",
      email: "",
    };
  },
  validations() {
    return {
      password: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
      },
    };
  },
  methods: {
    async onSubmit() {
      this.v$.$touch();
      if (!this.v$.$invalid) {
        const user = {
          email: this.email,
          password: this.password
        };
        try {
          await this.$store.dispatch("login", user);
          this.$router.push("/lc-profile");
        } catch (e) {
          console.log('inLogin')
          throw e
        }

        //   console.log(user);
        //   this.email = "";
        //   this.v$.$reset();
        //   this.$emit("close");
      }

      // this.name = "";
      // this.email = "";
      // this.v$.$reset();
      // this.$emit("close");
    },
  },
};
</script>

<style scoped src="@/assets/css/screen.css" >
</style>
<style scoped lang="scss">

.form-item .errorText {
  display: none;
  margin-top: 5px;
  font-size: 13px;
  color: rgb(207, 86, 86);
}

.form-item.errorInput .errorText {
  display: block;
}

.wrap_form {
  padding: 50px 0;
  max-width: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  form {
    width: 100%;
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .form-item {
      width: 100%;
      margin-bottom: 30px;
      &.errorInput {
        margin-bottom: 10px;
      }

      input {
        width: 100%;
        height: 44px;
        padding: 0 20px;
      }
    }
  }
}

input.error {
  border: 1px solid rgb(207, 86, 86);
}

h2.title_form {
  position: relative;
  text-align: center;
  width: max-content;
}

h2.title_form:after {
  content: "";
  position: absolute;
  width: 120%;
  left: -10%;
  bottom: 0;
  height: 2px;
  background: #002678;
}

.my_btn {
  background: #002678;
  color: #fff;
  height: 44px;
  max-width: 180px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  margin-bottom: 20px;
}

// .form-item p {
//   display: block;
//   margin-top: 5px;
//   line-height: 15px;
// }
</style>
