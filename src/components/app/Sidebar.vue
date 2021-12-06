<template>
  <div class="sidebar" :class="{ open: isOpen }">
    <div class="sidebar-top">
      <div class="sidebar_arrow" @click.prevent="$emit('click-my')">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="sidebar-top_line line"></div>
    </div>
    <div class="sidebar-center">
      <router-link to="/lc-profile" :class="[isExactActive && 'active']"  class="sidebar-center_item sidebar_text">
        <div class="icon_sidebar">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></svg>
        </div>
        <div class="text_sidebar">Мій профіль</div>
      </router-link>
      <router-link to="/lc-mysertificate" :class="[isExactActive && 'active']"  class="sidebar-center_item sidebar_text">
        <div class="icon_sidebar">
          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM19 8c0 1.3-.84 2.4-2 2.82V7h2v1z"></path></svg>
        </div>
        <div class="text_sidebar">Мої сертифікати</div>
      </router-link>
    </div>
    <div class="sidebar-center_line line"></div>
    <div class="sidebar-bottom" >
      <p class="sidebar-bottom_title">Керування</p>

      <router-link to="/lc-events" :class="[isExactActive && 'active']"  class="sidebar-center_item sidebar_text">
        <div class="icon_sidebar">
          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></svg>
        </div>
        <div class="text_sidebar">Події</div>
      </router-link>
      <router-link to="/lc-users" :class="[isExactActive && 'active']"  class="sidebar-center_item sidebar_text">
        <div class="icon_sidebar">
          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
        </div>
        <div class="text_sidebar">Користувачі</div>
      </router-link>
      <router-link to="/lc-static" :class="[isExactActive && 'active']"  class="sidebar-center_item sidebar_text">
        <div class="icon_sidebar">
          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path></svg>
        </div>
        <div class="text_sidebar">Статистика</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: {
      type: Boolean
    }
  }
}
</script>
<style scoped src="@/assets/lc/css/style.min.css">
</style>
<style>
.sidebar {
  transform: translateX(-100%);
  transition: all 0.3 ease;
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar .sidebar-center_item {
  border-radius: 0;
}

.sidebar-center_item.router-link-active.router-link-exact-active {
  background: #f2f2f2;
}
</style>
