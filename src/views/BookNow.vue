<template>
  <div class="page">
    <BannerBlock :bannerObj="bannerObj"/>
    <BookNow/>
    <CenterTextBlock :centerTextObj="centerText"/>
    <Footer/>
  </div>
</template>

<script>
import BookNow from "@/components/content-blocks/BookNow.vue";
import Footer from "@/components/content-blocks/Footer.vue";
import BannerBlock from "@/components/content-blocks/BannerBlock.vue";
import CenterTextBlock from "@/components/content-blocks/CenterTextBlock.vue";
export default {
  name: "apartments",
  components: {
    BookNow,
    Footer,
    BannerBlock,
    CenterTextBlock
  },
  data() {
    return {
      bannerObj: {
        heading: "Book Your Stay",
        preambleHtml:
          "Fill out the short form below to be taken to our dedicated booking site.",
        backgroundImage: "./medium_apartments/medium_10_compressed.jpg"
      },
      centerText: {
        header: "Your next break starts here."
      }
    };
  },
  mounted() {
    document.body.classList.remove("homepage");
  }
};
</script>

<style lang="scss" scoped>
</style>
