<template>
  <div class="page">
    <BannerBlock :bannerObj="bannerObj"/>
    <VoucherContent/>
    <CenterTextBlock :centerTextObj="centerText"/>
    <Footer/>
  </div>
</template>



<script>
// @ is an alias to /src
import BannerBlock from "@/components/content-blocks/BannerBlock.vue";
import VoucherContent from "@/components/content-blocks/VouchersBlock.vue";
import CenterTextBlock from "@/components/content-blocks/CenterTextBlock.vue";
import Footer from "@/components/content-blocks/Footer.vue";

export default {
  name: "vouchers",
  components: {
    CenterTextBlock,
    Footer,
    BannerBlock,
    VoucherContent
  },

  mounted: function() {
    document.body.classList.remove("homepage");
  },
  data() {
    return {
      bannerObj: {
        heading: "Vouchers",
        backgroundImage: "./block_images/flowers2.jpg",
        preambleHtml:
          '<p class="preamble">You can now purchase vouchers for <b>Clenaghan’s Accommodation</b> online. All major credit/debit cards are accepted and payments are processed using our secure merchant <b>Stripe</b>.</p><p class="preamble"> All vouchers are valid for 12 months after the date of purchase.</p>'
      },
      centerText: {
        bookButton: true,
        header: "Your next break starts here."
      }
    };
  }
};
</script>
