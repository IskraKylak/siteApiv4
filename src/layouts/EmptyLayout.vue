<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script>
import Header from '@/components/app/Header'
import Footer from '@/components/app/Footer'
export default {
  components: {
    Header, Footer
  },
}
</script>
<style scoped src="@/assets/css/screen.css" >
</style>
