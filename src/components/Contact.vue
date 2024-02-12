<script setup>

import Contactform from './Contactform.vue';

</script>

<template>
  <div class="container">

    <div class="bg-light mt-3 mb-3 rounded-3" style="min-height: 40vh;">

      <Contactform />

      <h2 class=" text-start ms-3"><b>My</b><b class="text-muted">Socials</b></h2>

      <div class="bg-light mt-4 py-4 text-center rounded-3">
        <a href="https://linkedin.com/in/martin-myrdhén-47784a174" target="_blank">
          <button class="btn btn-light border mb-2 me-2 icoBtn l-ico"><img src="/src/assets/linkedin.svg" class="linkedin"
              alt="">
            <p class="mb-0">LinkedIn</p>
          </button></a>
        <a href="https://github.com/Mudden88" target="_blank">
          <button class="btn btn-light border mb-2 icoBtn g-ico"><img src="/src/assets/github.svg" class="gitSvg" alt="">
            <p class="mb-0">Github</p>
          </button>
        </a>

      </div>


    </div>
  </div>
</template>
