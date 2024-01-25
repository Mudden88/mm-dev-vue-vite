
<template>
  <nav class=" sticky-top navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">
  <div class="container-fluid">
    <router-link to="/" id="index" class="navbar-brand"><b>Double</b><b class="text-color">M</b></router-link>
    <button type="button" id="navButton" class="navbar-toggler" data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse">

      <span class="navbar-toggler-icon">
      </span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav">

        <li><router-link to="/" id="navlink" class="nav-item nav-link">Home</router-link></li>
        <li><router-link to="/About" id="navlink" class="nav-item nav-link">About</router-link></li>
        <li><router-link to="/Projects" id="navlink" class="nav-item nav-link">Projects</router-link></li>
        <li><router-link to="/Contact" class="nav-item nav-link">Contact</router-link></li>

      </div>
    </div>
  </div>
</nav>

<div class="myHero">
    <h1 class="text-light"><b class="firstH">FULLSTACK</b><b class="text-color">DEVELOPER</b>
      <p class="myText">student
      </p>
    </h1>
  </div>
</template>
