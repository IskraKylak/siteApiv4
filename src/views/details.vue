<template>
  <div class="details">
    <div class="event" v-for="(product, index) in info" :key="index">
      <div v-if="proId == product.id">
        <section class="event_section-2" id="1">
          <div class="wrap_img">
            <img :src="product.image" alt="img" />
          </div>
          <div class="box_content">
            <div class="box_left">
              <h1 class="title_event">
                {{ product.name }}
              </h1>
              <p class="description_event">
                {{ product.description }}
              </p>
            </div>
            <div class="box_right">
              <div class="box box_date">
                <p>{{ product.start_date }}</p>
              </div>
              <div class="box box_clock">
                <p>10:30</p>
              </div>
              <div class="box box_adress">
                <p>ДНІПРО КРИВИЙ-РІГ ЗАПОРІЖЖЯ</p>
              </div>
            </div>
          </div>
        </section>
        <section class="event_section-3" id="2">
          <div class="box_content">
            <div class="box_left">
              <h2>Любі колеги!</h2>
            </div>
            <div class="box_right">
              <p>
                Щоб підтримувати свій професійний рівень на висоті, сучасний
                лікар повинен постійно дізнаватись актуальну інформацію. Саме
                тому навіть в складні часи пандемії і карантину ми надаємо вам
                можливість отримати нові знання!
              </p>
              <p>
                <b
                  >Всеукраїнська Асоціація безперервної професійної освіти
                  лікарів і фармацевтів</b
                >
                за підтримки
                <b
                  >Національного університету охорони здоров'я України імені
                  П.Л. Шупика</b
                >
              </p>
              <p>
                ЗАПРОШУЄ БЕЗКОШТОВНО прийняти участь у науково-практичній
                фаховій школі-семінарі
                <b
                  >«Клінічні рекомендації в загальній практиці сімейного лікаря
                  та терапевта»</b
                >, що відбудеться 23 лютого з прямою он-лайн трансляцією наживо
                одразу в усіх містах і населених пунктах Дніпропетровської та
                Запорізької областей!
              </p>
            </div>
          </div>
        </section>
        <section class="event_section-4" id="3">
          <div class="box_content">
            <div class="box_title">
              <h2>ПОПЕРЕДНЯ РЕЄСТРАЦІЯ ОБОВ'ЯЗКОВА!</h2>
            </div>
            <div class="box_link">
              <a href="#" class="link link-1">Програма</a>
              <a href="#" class="link link-2">Зареєструватись на семінар</a>
            </div>
          </div>
        </section>
        <section class="event_section-5" id="4">
          <div class="box_content">
            <div class="box_left">
              <h2>УВАГА!</h2>
              <p>
                НАЙАКТИВНІШІ учасники, які надішлють найбільшу кількість
                запитань експертам у чат - отримають СМАРТФОНИ!!! Обов'язково
                перед запитанням вказати ПІБ та місто.
              </p>
            </div>
            <div class="box_right">
              <p>
                <b>ТАКОЖ ДОДАТКОВО</b> надсилайте
                <b>НАЙСКЛАДНІШІ КЛІНІЧНІ ВИПАДКИ</b> з детальним описом на
                електронну пошту Асоціації - asprofosvit@gmail.com.
              </p>
              <p>
                Найбільш цікаві будуть <b>РОЗГЛЯНУТІ</b> на клінічному
                консиліумі з нашими експертами.
              </p>
              <p>
                За <b>НАЙЦІКАВІШІ</b> клінічні випадки будуть вручені нагороди:
              </p>
              <ul>
                <li>✅ Диплом за найкращий опис клінічного випадку</li>
                <li>✅ Поїздка на відпочинок до Туреччини!</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="event_section-6">
          <div class="box_content">
            <div class="box_title">
              <h2>ONLINE ТРАНСЛЯЦІЯ</h2>
              <p>
                дає можливість навчатися, ставити питання лекторам та
                спілкуватися із своїми колегами без відриву від робочого місця,
                або вдома за чашечкою кави!
              </p>
            </div>
            <div class="box_text">
              <div class="box box-1">
                <p>
                  Навчання у форматі дискусійного клубу "За круглим столом" з
                  провідними експертами: Скрипник І.М., Юдіна Л.В., Бондаренко
                  О.О., Міщенко Л.А.
                </p>
              </div>
              <div class="box box-2">
                <p>
                  Акцентована увага на таких навчальних модулях, як: менеджмент
                  серцево-судинних ризиків, сучасна ревматологія, COVID-19:
                  гострі питання первинної ланки, актуальні питання на
                  амбулаторному прийомі та багато іншого!
                </p>
              </div>
              <div class="box box-3">
                <p>
                  Тільки актуальні знання, засновані на доказовій медицині, та
                  сучасні клінічні протоколи!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="event_section-7" id="5">
          <div class="box_content">
            <div class="box_title">
              <h2>
                Після закінчення заходу зареєстровані учасники матимуть
                можливість отримати сертифікати НУОЗУ ім. П.Л. Шупика 10 балів
              </h2>
            </div>
            <div class="box_text">
              <h3>ЯК ОТРИМАТИ СЕРТИФІКАТ?</h3>
              <div class="box">
                <div class="mini_box mini_box-1">
                  <div class="box_inner">
                    <div class="box_img">
                      <img
                        width="80"
                        height="91"
                        loading="lazy"
                        src="@/assets/images/event_section-7_img-1.webp"
                        alt=""
                      />
                    </div>
                    <div class="box_inner_text">
                      <p>
                        Протягом 1 доби після закінчення заходу пройти тестове
                        завдання
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mini_box mini_box-2">
                  <div class="box_inner">
                    <div class="box_img">
                      <img
                        width="80"
                        height="80"
                        loading="lazy"
                        src="@/assets/images/event_section-7_img-2.webp"
                        alt=""
                      />
                    </div>
                    <div class="box_inner_text">
                      <p>
                        Через 7 днів після того, як учасник відповів на тестові
                        завдання, на електронну пошту прийде посилання на
                        сервіс, де зберігається сертифікат. На сервісі
                        зберігаються сертифікати всіх учасників даного заходу.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mini_box mini_box-3">
                  <div class="box_inner">
                    <div class="box_img">
                      <img
                        width="80"
                        height="80"
                        loading="lazy"
                        src="@/assets/images/event_section-7_img-3.webp"
                        alt=""
                      />
                    </div>
                    <div class="box_inner_text">
                      <p>Знайти свій сертифікат та завантажити його.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="event_section-8">
          <div class="box_title">
            <h2>
              Чекаємо на Вас:
              <span class="event_date">23 лютого 2021 року <br />о 10:30</span>
            </h2>
          </div>
          <div class="box_content">
            <p>
              Увага!<br />
              Тестування можливе до 24.02.2021 18:00. Уважно перевіряйте
              особисті та контактні данні, щоб уникнути помилок. Змінити дані в
              сертифікаті буде неможливо.
            </p>
            <a href="#" class="link">Пройти тестування</a>
          </div>
          <hr />
        </section>
        <section class="event_section-9" id="6">
          <div class="box_content">
            <h2>Трансляція відбувається у двох залах одночасно</h2>
            <div class="box box-1" v-if="product.youtube_id_1 !== null">
              <div class="box_title">
                <h3>ЗАЛ 1</h3>
              </div>
              <div class="box_video">
                <iframe
                  id="myIframe1"
                  width="560"
                  height="315"
                  :src="product.youtube_id_1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="box box-2" v-if="product.youtube_id_2 !== null">
              <div class="box_title">
                <h3>ЗАЛ 2</h3>
              </div>
              <div class="box_video">
                <iframe
                  id="myIframe2"
                  width="560"
                  height="315"
                  :src="product.youtube_id_2"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section class="event_section-10" id="7">
          <div class="box_content">
            <h2>МЕДІА ПАРТНЕРИ</h2>
            <div class="box_partners">
              <div class="box">
                <img
                  width="400"
                  height="124"
                  loading="lazy"
                  src="@/assets/images/event_section-10_img-1.webp"
                  alt=""
                />
              </div>
              <div class="box">
                <img
                  width="400"
                  height="131"
                  loading="lazy"
                  src="@/assets/images/event_section-10_img-2.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section class="event_section-11">
          <div class="box_content">
            <div class="box_title">
              <h2>ПАРТНЕРИ</h2>
              <p>
                Натисніть на логотип партнера, щоб переглянути інформацію та
                промо-матеріали
              </p>
            </div>
            <div class="box_partners">
              <img
                loading="lazy"
                width="400"
                height="124"
                class="img_main"
                src="@/assets/images/event_sct-11_img-8.jpg"
                alt=""
              />
              <a href="https://asprofosvit.com/mibe2302" class="link link-1">
                <img
                  loading="lazy"
                  width="400"
                  height="300"
                  src="@/assets/images/event_sct-11_img-1.webp"
                  alt=""
                />
              </a>
              <a href="https://asprofosvit.com/bh2302" class="link link-2">
                <img
                  loading="lazy"
                  width="400"
                  height="124"
                  src="@/assets/images/event_sct-11_img-2.webp"
                  alt=""
                />
              </a>
              <a href="#" class="link link-3">
                <img
                  loading="lazy"
                  width="400"
                  height="124"
                  src="@/assets/images/event_sct-11_img-3.webp"
                  alt=""
                />
              </a>
              <a href="https://asprofosvit.com/viatris1802" class="link link-4">
                <img
                  loading="lazy"
                  width="400"
                  height="124"
                  src="@/assets/images/event_sct-11_img-4.webp"
                  alt=""
                />
              </a>
              <a
                href="https://asprofosvit.com/propharma0812"
                class="link link-5"
              >
                <img
                  loading="lazy"
                  width="400"
                  height="124"
                  src="@/assets/images/event_sct-11_img-5.webp"
                  alt=""
                />
              </a>
              <a href="https://asprofosvit.com/bausch2302" class="link link-6">
                <img
                  loading="lazy"
                  width="400"
                  height="124"
                  src="@/assets/images/event_sct-11_img-6.webp"
                  alt=""
                />
              </a>
              <a href="https://asprofosvit.com/acino1702" class="link link-7">
                <img
                  loading="lazy"
                  width="400"
                  height="124"
                  src="@/assets/images/event_sct-11_img-7.webp"
                  alt=""
                />
              </a>
            </div>
          </div>
        </section>
        <section class="event_section-12">
          <div class="box_content">
            <div class="box box-1">
              <a href="https://asprofosvit.com/bh2302" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-1.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-2">
              <a href="https://asprofosvit.com/viatris1802" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-2.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-3">
              <a href="https://asprofosvit.com/acino1702" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-3.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-4">
              <a href="https://asprofosvit.com/bausch2302" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-4.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-5">
              <a href="https://asprofosvit.com/propharma0812" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-5.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-6">
              <a href="#" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-6.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-7">
              <a href="#" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-7.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-8">
              <a href="http://asprofosvit.com/abbott1711" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-8.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-9">
              <a href="https://asprofosvit.com/krka1802" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-9.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-10">
              <a href="https://asprofosvit.com/kvz2302" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-10.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-11">
              <a href="#" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-11.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-12">
              <a href="https://asprofosvit.com/gr" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-12.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-13">
              <a href="https://asprofosvit.com/mibe2302" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-13.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="box box-14">
              <a href="#" class="link">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src="@/assets/images/event_sct-12_img-14.webp"
                  alt=""
                />
              </a>
            </div>
          </div>
        </section>
        <section class="event_section-13" id="8">
          <div class="box_title">
            <h2>КОНТАКТИ</h2>
            <p>
              Якщо у Вас виникають запитання, будь ласка, звертайтесь до нас за
              телефонами або email вказаними нижче з 10:00 до 18:00
            </p>
          </div>
          <div class="box_content">
            <div class="box box-1">
              <h5>Контактний телефон</h5>
              <div class="box_tel">
                <a class="tel" href="tel:+380679867256">067-986-72-56</a>
                <a class="tel" href="tel:+380971622459">097-162-24-59</a>
              </div>
            </div>
            <div class="box box-2">
              <div class="box_tel">
                <a class="tel" href="tel:+380685096239">068-509-62-39</a>
                <a class="tel" href="tel:+380685092220">068-509-22-20</a>
              </div>
            </div>
            <div class="box box-3">
              <h5>Email</h5>
              <div class="box_mail">
                <a href="mailto:asprofosvit@gmail.com">asprofosvit@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
        <!-- <h1></h1>
        <img :src="product.image" class="img-fluid" /> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "details",
  data() {
    return {
      proId: this.$route.params.Pid,
      title: "details",
    };
  },
  methods: {
    ...mapActions(["GET_INFO1_FROM_API"]),
  },
  mounted() {
    this.GET_INFO1_FROM_API();
  },
  computed: {
    info() {
      return this.$store.getters.getInfo1Api;
    },
  },
};
</script>

<style scoped src="@/assets/css/screen.css" >
</style>
<style scoped>
.event .event_section-2 {
  background-image: none;
  position: relative;
}

.event .event_section-2 .wrap_img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.event .event_section-2 .wrap_img img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
