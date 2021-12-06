<template>
  <div class="bmo-bpr active">
    <section class="section-1">
      <div class="item">
        <a href="#" class="box_content">
          <div class="box_img">
            <img
              loading="lazy"
              src="@/assets/images/bmo-bpr_section-1_img-1.jpg"
              alt=""
              width="100"
              height="100"
            />
          </div>
          <div class="box_text">
            <div class="box_title">
              <h1 class="text-h1">
                Безперервна медична освіта та <br />професійний розвиток
              </h1>
            </div>
          </div>
        </a>
      </div>
    </section>
    <div class="box_bread_crumbs">
      <div class="box_content container">
        <a href="#">Головна </a><a href="#">Президіум</a>
      </div>
    </div>
    <div class="bmo-bpr_section-2">
      <div class="box_content container">
        <div class="box_top">
          <p>
            З давніх часів Гіппократа лікарі обіцяли постійно оновлювати свої
            знання та вміння. Важливість безперервної медичної освіти ( СМЕ ) та
            безперервного професійного розвитку (CPD ) очевидна для лікарів.
            Оскільки прогрес у медицині стає все швидшим, необхідність
            удосконалення цих знань стає ще більшою. За підрахунками, приблизно
            половина всіх медичних знань застаріла протягом п'яти років. Саме
            великий грецький філософ Сократ заявив:
          </p>
        </div>
        <div class="box_bottom">
          <h3>
            "Якщо ви вважаєте, що освіта дорога, ви повинні врахувати незнання".
          </h3>
          <p class="p-1">
            CME-CPD фактично починається з першого дня медичного університету.
            Однак найдовший час у кар’єрі лікаря - це час після спеціалізації.
            Фактичне значення CME-CPD є найбільш актуальним у цей період, який
            може тривати 30 років.
          </p>
          <p class="p-2">
            <span>Безперервну медичну освіту (СМЕ)</span> можна визначити як
            навчальну діяльність, яка служить для підтримки, розвитку або
            підвищення знань, навичок та професійної діяльності та відносин, які
            лікар використовує для надання послуг пацієнтам, громадськості чи
            професії.
          </p>
          <p class="p-3">
            Тому вся тривала навчальна діяльність, яка допомагає лікарям
            виконувати свої обов'язки більш професійно та ефективно, вважається
            предметом цього визначення.
          </p>
          <p class="p-4">
            <span>Безперервний професійний розвиток (CPD)</span> - це навчальний
            засіб оновлення, розвитку та вдосконалення способів застосування
            лікарями знань, умінь та навичок, необхідних у їхньому робочому
            житті. CPD, а не CME є кращим терміном, оскільки лікарі можуть
            виконувати багато ролей, які опосередковано впливають на якість
            охорони здоров'я, такі як викладання, дослідження та управління.
          </p>
        </div>
      </div>
    </div>
    <section class="bmo-bpr_section-3">
      <div class="box_content container">
        <div class="box_left">
          <div class="box_inner">
            <div class="box_top">
              <h2 data-aos="fade-left">НАвіщо потрібне освітнє портфоліо</h2>
              <p>
                Офіційні документи МОЗ України, які повинен заповнювати кожен
                лікар для підготовки до атестації!
              </p>
            </div>
          </div>
        </div>
        <div class="box_right">
          <img
            width="100"
            height="100"
            loading="lazy"
            class="img_bg"
            src="@/assets/images/bmo-bpr_section-2_img-1.webp"
            alt=""
          />
          <div class="box_link">
            <a class="link_gallary" href="#"
              >анкета
              <svg
                class="mdi-icon"
                width="36"
                height="36"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AOS from "vue-aos";
export default {
  name: "bmp",
  data() {
    return {
      title: "bmp",
    };
  },
  mounted() {
    $(function () {
      AOS.init({ disable: "mobile" });
    });
  },
};
</script>
<style scoped src="@/assets/css/screen.css" >
</style>
<style scoped>
</style>

