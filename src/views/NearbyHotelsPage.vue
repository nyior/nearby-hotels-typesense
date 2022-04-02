<template>
  <div>
    <div class="row px-3 mt-0 mb-2 text-center d-flex">
      <div class="col-md-3 col-12" v-for="hotel in hotels" :key="hotel.id">
        <Hotel :hotel="hotel" />
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

      userLatitude: 6.465422,
      userLongitude: 3.406448,

      searchParams: {
        q: "*",
        query_by: "hotel_name",
        filter_by: `coordinates:(${this.userLatitude}, ${this.userLongitude}, 1000 km)`,
        sort_by: `coordinates(${this.userLatitude}, ${this.userLongitude}):asc`,
      },
    };
  },

  components: {
    Hotel,
  },

  methods: {
    getHotels() {
      client
        .collections("hotels")
        .documents()
        .search(this.searchParams)
        .then(function (results) {
          console.log(results);
          this.hotels = results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.getHotels();
  },
};
</script>

<style></style>
