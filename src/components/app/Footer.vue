<template>
  <footer class="footer">
    <div class="box_content container">
      <div class="box_left">
        <div class="box_adress">
          <h5>Адреса:</h5>
          <p>04053, м.Київ, Шевченківський,</p>
          <p>вул. Бульварно-Кудрявська,</p>
          <p>буд. 7-Б, кв. 90.</p>
        </div>
        <div class="box_mail">
          <h5>Email:</h5>
          <a href="mailto:asprofosvit@gmail.com">asprofosvit@gmail.com</a>
        </div>
        <div class="box_tel">
          <a class="tel" href="tel:+380443604550">+38 (044) 360-45-50</a>
          <a class="tel" href="tel:+380672337591">+38 (067) 233-75-91</a>
        </div>
      </div>
      <div class="box_right">
        <div class="box_top">
          <h4>Підпишіться на новини та залишайтесь в курсі!</h4>
          <div class="box_find">
            <form>
              <input type="text" class="input_email" placeholder="e-mail" />
              <input type="submit" class="input_submit" value="підписатись" />
            </form>
            <div class="box_messendger">
              <a class="link_facebook" href="https://www.facebook.com/"
              >facebook</a
              >
            </div>
          </div>
        </div>
        <div class="box_bottom">
          <div class="box1 box-1">
            <ul>
              <li>
                <a href="/">Про асоціацію</a>
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
              </li>
              <li>
                <a href="#">Галерея</a>
              </li>
            </ul>
          </div>
          <div class="box1 box-2">
            <ul>
              <li>
                <a href="#">Журнали</a>
              </li>
              <li>
                <router-link class="link link-2" to="/bmo"
                >БМО-БПР</router-link
                >
              </li>
              <li>
                <a href="#">ГЕО співпраці</a>
              </li>
            </ul>
          </div>
          <div class="box1 box-3">
            <ul>
              <li>
                <a href="#">Реєстрація</a>
              </li>
              <li>
                <a href="#">Вхід</a>
              </li>
              <li>
                <a href="#">Особистий кабінет</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped src="@/assets/css/screen.css" >
</style>
