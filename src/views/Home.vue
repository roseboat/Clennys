<template>
  <div class="page">
    <HomeBanner/>
    <CollageBlock1/>
    <CollageBlock2/>
    <TestimonialBlock :testimonials="testimonials"/>
    <FindUsBlock/>
    <RestaurantBlock/>
    <DiscoverBlock/>
    <CenterText :centerTextObj="centerText"/>
    <Footer/>
  </div>
</template>

<script>
import HomeBanner from "@/components/content-blocks/HomeBanner.vue";
import CollageBlock1 from "@/components/content-blocks/CollageBlock1.vue";
import CollageBlock2 from "@/components/content-blocks/CollageBlock2.vue";
import FindUsBlock from "@/components/content-blocks/FindUsBlock.vue";
import TestimonialBlock from "@/components/content-blocks/TestimonialBlock.vue";
import Footer from "@/components/content-blocks/Footer.vue";
import RestaurantBlock from "@/components/content-blocks/RestaurantBlock.vue";
import DiscoverBlock from "@/components/content-blocks/DiscoverBlock.vue";
import CenterText from "@/components/content-blocks/CenterTextBlock.vue";
export default {
  name: "home",
  components: {
    Footer,
    HomeBanner,
    CollageBlock1,
    CollageBlock2,
    FindUsBlock,
    TestimonialBlock,
    RestaurantBlock,
    DiscoverBlock,
    CenterText
  },
  data() {
    return {
      centerText: {
        bookButton: true,
        header: "Your next break starts here."
      },

      testimonials: {
        testimonials: [
          {
            quote:
              "Amazing place. Wish we could have stayed longer, but now have a reason to come back!",
            source: "Noel and Susan, San Francisco"
          },
          {
            quote:
              "Stunning place. Love all the extras, wee fry pack - very special touch! Will be recommending this place to everyone.",
            source: "Kelley and Darren, Donegal"
          },
          {
            quote:
              "First class and now my place to stay while in N. Ireland. The whole place was fantastic and the owners were brilliant and friendly. We have already booked to go back. ",
            source: "Steve, England"
          },
          {
            quote:
              "Perfect night away and a very delicious meal. Highly recommend and be back soon.",
            source: "Bill and Christina, Maryland USA"
          },
          {
            quote: "Absolutely amazing place. Will be back next year!",
            source: "Murray and Sharon, Austrailia"
          },
          {
            quote:
              "A rare find. Loved it and will make this a regular stay when in the area on business. ",
            source: "Katie, Yorkshire"
          },
          {
            quote:
              "Beautiful cottages and a lovely place to stay (my third visit so far!). Ivan couldn’t have been more helpful and a lovely, decent person. Highly recommend. ",
            source: "Fionnuala, Belfast"
          }
        ]
      }
    };
  },
  mounted() {
    document.body.classList.add("homepage");
  }
};
</script>
