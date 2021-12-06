<template>
  <div class="container">
    <div class="profile">
      <form action="" method="POST">
        <div class="profile-top">

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
            <legend>Область *</legend>
            <select class="profile_select" name="" id="" required>
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
            <legend>Спеціальність *</legend>
            <select class="profile_select" name="" id="" required>
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
<style scoped src="@/assets/lc/css/style.min.css">
</style>
