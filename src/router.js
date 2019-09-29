import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/apartments",
      name: "apartments",
      component: () => import("./views/Apartments.vue")
    }
    // {
    //   path: "/vouchers",
    //   name: "vouchers",
    //   component: () => import("./views/Vouchers.vue")
    // },
    // {
    //   path: "/discoverni",
    //   name: "discoverni",
    //   component: () => import("./views/DiscoverNI.vue")
    // },
    // {
    //   path: "/book-now",
    //   name: "booknow",
    //   component: () => import("./views/BookNow.vue")
    // }
  ]
});
