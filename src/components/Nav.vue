<script setup>

//Toggle menu to "unCollapse" when link clicked

import { ref } from 'vue';
const isCollapseOpen = ref(false);
const handleToggleCollapse = () => {
  isCollapseOpen.value = !isCollapseOpen.value;
};

const handleRouterLinkClick = () => {
  isCollapseOpen.value = false;
};
</script>

<template>
  <nav class="sticky-top navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">
    <div class="container-fluid">
      <router-link to="/" id="index" class="navbar-brand"><b>Martin</b><b class="text-color">Myrdhén</b></router-link>
      <button type="button" class="navbar-toggler" @click="handleToggleCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :class="{ 'collapse': !isCollapseOpen, 'navbar-collapse': true }">
        <div class="navbar-nav">
          <li><router-link to="/" id="navlink" class="nav-item nav-link"
              @click="handleRouterLinkClick">Home</router-link>
          </li>
          <li><router-link to="/About" id="navlink" class="nav-item nav-link"
              @click="handleRouterLinkClick">About</router-link></li>
          <li><router-link to="/Projects" id="navlink" class="nav-item nav-link"
              @click="handleRouterLinkClick">Projects</router-link></li>
          <li><router-link to="/Contact" class="nav-item nav-link" @click="handleRouterLinkClick">Contact</router-link>
          </li>
        </div>
      </div>
    </div>
  </nav>

  <div class="myHero">
    <h1 class="text-light">
      <b class="firstH">FULLSTACK</b><b class="text-color">DEVELOPER</b>
    </h1>
  </div>
</template>
