<template>
  <div class="page">


    <BannerBlock :bannerObj="bannerObj" :key="bannerObj.id" />   
    <TwoColumn :twoColumn="twoColumn" />
    <CarouselBlock
      id="carousel-block"
      :carouselData="carouselDataLarge"
      v-if="carouselDataLarge"
    />
    <ApartmentGrid :apartmentGrid="largeGrid" />
    <IconListBlock :iconProps="iconBlock" />
    <TestimonialBlock :testimonials="testimonials" />
    <CenterText :centerTextObj="centerText" />
    <Footer />
  </div>
</template>


<script>
import BannerBlock from "@/components/content-blocks/BannerBlock.vue";
import Footer from "@/components/content-blocks/Footer.vue";
import IconListBlock from "@/components/content-blocks/IconListBlock.vue";
import CarouselBlock from "@/components/content-blocks/CarouselBlock.vue";
import TwoColumn from "@/components/content-blocks/TwoColumnText.vue";
import TestimonialBlock from "@/components/content-blocks/TestimonialBlock.vue";
import CenterText from "@/components/content-blocks/CenterTextBlock.vue";
import ApartmentGrid from "@/components/content-blocks/ApartmentGrid.vue";

export default {
  name: "apartments",
  components: {
    TwoColumn,
    BannerBlock,
    Footer,
    IconListBlock,
    CarouselBlock,
    TestimonialBlock,
    CenterText,
    ApartmentGrid
  },
  mounted() {
    document.body.classList.remove("homepage");
    // var heights = window.innerHeight;
    // document.getElementById("carousel-block").style.height = heights - 200 + "px";
  },
  data() {
    return {
      centerText: {
        bookButton: true,
        header: "Your next break starts here."
      },
      bannerObj: {
        heading: "Accommodation at Clenaghans",
        preambleHtml:
          "We have 3 large and 4 medium self-catering apartments on the property, each equipped with fully functioning kitchens, relaxing living spaces and the comfiest of double beds. Each has its own character and has been finished with the utmost attention to detail. ",
        backgroundImage: "./block_images/apart_madge_2.jpg"
      },
      iconBlock: {
        header: "Features",
        icons: [
          {
            key: "Free Wifi"
          },
          {
            key: "TV"
          },
          {
            key: "Toiletries"
          },
          {
            key: "Hairdryer"
          },
          {
            key: "Outdoor Seating"
          },
          {
            key: "Bathtub or Shower"
          },
          {
            key: "Irish Breakfast Pack"
          },
          {
            key: "Towels"
          },
          {
            key: "Laundry Service"
          },
          {
            key: "Car Parking"
          },
          {
            key: "On-site Restaurant"
          }
        ]
      },
      twoColumn: {
        header1: "Large Apartments",
        preamble1:
          "For those who want a little more room or require an extra bed.",
        body1:
          "All large apartments come with large living room and kitchens, plus a bath and shower.",
        header2: "Regular Apartments",
        preamble2:
          "Cosy, comfortable and with everything you need to feel at home away from home.",
        body2:
          "Our regular apartments have spacious living rooms and kitchens, plus an ensuite shower."
      },
      testimonials: {
        testimonials: [
          {
            quote: "Just love this place - don’t want to go home.",
            source: "Marc and Becca, Dundonald"
          },
          {
            quote:
              "Unique establishment. So glad to have found it. Hope to return soon.",
            source: "Eamonn and Brenda, Maghera."
          },
          {
            quote: "Wow. Fabulous place - loved it",
            source: "Sharon and Thomas, Canada"
          },
          {
            quote:
              "This is a gem! A real oasis if you just want to get away from it all and relax. We will definitely be back!",
            source: "Rosie, Ireland"
          },
          {
            quote:
              "We could quite happily live here - great spot with great atmosphere.",
            source: "The McGibbons, Lurgan"
          },
          {
            quote: "Loved it. Full of character.",
            source: "Graeme, Scotland"
          }
        ]
      },
      carouselDataLarge: {
        images: [
          "./large_apartments/large_1_compressed.jpg",
          "./large_apartments/large_2_compressed.jpg",
          "./large_apartments/large_3_compressed.jpg",
          "./large_apartments/large_4_compressed.jpg",
          "./large_apartments/large_5_compressed.jpg",
          "./large_apartments/large_9_compressed.jpg",
          "./large_apartments/large_13_compressed.jpg",
          "./large_apartments/large_15_compressed.jpg",
          "./large_apartments/large_17_compressed.jpg",
          "./large_apartments/large_21_compressed.jpg",
          "./large_apartments/large_22_compressed.jpg",
          "./large_apartments/large_23_compressed.jpg",
          "./large_apartments/large_24_compressed.jpg",
          "./medium_apartments/medium_2_compressed.jpg",
          "./medium_apartments/medium_3_compressed.jpg",
          "./medium_apartments/medium_5_compressed.jpg",
          "./medium_apartments/medium_6_compressed.jpg",
          "./medium_apartments/medium_7_compressed.jpg",
          "./medium_apartments/medium_11_compressed.jpg",
          "./medium_apartments/medium_14_compressed.jpg",
        ]
      },
      largeGrid: {
        rows: [
          {
            Apartment: "Madge",
            Occupancy: "3 max",
            KitchLive: "&#x2713;",
            BathShower: "Both",
            OneNightOneGuest: "£70",
            OneNightTwoGuest: "£95"
          },
          {
            Apartment: "Sir John",
            Occupancy: "3 max",
            KitchLive: "&#x2713;",
            BathShower: "Both",
            OneNightOneGuest: "£70",
            OneNightTwoGuest: "£95"
          },
          {
            Apartment: "Rosa",
            Occupancy: "2 max",
            KitchLive: "&#x2713;",
            BathShower: "Shower",
            OneNightOneGuest: "£70",
            OneNightTwoGuest: "£95"
          },
          {
            Apartment: "Alice",
            Occupancy: "2 max",
            KitchLive: "&#x2713;",
            BathShower: "Shower",
            OneNightOneGuest: "£65",
            OneNightTwoGuest: "£85"
          },
          {
            Apartment: "Winnie",
            Occupancy: "2 max",
            KitchLive: "&#x2713;",
            BathShower: "Shower",
            OneNightOneGuest: "£65",
            OneNightTwoGuest: "£85"
          },
          {
            Apartment: "Hazel",
            Occupancy: "2 max",
            KitchLive: "&#x2713;",
            BathShower: "Shower",
            OneNightOneGuest: "£65",
            OneNightTwoGuest: "£85"
          },
          {
            Apartment: "Sadie",
            Occupancy: "2 max",
            KitchLive: "&#x2713;",
            BathShower: "Shower",
            OneNightOneGuest: "£65",
            OneNightTwoGuest: "£85"
          },
          {
            Apartment: "Eddie",
            Occupancy: "2 max",
            KitchLive: "&#x2717",
            BathShower: "Shower",
            OneNightOneGuest: "£45",
            OneNightTwoGuest: "£55"
          }
        ]
      }
    };
  }
};
</script>


<style lang="scss" scoped>
.container {
  height: 200px;

  #carousel-block {
    margin: auto;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
