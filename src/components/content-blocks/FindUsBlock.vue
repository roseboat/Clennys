<template>
  <section class="findus">
    <div class="container">
      <div class="columns">
        <div class="column mapBlock v-map-reveal">
          <!-- <div id="map"></div> -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2316.706112744643!2d-6.241440983896563!3d54.50340748023783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4860fdae1f67c4f7%3A0xf6927a3d04335ae2!2sClenaghans!5e0!3m2!1sen!2suk!4v1560349067462!5m2!1sen!2suk"
            id="map"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="column text v-text-reveal">
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FindUsBlock",
  props: ["findUs"],
  mounted() {
    ScrollReveal().reveal(".v-map-reveal", { duration: 1000, delay: 100 });
    ScrollReveal().reveal(".v-text-reveal", { duration: 500, delay: 200 });
  }
};
</script>

<style scoped lang="scss">
.findus {
  padding: 30px 0px;

  .mapBlock {
    width: 100%;
    margin-bottom: 30px;
  }

  #map {
    height: 250px;
    width: 100%;
  }

  @media (min-width: $screen-md) {
    .columns {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .mapBlock {
      margin-right: 30px;
    }
    #map {
      min-width: 250px;
    }
    .column {
      width: 50%;
    }
  }

  @media (min-width: $screen-lg) {
    padding: 60px 0px;

    .columns {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .column {
      width: 60%;

      &.mapBlock {
        width: 40%;
      }
    }
    .mapBlock {
      margin-right: 50px;
    }

    #map {
      height: 300px;
    }
  }

  @media (min-width: $screen-xxl) {
    padding: 80px 0px;

    #map {
      height: 350px;
    }
    .mapBlock {
      margin-right: 80px;
    }
  }
}
</style>
