<template>
  <section class="collage">
    <div class="container">
      <picture>
        <source
          srcset="../../../public/block_images/block_pics_1_compressed.png"
          media="(min-width: 1050px)"
        >
        <source srcset="../../../public/block_images/clens_outside.png" media="(min-width: 0px)">
        <img srcset="../../../public/block_images/block_pics_1_compressed.png" class="v-img-reveal">
      </picture>
      <div class="textBox v-text-reveal">
        <h4>Traditional Irish Charm</h4>
        <p
          class="bodyText"
        >Located in idyllic Northern Irish countryside, Clenaghans is situated on the site of an 18th century farmyard and public house and has remained in the same family throughout its remarkable history.</p>
        <router-link to="/about">
          <button>More About Us</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CollageBlock1",
  props: ["collageBlock1"],

  mounted() {
    ScrollReveal().reveal(".v-img-reveal", { duration: 500, delay: 100 });
    ScrollReveal().reveal(".v-text-reveal", { duration: 700, delay: 200 });
  }
};
</script>

<style scoped lang="scss">
.collage {
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
    padding: 80px;

    .textBox {
      margin-right: auto;
      margin-left: auto;
      @include transform(translateX(-60px));
      width: 450px;
      margin-top: -70px;
      padding: 40px;
    }
  }

  @media (min-width: $screen-lg) {
    .textBox {
      @include transform(translateX(-75px));
      width: 550px;
      margin-top: -100px;
      padding: 50px;
    }
  }

  @media (min-width: $screen-xl) {
    .textBox {
      width: 600px;
    }
  }
}
</style>
