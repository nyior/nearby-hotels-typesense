<template>
  <div class="m-3">
    <div id="HotelImageBackground">
      <img
        src="../assets/hotel.jpg"
        class="img-fluid"
        :alt="hotel.name + ' image'"
      />
    </div>

    <div class="text-left mt-2">
      <div>
        <span id="hotelName">{{ hotel.hotel_name }}</span>
      </div>
      <div>
        <span id="address" class="mt-0">{{ hotel.address }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotel-single",

  props: {
    hotel: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
#address {
  font-weight: 400;
  font-size: 1.5rem;
}

#hotelName {
  font-size: 1.6rem;
}

#hotelImageBackground {
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-flow: column;
  background-color: #dcdcdc;
}

@media only screen and (max-width: 640px) {
  #hotelName {
    font-size: 1.4rem;
  }
  #address {
    font-size: 1.2rem;
    font-weight: 400;
  }
}
</style>
