<template>
  <div class="">
    <!--    {{ info }}-->
    <section class="section-1">
      <div class="box_slider slider-1">
        <div class="item" v-for="baner in baners" :key="baner">
          <div class="box_content">
            <div class="box_img">
              <img
                v-if="info"
                loading="lazy"
                :src="baner.banner"
                alt=""
                width="100%"
                height="auto"
              />
            </div>
            <div class="box_text">
              <div class="box_title">
                <h1 class="text-h1">
                  {{ baner.banner_title }}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-2" v-if="info">
      <div class="box_content">
        <div class="box_left">
          <img
            width="100%"
            height="auto"
            loading="lazy"
            class="img_bg"
            :src="info.banner3"
            alt=""
          />
          <div class="box_link">
            <img
              width="225px"
              height="166px"
              loading="lazy"
              src="@/assets/images/sct-2_img-1.webp"
              alt=""
            />
            <a class="link_gallary" href="#">
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
              Галерея</a
            >
          </div>
        </div>
        <div class="box_right">
          <div class="box_inner">
            <div class="box_top">
              <h2 data-aos="fade-left">{{ info.title2 }}</h2>
              <p>
                {{ info.description2 }}
              </p>
            </div>
            <div class="box_bottom">
              <h2 data-aos="fade-left">{{ info.title3 }}</h2>
              <p class="p-1">
                {{ info.description3 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-3" v-if="info">
      <div class="box_content container">
        <div class="box box-1">
          <h2 class="text-h2" data-aos="fade-right">{{ info.title4 }}</h2>
          <p>
            {{ description4[0] }}
          </p>
        </div>
        <div class="box box-2">
          <div class="box_mini box_mini-1">
            <div class="box_number">
              <p data-aos="zoom-in">
                {{ description4[1] }}
              </p>
            </div>
            <div class="box_text">
              <h3>
                {{ description4[2] }}
              </h3>
              <p>
                {{ description4[3] }}
              </p>
            </div>
          </div>
          <div class="box_mini box_mini-2">
            <div class="box_number">
              <p data-aos="zoom-in" data-aos-delay="300">
                {{ description4[4] }}
              </p>
            </div>
            <div class="box_text">
              <h3>{{ description4[5] }}</h3>
              <p>
                {{ description4[6] }}
              </p>
            </div>
          </div>
          <div class="box_mini box_mini-3">
            <div class="box_number">
              <p data-aos="zoom-in" data-aos-delay="600">
                {{ description4[7] }}
              </p>
            </div>
            <div class="box_text">
              <h3>{{ description4[8] }}</h3>
              <p>
                {{ description4[9] }}
              </p>
            </div>
          </div>
        </div>
        <div class="box-3">
          <h2>{{ info.title5 }}</h2>
          <p>
            {{ info.description5 }}
          </p>
          <div class="box_for_btn">
            <a :href="info.form" class="link" target="_blank">
              <span class="title">{{ info.form_name }}</span>
              <div class="line line-1"></div>
              <div class="line line-2"></div>
              <div class="line line-3"></div>
              <div class="line line-4"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="doctor container" v-if="info">
      <div class="doctor-row_info">
        <div class="doctor-row_info_desc">
          <div class="doctor-row_info_desc_wrapper">
            <div class="doctor-row_info_desc_label">
              {{ info.title6 }}
            </div>
            <div class="doctor-row_info_desc_text">
              {{ info.description6 }}
            </div>
          </div>
        </div>
        <div class="doctor-row_info_quantity">
          <div class="doctor-row_info_quantity_content">
            {{ info.title7 }}
          </div>
          <div class="Count">
            <span class="Count2">{{ String(info.counter)[0] }} </span>
            <span class="Count2">{{ String(info.counter)[1] }} </span>
            <span class="Count2">{{ String(info.counter)[2] }} </span>
            <!-- <span class="Count1">{{ counter[1] }}</span>
            <span class="Count1">{{ counter[2] }}</span> -->
          </div>
        </div>
      </div>
      <div class="doctor-row_info_bottom">
        <div class="doctor-row_info_bottom_content">
          {{ info.title8 }}
        </div>
      </div>
      <div class="wrap_btns_pdf">
        <a
          :href="info.manual"
          class="doctor-row_info_bottom_btn_wrapper"
          target="_blank"
        >
          {{ info.manual_title }}
        </a>
        <a
          :href="info.statement"
          class="doctor-row_info_bottom_btn_wrapper"
          target="_blank"
        >
          {{ info.statement_title }}
        </a>
        <a
          :href="info.bill"
          class="doctor-row_info_bottom_btn_wrapper"
          target="_blank"
        >
          {{ info.bill_title }}
        </a>
      </div>
    </section>
    <section class="section-4" v-if="info">
      <div class="box_content">
        <div class="box_mini box_mini-1">
          <a href="#" class="box_img">
            <img
              width="150px"
              height="150px"
              loading="lazy"
              :src="info.first_logo"
              alt=""
              data-aos="zoom-in"
            />
          </a>
        </div>
        <div class="box_mini box_mini-2">
          <a href="#" class="box_img">
            <img
              width="401px"
              height="93px"
              loading="lazy"
              :src="info.second_logo"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </a>
        </div>
        <!-- <div class="box_mini box_mini-3">
          <a href="#" class="box_img">
            <img
              width="240px"
              height="158px"
              loading="lazy"
              src="../images/sct-4_logo-3.webp"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="600"
            />
          </a>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    ...mapActions(['GET_INFO_FROM_API']),
    ...mapActions(['GET_BANER_FROM_API'])
  },
  mounted () {
    this.GET_INFO_FROM_API()
    this.GET_BANER_FROM_API()
    $(function () {
      AOS.init({ disable: 'mobile' })
    })
  },
  computed: {
    info () {
      return this.$store.getters.getInfoApi
    },
    baners () {
      if (this.$store.getters.getBanerApi) {
        setTimeout(function () {
          initSlider()
        }, 1000)
      }
      return this.$store.getters.getBanerApi
    },
    description4 () {
      return String(this.$store.getters.getInfoApi.description4).split('\r\n')
    },
    counter () {
      return String(this.$store.getters.getInfoApi.counter)
    },
  },
}

function initSlider () {
  $('.slider-1').slick({
    dots: true,
  })
}

import AOS from 'aos'
import '@/assets/js/slick.min.js'

var block_show = false

function scrollTracking () {
  if (block_show) {
    return false
  }

  var wt = $(window).scrollTop()
  var wh = $(window).height()
  if ($('.Count').length) {
    var et = $('.Count').offset().top
  }
  var eh = $('.Count').outerHeight()
  var dh = $(document).height()

  if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
    block_show = true

    $('.Count').css('opacity', '1')
    $('.Count1').each(function () {
      var $this = $(this)
      $({ Counter: 0 }).animate(
        { Counter: $this.text() },
        {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter))
          },
        }
      )
    })
  }
}

$(window).scroll(function () {
  scrollTracking()
})

$(function () {
  scrollTracking()

  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn()
    } else {
      $('#toTop').fadeOut()
    }
  })

  $('#toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800)
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.main-header').addClass('header-scroll')
      $('.main_page').addClass('active')
    } else {
      $('.main-header').removeClass('header-scroll')
      $('.main_page').removeClass('active')
    }
  })
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped src="@/assets/css/screen.css">
</style>
<style>

.section-1 {
  min-height: 700px;
  max-height: 700px;
  overflow: hidden;
}


/* line 1202, ../sass/screen.scss */
.main_page .slider-1 .slick-prev,
.main_page .slider-1 .slick-next {
  width: 24px;
  height: 16px;
  opacity: 1;
  transition: all .25s linear;
}

/* line 1208, ../sass/screen.scss */
.main_page .slider-1  .slick-prev:hover,
.main_page .slider-1  .slick-next:hover {
  opacity: 1;
}

/* line 1212, ../sass/screen.scss */
/*.main_page .slick-prev {*/
/*  right: auto;*/
/*  left: 5%;*/
/*}*/

/* line 1216, ../sass/screen.scss */
.main_page .slider-1 .slick-prev {
  left: 2%;
}

/* line 1219, ../sass/screen.scss */
.main_page .slider-1 .slick-next {
  right: 2%;
}

/* line 1222, ../sass/screen.scss */
/*.main_page .slick-next {*/
/*  right: 5%;*/
/*}*/

/* line 1225, ../sass/screen.scss */
.main_page  .slick-prev:before,
.main_page .slick-next:before {
  content: '';
  position: absolute;
  opacity: 1;
  width: 8px;
  height: 8px;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 3px;
  left: 3px;
}

/* line 1242, ../sass/screen.scss */
.main_page .slick-prev:after,
.main_page .slick-next:after {
  content: '';
  position: absolute;
  top: 7px;
  left: 3px;
  width: 21px;
  height: 1px;
  background: #fff;
}

/* line 1252, ../sass/screen.scss */
.main_page .slick-prev:hover:after,
.main_page .slick-next:hover:after {
  background: var(--color-red);
}

/* line 1256, ../sass/screen.scss */
.main_page .slick-next:before {
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  border-left: none;
  border-top: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: auto;
  right: 3px;
  top: 3px;
}

/* line 1270, ../sass/screen.scss */
.main_page .slick-next:hover:before {
  border-bottom: 1px solid var(--color-red);
  border-right: 1px solid var(--color-red);
}

/* line 1274, ../sass/screen.scss */
.main_page .slick-prev:hover:before {
  border-top: 1px solid var(--color-red);
  border-left: 1px solid var(--color-red);
}

/* line 1278, ../sass/screen.scss */
.main_page .slick-next:after {
  left: 0;
}

/* line 1281, ../sass/screen.scss */
.main_page .slick-prev,
.main_page .slick-next {
  bottom: auto;
  top: 42%;
  z-index: 1;
}

/* line 1287, ../sass/screen.scss */
.main_page .slick-dots {
  bottom: 29px;
}

/* line 1290, ../sass/screen.scss */
.main_page .slick-dots li {
  width: auto;
  height: auto;
  margin: 0 15px;
}

/* line 1295, ../sass/screen.scss */
.main_page .slick-dots li button {
  width: 165px;
  height: 4px;
  padding: 0px;
  background: #fff;
  border-radius: 5px;
}

/* line 1301, ../sass/screen.scss */
.main_page .slick-dots li button:hover {
  box-shadow: 0 0 0 1px var(--color-red);
}

/* line 1305, ../sass/screen.scss */
.main_page .slick-dots .slick-active button {
  background: var(--color-red);
}

/* line 1309, ../sass/screen.scss */
.main_page .slider-2 .slick-prev:before,
.main_page .slider-2 .slick-next:before {
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
}

/* line 1314, ../sass/screen.scss */
.main_page .slider-2 .slick-prev:after,
.main_page .slider-2 .slick-next:after {
  background: #fff;
}

/* line 1318, ../sass/screen.scss */
.main_page .slider-2 .slick-next:before {
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  border-top: none;
  border-left: none;
}

.doctor-row_info {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1070px) {
  .doctor-row_info {
    flex-direction: column;
  }

  .doctor-row_info_quantity {
    margin: 60px 0;
  }
}

.doctor-row_info_desc_label,
.doctor-row_info_quantity_content,
.doctor-row_info_bottom_content {
  font-weight: 600;
  font-size: 32px;
  color: var(--main-color);
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  padding-top: 18px;
  margin-bottom: 22px;
}

.doctor-row_info_desc_wrapper {
  max-width: 662px;
}

.doctor-row_info_desc_label:before,
.doctor-row_info_quantity_content:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 52%;
  height: 2px;
  background: #002678;
}

.doctor-row_info_quantity_content {
  max-width: 300px;
}

.doctor-row_info_bottom_btn_wrapper {
  height: 44px;
  max-width: 264px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fa5c18;
  border: 2px solid #fa5c18;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.doctor-row_info_bottom_btn_wrapper:hover {
  background: #fa5c18;
  color: #fff;
}

.wrap_btns_pdf {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 850px;
  margin-top: 50px;
}

@media screen and (max-width: 900px) {
  .wrap_btns_pdf {
    display: block;
  }

  .doctor-row_info_bottom_btn_wrapper {
    margin-bottom: 10px;
  }
}

.doctor.container {
  padding: 85px 15px;
}

.Count {
  opacity: 0;
  transition: all 0.3s ease;
}

.Count span {
  display: inline-block;
  background-color: #002678;
  border-radius: 4px;
  color: #fff;
  max-width: 50px;
  height: 57px;
  line-height: 50px;
  font-size: 49px;
  margin-right: 3px;
  padding: 5px 10px;
}

.main_page .wrap_btns_pdf a {
  color: #fa5c18;
}

.main_page .wrap_btns_pdf a:hover {
  color: #fff;
}

.main_page .section-1 .box_content .box_text h1,
.main_page .section-1 .box_content .box_text .text-h1 {
  white-space: normal!important;
  max-height: 178px;
}
</style>
