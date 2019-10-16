<template>
  <div class="page">
    <!-- <BannerBlock :bannerObj="bannerObj"/> -->

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2316.706112744643!2d-6.241440983896563!3d54.50340748023783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4860fdae1f67c4f7%3A0xf6927a3d04335ae2!2sClenaghans!5e0!3m2!1sen!2suk!4v1560349067462!5m2!1sen!2suk"
      id="contact-page-map"
      frameborder="0"
      style="border:0"
      allowfullscreen
    ></iframe>
<div class="container">
  <div class="contact-page-findus">
  
 <h2>Find Us</h2>
          <p>Conveniently located a 5 minute drive away from the Moira Junction (Junction 9) of Northern Ireland’s M1 motorway, we are also:</p>
          <ul>
            <li>
              <b>5 minutes</b> from Moira Train Station (direct line to Belfast city center)
            </li>
            <li>
              <b>15 minutes</b> from Lurgan, Lisburn and Craigavon
            </li>
            <li>
              <b>20 minutes</b> from Belfast International Airport
            </li>
            <li>
              <b>25 minutes</b> from Belfast City Center
            </li>
            <li>
              <b>30 minutes</b> from Belfast City Airport
            </li>
          </ul>
          </div>
<div class="contact-page-findus">

  <h2>Contact Us</h2>
 <p>You can call us on <b>+44 (0)28 92 652 952</b> or email us at <b>info@clenaghans.com</b> or fill out the form below. We'll get back to you as soon as we can. Please remember when contacting us that <b>Clenaghans Restaurant</b> is a separately run establishment.</p>
      

</div>


</div>

    <ContactForm />
       <BannerBlock :bannerObj="bannerObj"/>
    <CenterText :centerTextObj="centerText" />
    <Footer />
  </div>
</template>



<script>
// @ is an alias to /src
import BannerBlock from "@/components/content-blocks/BannerBlock.vue";
import Footer from "@/components/content-blocks/Footer.vue";
import CenterText from "@/components/content-blocks/CenterTextBlock.vue";
import ContactForm from "@/components/content-blocks/ContactForm.vue";

export default {
  name: "contact",
  components: {
    BannerBlock,
    Footer,
    CenterText,
    ContactForm
  },
  data() {
    return {
      bannerObj: {
        backgroundImage: "./block_images/clens_drone.jpg",
     },
      centerText: {
        bookButton: true,
        header: "Your next break starts here."
      }
    };
  },
  mounted() {
    document.body.classList.remove("homepage");
    var heights = window.innerHeight;

    if (heights < 660){
    document.getElementById("contact-page-map").style.height =
      heights - 200 + "px";
  }}
};
</script>


<style lang="scss" scoped>
#contact-page-map {
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
}

.contact-page-findus{
  padding: 40px 0px 10px;


}
</style>