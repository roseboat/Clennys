<template>
  <section class="restaurant">
    <div class="container">
      <div class="columns">
        <div class="restaurant-text v-text-reveal">
          <h2>Clenaghans Restaurant</h2>

          <p>Also on-site is the award-winning Clenaghans Restaurant which opens Wednesday to Sunday and serves traditional Irish fare using the finest local produce.</p>
          <p>
            <i>Michelin Bib Gourmand Winner 2019</i>
          </p>
          <a href="https://clenaghansrestaurant.com/" target="_blank">
            <button>Visit the Restaurant</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RestaurantBlock",
  mounted() {
    ScrollReveal().reveal(".v-text-reveal", { duration: 500, delay: 300 });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.restaurant {
  background-image: url("../../../public/block_images/restaurantFullSquare.png");
  position: relative;
  text-align: left;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 0px 40px 0px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
  }
}

.restaurant-text {
  position: relative;
    background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
}

@media (min-width: 850px) {
  .restaurant {
    padding: 80px 0px 80px 0px;
  }
  .restaurant-text {
    margin-right: auto;
    margin-left: auto;
    width: 450px;
  }
}

@media (min-width: $screen-md) {
  .restaurant {
    background-image: url("../../../public/block_images/restaurantFull.png");
    padding: 100px 0px 100px 0px;
  }

  .restaurant-text {
    @include transform(translateX(320px));
    width: 350px;
    margin-top: 4px;
  }
}

@media (min-width: $screen-lg) {
  .restaurant-text {
    @include transform(translateX(345px));
    width: 400px;
  }
}

@media (min-width: 1300px) {
  .restaurant-text {
    @include transform(translateX(390px));
  }
}

@media (min-width: $screen-xl) {
  .restaurant-text {
    @include transform(translateX(410px));
    width: 450px;
  }
}

@media (min-width: $screen-xxl) {
  .restaurant-text {
    @include transform(translateX(470px));
    width: 500px;
  }
}

@media (min-width: 1900px) {
  .restaurant-text {
    @include transform(translateX(545px));
    width: 500px;
  }
}
</style>
