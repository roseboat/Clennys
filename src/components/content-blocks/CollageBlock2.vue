<template>
  <section class="collage2">
    <div class="container">
      <picture>
        <source
          srcset="../../../public/block_images/compressed_block_2.png"
          media="(min-width: 1050px)"
        >
        <source
          srcset="../../../public/large_apartments/large_16_compressed.jpg"
          media="(min-width: 0px)"
        >
        <img srcset="../../../public/block_images/compressed_block_2.png" class="v-img-reveal">
      </picture>

      <div class="textBox v-text-reveal">
        <h4>Warmth and Comfort</h4>
        <p
          class="bodyText"
        >Boasting seven unique apartments lovingly restored from traditional farm buildings, each blend old and new with modern comforts among rustic surroundings.</p>
        <router-link to="/apartments">
          <button>View Apartments</button>
        </router-link>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "CollageBlock2",
  props: ["collageBlock2"],
  mounted() {
    ScrollReveal().reveal(".v-img-reveal", { duration: 500, delay: 100 });
    ScrollReveal().reveal(".v-text-reveal", { duration: 700, delay: 200 });
  }
};
</script>

<style scoped lang="scss">
.collage2 {
  padding: 30px 0px 30px;
  position: relative;
  background: linear-gradient(to right, $c-lightgold 50%, $c-lightcream 50%);
  overflow: hidden;

  .textBox {
    position: relative;
    background-color: $c-white;
    padding: 40px;
  }

  img {
    max-height: 500px;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: $screen-xs) {
    .textBox {
      margin-top: 20px;
    }
  }

  @media (min-width: $screen-md) {
    padding: 0px 80px 80px 80px;

    .textBox {
      margin-right: auto;
      margin-left: auto;
      @include transform(translateX(225px));
      width: 450px;
      margin-top: -135px;
      padding: 40px;
    }
  }

  @media (min-width: $screen-lg) {
    .textBox {
      @include transform(translateX(295px));
      width: 550px;
      margin-top: -180px;
      padding: 50px;
    }
  }

  @media (min-width: $screen-xl) {
    .textBox {
      @include transform(translateX(335px));
      width: 600px;
      margin-top: -190px;
    }
  }
}
</style>
