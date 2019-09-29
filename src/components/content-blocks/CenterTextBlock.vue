 <template>
  <section class="centerTextBlock">
    <div class="container">
      <div class="text">
        <h2 :style="style" class="v-text-reveal">{{ centerTextObj.header }}</h2>
        <p class="preamble">{{ centerTextObj.preamble }}</p>
        <p class="body">{{ centerTextObj.body }}</p>
        <div v-html="centerTextObj.bodyHtml"></div>
        <a href="https://app.thebookingbutton.com/properties/bfs6371?" target="_blank" v-if="centerTextObj.bookButton">
          <button class="v-btn-reveal">Book Now</button>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CenterTextBlock",
  props: ["centerTextObj"],
  data() {
    return {
      bookingBanner: this.centerTextObj.bookButton
    };
  },
  computed: {
    style() {
      if (this.bookingBanner) {
        return "font-family: 'Crimson Text', arial, sans-serif; !important";
      }
    }
  },
  mounted() {
    ScrollReveal().reveal(".v-text-reveal", { duration: 400, delay: 200 });
    ScrollReveal().reveal(".v-btn-reveal", { duration: 500, delay: 400 });
  }
};
</script>

<style scoped lang="scss">
.centerTextBlock {
  padding: 60px 0px;
  text-align: center;
  background-color: $c-wheat;
}

@media (min-width: $screen-xxl) {
  .centerTextBlock {
    padding: 70px 0px;
  }
}
</style>
