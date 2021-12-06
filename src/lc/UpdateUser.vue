<template>
  <div class="container">
    <div class="profile">
      <form action="" method="POST">
        <div class="profile-top">

          <div class="profile_success">
            <router-link to="/lc-users" class="back_btn" >Назад</router-link>
          </div>

          <h2 class="title_event">Редагувати користувача</h2>

          <div class="radio_block rolle-cont">
            <p class="rolle">Роль користувача</p>
            <div class="rolle-box">
              <div class="radio radio_item">
                <input class="custom-radio" type="radio" id="color-1" name="color" value="indigo">
                <label for="color-1">Користувач</label>
              </div>

              <div class="radio radio_item">
                <input class="custom-radio" type="radio" id="color-2" name="color" value="red">
                <label for="color-2">Модератор</label>
              </div>

              <div class="radio radio_item">
                <input class="custom-radio" type="radio" id="color-3" name="color" value="brown">
                <label for="color-3">Адміністратор</label>
              </div>
            </div>

          </div>

          <fieldset>
            <legend>Прізвище *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>

          <fieldset>
            <legend>Ім'я *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>По-батькові *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>Дата народження *</legend>
            <input type="date" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>E-mail *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>Номер телефону *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>Область</legend>
            <select class="profile_select" name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Населений пункт *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>ВНЗ</legend>
            <input type="text" class="profile_input">
          </fieldset>
          <fieldset>
            <legend>Серія та номер диплома</legend>
            <input type="text" class="profile_input">
          </fieldset>
          <fieldset>
            <legend>Початок професійної діяльності</legend>
            <input type="date" class="profile_input">
          </fieldset>
          <fieldset>
            <legend>Місце роботи *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>Спеціальність</legend>
            <select class="profile_select" name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Посада *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>Робочий номер телефону</legend>
            <input type="text" class="profile_input">
          </fieldset>
          <div class="profile_success">
            <button class="profile_btn" type="submit">Зберегти</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped src="@/assets/lc/css/style.min.css">
</style>
