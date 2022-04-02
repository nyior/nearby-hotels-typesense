<template>
  <div class="container-fluid">
    <div class="row text-center mt-5 mb-5 px-5">
      <div class="col-12 col-md-6 mr-md-auto ml-md-auto">
        <h1>Welcome to Our Nearby Hotels Application👋</h1>
      </div>
    </div>

    <div class="row text-left mt-5 px-5">
      <div class="col-12 col-md-6 mr-md-auto ml-md-auto">
        <router-link to="/nearby-hotels">
          <button class="btn-block shadow text-center">
            <div class="text">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              see hotels around you
            </div>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  background-color: #1da462;
  color: white !important;
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}
</style>

<script>
export default {
  name: "home-page",
};
</script>
