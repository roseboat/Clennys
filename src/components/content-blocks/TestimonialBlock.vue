<template>
  <section class="testimonials">
    <div class="container">
      <div class="carousel-wrapper">
        <h2>What Our Guests Say</h2>
        <carousel
          :perPage="1"
          :autoplayTimeout="3500"
          :autoplay="true"
          paginationColor="#E1ca96"
          ref="TestimonialCarousel"
          class="v-scroll-reveal"
          :loop="true"
        >
          <slide v-for="testimonial in testimonials.testimonials" v-bind:key="testimonial.id">
            <p class="preamble">"{{testimonial.quote}}"</p>
            <p class="source">- {{ testimonial.source }}</p>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "TestimonialBlock",
  props: ["testimonials"],
  data() {
    return {
      images: {}
    };
  },
  mounted: function() {
    setTimeout(() => {
      this.$refs["TestimonialCarousel"].onResize();
      this.$refs["TestimonialCarousel"].goToPage(0);
      ScrollReveal().reveal(".v-scroll-reveal", { duration: 800 });
    }, 250);
  }
};
</script>


<style lang="scss">
.testimonials {
  padding: 50px 0px 30px;
  background-color: $c-almond;
  text-align: center;

  .VueCarousel-pagination {
    display: block;
  }

  .VueCarousel-dot {
    display: block;
    margin: 0px;
    min-width: 0px !important;
  }
  .source {
    padding-bottom: 0px;
  }
}
</style>
