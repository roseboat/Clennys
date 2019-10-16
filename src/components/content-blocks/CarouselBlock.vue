<template>
  <section class="carousel">
    <div class="container">
      <transition name="fade" mode="out-in">
        <carousel
          class="carousel-wrapper"
          :navigationEnabled="true"
          :perPage="1"
          :paginationEnabled="false"
          :centerMode="true"
        >
          <slide v-bind:key="image.id" v-for="image in carouselData.images">
            <img :src="image" class="carousel-img" />
          </slide>
        </carousel>
      </transition>
    </div>
  </section>
</template>
<!-- :perPageCustom="[[850, 2],[1000, 3]]" -->

<script>
export default {
  name: "CarouselBlock",
  props: ["carouselData"]
};
</script>


<style lang="scss">
.carousel {
  padding-top: 60px; 
  vertical-align: middle;
  text-align: center;
   background-color: $c-lightgold;

  .carousel-wrapper {
    vertical-align: middle;
    justify-content: center;
  }
  .carousel-img {
    padding: 0px;
    margin: 0px;
    max-height: 450px;
  }

  .VueCarousel-navigation {
    padding: 30px;
  }

  .VueCarousel-slide img {
    margin: 0 auto;
  }
  .VueCarousel-navigation {
    align-items: center;
    justify-content: center;
  }

  .VueCarousel-navigation-prev,
  .VueCarousel-navigation-next {
    font-size: 20px;
    margin: 0;
    padding: 5px;
    text-align: center;
    transform: none;
    position: relative;
    justify-content: center;
    flex-direction: row;

    &:focus,
    &:hover {
      outline: none;
    }
  }

  @media (min-width: $screen-md) {
    .VueCarousel-navigation-prev,
    .VueCarousel-navigation-next {
      font-size: 25px;
      padding: 25px;
      position: absolute;
    }
  }
}
</style>
