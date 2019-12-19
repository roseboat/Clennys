<template>
  <div class="page">
    <BannerBlock :bannerObj="bannerObj1"/>
    <AboutBlock :aboutObj="aboutObj"/>
    <LeftImageBlock :leftObj="leftImage"/>
    <CenterTextBlock :centerTextObj="centerText"/>
    <Footer/>
  </div>
</template>


<script>
import BannerBlock from "@/components/content-blocks/BannerBlock.vue";
import AboutBlock from "@/components/content-blocks/AboutBlock.vue";
import Footer from "@/components/content-blocks/Footer.vue";
import CenterTextBlock from "@/components/content-blocks/CenterTextBlock.vue";
import LeftImageBlock from "@/components/content-blocks/LeftImageBlock.vue";

export default {
  components: {
    BannerBlock,
    AboutBlock,
    Footer,
    CenterTextBlock,
    LeftImageBlock
  },
  mounted() {
    document.body.classList.remove("homepage");
  },
  data() {
    return {
      centerText: {
        bookButton: true,
        header: "Your next break starts here."
      },
      bannerObj1: {
        backgroundImage: "./block_images/front.jpg",
        heading: "Family Business for Over 250 Years",
        preambleHtml:
          "A rarity, Clenaghans has been in the same family for almost three centuries. Records show that along with the family farm, there has been a public house on the property for over 250 years.",  
      },
      leftImage: {
        header: "Lavery Connection",
        bodyHtml:
          "<p>In its more recent history, Clenaghans was inherited by Winnifred \"Winnie\" Clenaghan. Winnifred’s first cousin was renowned Irish painter, Sir John Lavery. Lavery was born in Belfast but orphaned at a young age and spent much of his young life at Clenaghan’s, keeping up a correspondence with the farm into his old age.</p><p>Lavery would go on to become the official painter of the First World War and a portrait artist to Winston Churchill, the British royal family, the major players of the Irish War of Independence and most prolifically, his wife and muse, Hazel Lavery.</p><p>Winnie's brother was Eddie Clenaghan, who was a scrulptor and protege of Lavery's and had visited Lavery's studio in London on many occassions. Tragically, in 1942 and at the age of fourty-seven, Eddie was murdered on his way to report a group of American GI's who were refusing to leave the pub. He was discovered unconscious by his bicycle the following morning.</p><p>Displayed in both Clenaghan’s Accommodation and Restaurant are Lavery prints, memorabilia and letters, many of which cannot be found anywhere else along with some busts by Eddie Clenaghan.</p>",
        // backgroundImage: "./block_images/lavery_1.jpg",
        image: "./block_images/john_lav.jpg"
      }
    };
  }
};
</script>
