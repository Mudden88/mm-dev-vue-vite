
<script setup>
import Nav from './components/Nav.vue'

</script>

<template>
//Navbar and hero img inside <Nav /> tag.
  <Nav />

//Router-view with transition for change of content

  <div class="wrapper d-flex justify-content-center">
  <router-view class="rw" v-slot="{Component}">
  <transition name="fade" mode="out-in">
    <component :is="Component" />
  </transition></router-view>

</div>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;

}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.rw {
  margin: 0 1em 1em 1em;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5)
  );
}


</style>
