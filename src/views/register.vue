<template>
  <div class="container">
    <div class="wrap_form_reg">
      <h2 class="title_form">РЕЄСТРАЦІЯ</h2>
      <form @submit.prevent="onSubmit">
        <p>Інформація про особу</p>
        <div class="wrap_form_row">
          <div class="form-item" :class="{ errorInput: v$.surname.$error }">
            <input
              v-model="surname"
              :class="{ error: v$.surname.$error }"
              @change="v$.surname.$touch()"
              placeholder="Прізвище"
            />
            <p class="errorText" v-if="v$.surname.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.surname.minLength.$invalid">
              Surname mast have at least
              {{ v$.surname.minLength.$params.min }} !
            </p>
          </div>
          <div class="form-item" :class="{ errorInput: v$.name.$error }">
            <input
              v-model="name"
              :class="{ error: v$.name.$error }"
              @change="v$.name.$touch()"
              placeholder="Ім'я"
            />
            <p class="errorText" v-if="v$.name.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.name.minLength.$invalid">
              Name mast have at least {{ v$.name.minLength.$params.min }} !
            </p>
          </div>
          <div class="form-item" :class="{ errorInput: v$.middleName.$error }">
            <input
              v-model="middleName"
              :class="{ error: v$.middleName.$error }"
              @change="v$.middleName.$touch()"
              placeholder="Побатькові"
            />
            <p class="errorText" v-if="v$.middleName.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.middleName.minLength.$invalid">
              Surname mast have at least
              {{ v$.middleName.minLength.$params.min }} !
            </p>
          </div>
        </div>
        <p>Місце проживання</p>
        <div class="wrap_form_row">
          <div
            class="form-item"
            :class="{ errorInput: v$.selectedRegions.$error }"
          >
            <select
              v-model="selectedRegions"
              :class="{ error: v$.selectedRegions.$error }"
              @change="v$.selectedRegions.$touch()"
              placeholder="Оберіть область"
            >
              <option value="" disabled selected>Виберіть область</option>
              <option
                v-for="region in regions"
                :value="region.name"
                :key="region.name"
              >
                {{ region.name }}
              </option>
            </select>
            <p class="errorText" v-if="v$.selectedRegions.required.$invalid">
              Filed is required
            </p>
          </div>
          <div class="form-item" :class="{ errorInput: v$.locality.$error }">
            <input
              v-model="locality"
              :class="{ error: v$.locality.$error }"
              @change="v$.locality.$touch()"
              placeholder="Населенний пункт"
            />
            <p class="errorText" v-if="v$.locality.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.locality.minLength.$invalid">
              Surname mast have at least
              {{ v$.locality.minLength.$params.min }} !
            </p>
          </div>
        </div>
        <p>Професійна діяльність</p>
        <div class="wrap_form_row">
          <div
            class="form-item"
            :class="{ errorInput: v$.selectedSpeciality.$error }"
          >
            <select
              v-model="selectedSpeciality"
              :class="{ error: v$.selectedSpeciality.$error }"
              @change="v$.selectedSpeciality.$touch()"
              placeholder="Оберіть область"
            >
              <option value="" disabled selected>Виберіть спесіальність</option>
              <option
                v-for="spec in speciality"
                :value="spec.name"
                :key="spec.name"
              >
                {{ spec.name }}
              </option>
            </select>
            <p class="errorText" v-if="v$.selectedSpeciality.required.$invalid">
              Filed is required
            </p>
          </div>
          <div class="form-item" :class="{ errorInput: v$.work.$error }">
            <input
              v-model="work"
              :class="{ error: v$.work.$error }"
              @change="v$.work.$touch()"
              placeholder="місце роботи"
            />
            <p class="errorText" v-if="v$.work.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.work.minLength.$invalid">
              Surname mast have at least
              {{ v$.work.minLength.$params.min }} !
            </p>
          </div>
          <div class="form-item" :class="{ errorInput: v$.position.$error }">
            <input
              v-model="position"
              :class="{ error: v$.position.$error }"
              @change="v$.position.$touch()"
              placeholder="Посада"
            />
            <p class="errorText" v-if="v$.position.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.position.minLength.$invalid">
              Surname mast have at least
              {{ v$.position.minLength.$params.min }} !
            </p>
          </div>
        </div>
        <p>Контактні дані</p>
        <div class="wrap_form_row">
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
          <div class="form-item" :class="{ errorInput: v$.tel.$error }">
            <input
              v-model="tel"
              :class="{ error: v$.tel.$error }"
              @change="v$.tel.$touch()"
              placeholder="Мобільний телефон"
            />
            <p class="errorText" v-if="v$.tel.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.tel.numeric.$invalid">
              You phone is not correct
            </p>
            <p class="errorText" v-if="v$.tel.minLength.$invalid">
              Tel mast have at least
              {{ v$.tel.minLength.$params.min }} !
            </p>
          </div>
        </div>
        <p>Безпека</p>
        <div class="wrap_form_row">
          <div class="form-item" :class="{ errorInput: v$.password1.$error }">
            <input
              v-model="password1"
              :class="{ error: v$.password1.$error }"
              @change="v$.password1.$touch()"
              placeholder="Пароль"
              ref="password"
              autocomplete="off"
            />
            <p class="errorText" v-if="v$.password1.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.password1.minLength.$invalid">
              Password mast have at least
              {{ v$.password1.minLength.$params.min }} !
            </p>
          </div>
          <div class="form-item" :class="{ errorInput: v$.password2.$error }">
            <input
              v-model="password2"
              :class="{ error: v$.password2.$error }"
              @change="v$.password2.$touch()"
              placeholder="Пароль"
            />
            <p class="errorText"  v-if="v$.password2.sameAsPassword.$params.equalTo">Password and Confirm Password should match</p>
            <p class="errorText" v-if="v$.password2.required.$invalid">
              Filed is required
            </p>
          </div>
        </div>
        <button class="my_btn" @click="modalFirst = false">Реєстрація</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email, numeric, sameAs } from '@vuelidate/validators'
import axios from 'axios'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      surname: '',
      name: '',
      middleName: '',
      regions: [
        { name: 'Автономна Республіка Крим' },
        { name: 'Вінницька' },
        { name: 'Волинська' },
        { name: 'Дніпропетровська' },
        { name: 'Донецька' },
        { name: 'Житомирська' },
        { name: 'Закарпатська' },
        { name: 'Запорізька' },
        { name: 'Івано-Франківська' },
        { name: 'Київ' },
        { name: 'Київська' },
        { name: 'Кіровоградська' },
        { name: 'Луганська' },
        { name: 'Львівська' },
        { name: 'Миколаївська' },
        { name: 'Одеська' },
        { name: 'Полтавська' },
        { name: 'Рівненська' },
        { name: 'Севастополь' },
        { name: 'Сумська' },
        { name: 'Тернопільська' },
        { name: 'Харківська' },
        { name: 'Херсонська' },
        { name: 'Хмельницька' },
        { name: 'Черкаська' },
        { name: 'Чернівецька' },
        { name: 'Чернігівська' }
      ],
      selectedRegions: '',
      locality: '',
      speciality: [
        { name: 'Офтальмолог' },
        { name: 'Дерматолог' },
        { name: 'Акушер-гінеколог' },
        { name: 'Алерголог-імунолог' },
        { name: 'Анестезіолог' },
        { name: 'Гастроентеролог' },
        { name: 'Гематолог' },
        { name: 'Ендокринолог' },
        { name: 'Епідеміолог' },
        { name: 'Інфекціоніст' },
        { name: 'Педіатр' },
        { name: 'Лікар загальної практики-сімейний лікар' },
        { name: 'Мамолог (Онколог-мамолог)' },
        { name: 'Проктолог' },
        { name: 'Нейрохірург' },
        { name: 'Неонатолог' },
        { name: 'Нефролог' },
        { name: 'Онколог' },
        { name: 'Оториноларинголог' },
        { name: 'Психіатр' },
        { name: 'Радіолог' },
        { name: 'Ревматолог' },
        { name: 'Сексопатолог' },
        { name: 'Стоматолог' },
        { name: 'Терапевт' },
        { name: 'Травматолог-ортопед' },
        { name: 'Уролог' },
        { name: 'Хірург' },
        { name: 'Лікар ультразвукової діагностики' },
        { name: 'Біолог' },
        { name: 'Невролог' },
        { name: 'Кардіолог' },
        { name: 'Фармацевт' },
        { name: 'Провізор' },
        { name: 'Пульмонолог' },
        { name: 'Фтизіатр' },
        { name: 'Клінічна лабораторна діагностика' }
      ],
      selectedSpeciality: '',
      work: '',
      position: '',
      email: '',
      tel: '',
      password1: '',
      password2: ''
    }
  },
  validations () {
    return {
      surname: {
        required,
        minLength: minLength(4),
      },
      name: {
        required,
        minLength: minLength(4),
      },
      middleName: {
        required,
        minLength: minLength(4),
      },
      selectedSpeciality: {
        required,
      },
      selectedRegions: {
        required,
      },
      locality: {
        required,
        minLength: minLength(4),
      },
      work: {
        required,
        minLength: minLength(4),
      },
      position: {
        required,
        minLength: minLength(4),
      },
      password1: {
        required,
        minLength: minLength(4),
      },
      password2: {
        required,
        // minLength: minLength(4),
        sameAsPassword: sameAs(this.password1)
      },
      tel: {
        required,
        numeric,
        minLength: minLength(1),
      },
      email: {
        required,
        email,
      },
    }
  },
  methods: {
    onSubmit () {
      this.v$.$touch()
      if (!this.v$.$invalid) {
        const user = {
          last_name: this.surname,
          first_name: this.name,
          patronymic: this.middleName,
          region: this.regions,
          town: this.locality,
          specialization: this.speciality,
          job_place: this.work,
          job_name: this.position,
          email: this.email,
          phone: this.tel,
          password: this.password1
        }
        console.log(user)
        this.$store.dispatch('register', user)
          .then(() => this.$router.push('/lc-profile'))
          .catch(err => console.log(err))
        // this.name = ''
        // this.email = ''
        // this.v$.$reset()
        // this.$emit('close')
      }
    },
  },
}
</script>
<style scoped src="@/assets/css/screen.css">
</style>
<style scoped lang="scss">

.wrap_form_reg {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

      input,
      select {
        width: 100%;
        height: 44px;
        padding: 0 20px;
      }
    }
  }
}

.wrap_form_row {
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: calc(33% - 20px) calc(33% - 20px) calc(33% - 20px);
  grid-gap: 20px;
  justify-content: space-between;

  &:nth-of-type(2),
  &:nth-of-type(4),
  &:nth-of-type(5) {
    grid-template-columns: calc(50% - 20px) calc(50% - 20px);
  }
}

.form-item .errorText {
  display: none;
  margin-top: 5px;
  font-size: 13px;
  color: rgb(207, 86, 86);
}

.form-item.errorInput .errorText {
  display: block;
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
