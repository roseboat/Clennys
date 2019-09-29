<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header-inner">
          <div class="logo-section v-scroll-reveal">
            <router-link to="/" class="logo" v-on:click="closeMenu()">
              <img src="@/assets/house_logo.png" id="logo-el">
              <p class="preamble" id="logo-el">Clenaghans</p>
            </router-link>
          </div>
          <div
            class="mob-menu"
            tabindex="0"
            :aria-label="menuState"
            @keydown.enter="showMobMenu($event)"
            @click="showMobMenu($event)"
          ></div>
          <transition name="fade" mode="out-in">
            <nav class="navigation" ref="mainNav">
              <ul>
                <li>
                  <router-link to="/about">About</router-link>
                </li>
                <li>
                  <router-link to="/apartments">Apartments</router-link>
                </li>
                <!-- <li>
                  <router-link to="/vouchers">Vouchers</router-link>
                </li> -->
                <li>
                  <router-link to="/contact">Contact</router-link>
                </li>
                <li>
                  <a href="https://app.thebookingbutton.com/properties/bfs6371?" target="_blank">
                    <button class="bookNowBtn">Book Now</button>
                  </a>
                </li>
              </ul>
            </nav>
          </transition>
        </div>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNav: false,
      menuState: "Open navigation menu"
    };
  },

  methods: {
    closeMenu: function() {
      document.getElementsByClassName("navigation")[0].style.display = "none";
      document.getElementsByClassName("page")[0].style.display = "";
    },

    showMobMenu: function() {
      var nav = this.$refs.mainNav;
      var mobileNav = document.getElementsByClassName("navigation")[0];

      this.mobileNav = !this.mobileNav;

      document.body.classList.contains("mob-active")
        ? document.body.classList.remove("mob-active")
        : document.body.classList.add("mob-active");

      this.menuState === "Open navigation menu"
        ? (this.menuState = "Close navigation menu")
        : (this.menuState = "Open navigation menu");

      if (document.body.classList.contains("mob-active")) {
        document.getElementsByClassName("navigation")[0].style.display = "";
        document.getElementsByClassName("page")[0].style.display = "none";
      } else {
        document.getElementsByClassName("navigation")[0].style.display = "none";
        document.getElementsByClassName("page")[0].style.display = "";
      }
    }
  },
  mounted: function() {
    document.body.classList.add("loaded");

    picturefill();

    if (window.innerWidth > 1050) {
      document.getElementsByClassName("navigation")[0].style.display = "";
    } else {
      document.getElementsByClassName("navigation")[0].style.display = "none";
    }

    var nav = this.$refs.mainNav;
    var resizeTimer;
    window.onresize = function(event) {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(function() {
        if (window.innerWidth > 1500) {
          if (nav.classList.contains("active")) {
            nav.classList.remove("active");
            document.body.classList.remove("mob-active");
          }
        }
      }, 250);
    };
  },

  watch: {
    $route(to, from) {
      this.mobileNav = false;
      document.body.classList.remove("mob-active");
      document.getElementsByClassName("navigation")[0].style.display = "none";
    }
  }
};
</script>

<style lang="scss">
@import "./scss/structure/navigation.scss";
</style>
