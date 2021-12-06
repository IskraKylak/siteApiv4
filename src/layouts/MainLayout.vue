<template>
  <div class="main-lc">
    <Navbar :isOpen="isOpen" @click-my="isOpen = !isOpen" />
    <Sidebar :isOpen="isOpen" @click-my="isOpen = !isOpen"/>
    <main class="main" :class="{ open: isOpen }">
      <router-view  />
    </main>
    <footer class="footer">
      <div class="footer-box">
        <p>
          @ 2021
        </p>
      </div>
    </footer>
  </div>

  <div style="display: none;">
    <div class="box-modal" id="exampleModal1">
      <div class="box-modal_close arcticmodal-close"><span class="castom-x"></span></div>
      <div class="popUp">
        <div class="header2">

          <h2>Добавить нового партнера</h2>
          <button>ДОДАТИ</button>
        </div>
        <div class="boxes2">
          <fieldset>
            <legend>Назва партнера *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>Посылання на партнера *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <fieldset>
            <legend>Порядок *</legend>
            <input type="text" class="profile_input" required>
          </fieldset>
          <p class="dropzone_title">Логотип партнера</p>
          <form class="dropzone dz-clickable dropzone_event" action="upload.php"
                enctype='multipart/form-data'>
            <div class="cloud_dropzone">
              <i class="fa fa-cloud-upload element"></i>
            </div>
            <input type="hidden" name="filenameEmail" class="filenameEmail" value="">
            <input type="hidden" name="side" value="front">
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";

export default {
  data: () => ({
    isOpen: true,
  }),
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
<style scoped src="@/assets/lc/css/style.min.css">
</style>
<style>
.main-lc {
  margin-top: -160px;
}
body {
  margin: 0;
}

.main-lc .main.open {
  margin-left: 239px;
  width: calc(100% - 239px);
}

.main-lc .main {
  transition: all 0.3s ease;
  margin-left: 0;
  width: 100%;
}
</style>
