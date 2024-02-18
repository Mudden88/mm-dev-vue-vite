<template>
  <div class="container w-100">

    <div class="bg-light rounded-3 mt-3 p-2">
      <h2 class=" text-start ms-3"><b>Projects</b></h2>
      <div class="bg-light rounded-3 mt-3 p-4 d-flex flex-wrap justify-content-center">

        <div class="card mt-3 pb-5 me-3">
          <img src="/src/assets/bp_karta.png" class="card-img-top p-2" alt="">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">vite-vue-api-crimemap</h5>
            <p class="card-text">Vue.js, vite project,
              click button to get to my GitHub for details</p>

            <a href="https://github.com/Mudden88/vite-vue-api-crimemap" target="_blank"><button
                class="btn btn-dark myButton">View
                more</button></a>
          </div>
        </div>

        <div class="card mt-3 pb-5 me-3">
          <img src="/src/assets/policeAPI.png" class="card-img-top p-2" alt="">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">JavaScript-Lab-2-Police-API</h5>
            <p class="card-text">JavaScript, click button to get to my GitHub for details</p>

            <a href="https://github.com/Mudden88/JavaScript-Labb-2-Police-API" target="_blank"><button
                class="btn btn-dark myButton">View
                more</button></a>
          </div>
        </div>
        <div class="card mt-3 pb-5 me-3">
          <img src="/src/assets/htmlcss.png" class="card-img-top p-2" alt="">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Lab2-HTML-CSS</h5>
            <p class="card-text">Only html and css, click button to get to my GitHub
              for
              details</p>
            <a href="https://github.com/Mudden88/Lab2-HTML-CSS" target="_blank">
              <button class="btn btn-dark myButton">View more</button></a>
          </div>
        </div>
        <div class="card mt-3 me-3 pb-5 d-flex flex-column order-first">
          <img src="/src/assets/DoubleM.png" class="card-img-top p-2" alt="">
          <div class="card-body">
            <h5 class="card-title">DoubleM</h5>
            <p class="card-text">My personal portfolio website,
              made with Vue.js and Vue-Bootstrap. </p>
            <a href="https://mm-dev.se"><button class="btn btn-dark myButton">View more</button></a>
          </div>
        </div>
        <div class="card mt-3 me-3 pb-5">
          <img src="/src/assets/mark-konig-Uu5fnOkFAdA-unsplash.jpg" class="card-img-top p-2" alt="">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">New project</h5>
            <p class="card-text">Project under development...</p>
            <a href=#><button class="btn btn-dark myButton">View
                more</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.myButton {
  position: absolute;
  bottom: 1em;
}
</style>
