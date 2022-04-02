import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomePage.vue";
import NearbyHotelsView from "../views/NearbyHotelsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/nearby-hotels",
    name: "nearby-hotels",
    component: NearbyHotelsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
