<template>
  <div class="container notFound">
    <h1>404 Page not found!</h1>
    <p>Go to <router-link class="link-home" to="/">Main Page</router-link>?</p>
  </div>
</template>

<script>
export default {};
</script>
<style scoped src="@/assets/css/screen.css" >
</style>
<style scoped>
.notFound {
  padding: 50px 0;
}
.notFound h1 {
  font-size: 50px;
  text-align: center;
  color: rgb(32, 29, 29);
  padding: 40px 0;
}

p {
  text-align: center;
}

.link-home {
  color: #fa5c18;
}
</style>
