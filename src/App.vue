
<script setup>
import Nav from './components/Nav.vue'

</script>

<template>
  <Nav />
  <div class="wrapper d-flex justify-content-center w-100">
  <router-view class="rw" v-slot="{Component}">
  <transition name="fade" mode="out-in">
    <component :is="Component" />
  </transition></router-view>

</div>
</template>
<style scoped>
.rw {
  margin: 0 1em 1em 1em;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5)
  );
}


</style>
