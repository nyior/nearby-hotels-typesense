<template>
  <div class="container">
    <div class="row text-center mt-5 mb-5 px-5">
      <div class="col-12 col-md-6 mr-md-auto ml-md-auto">
        <h1>Hotels Around You😍</h1>
        <small>
          <router-link to="/">Back to Home</router-link>
        </small>
      </div>
    </div>

    <div class="row" id="card-wrapper">
      <div
        class="col-md-3 col-12 border shadow-sm m-2"
        v-for="hotel in hotels"
        :key="hotel.document.id"
        id="card"
      >
        <Hotel :hotel="hotel.document" />
      </div>
    </div>
  </div>
</template>

<script>
import Hotel from "@/components/Hotel.vue";
import client from "../../typesense.js";

export default {
  name: "nearby-hotels",

  data() {
    return {
      hotels: [],

      // Lagos, Nigeria Coordinates
      userLatitude: 6.465422,
      userLongitude: 3.406448,

      // New York Coordinates
      // userLatitude: 40.71427,
      // userLongitude: -74.00597,
    };
  },

  components: {
    Hotel,
  },

  methods: {
    getHotels() {
      const searchParams = {
        q: "*",
        query_by: "hotel_name",
        filter_by: `coordinates:(${this.userLatitude}, ${this.userLongitude}, 1000 km)`,
        sort_by: `coordinates(${this.userLatitude}, ${this.userLongitude}):asc`,
      };

      client
        .collections("hotels")
        .documents()
        .search(searchParams)
        .then((results) => {
          console.log(`server response: ${results}`);
          this.hotels = results["hits"];
          console.log(`hotels: ${this.hotels}`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.getHotels();
  },
};
</script>

<style>
#card-wrapper {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
