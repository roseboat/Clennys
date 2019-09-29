<template>
  <section class="discover">
    <div class="container">
      <div class="columns">
        <div class="discover-text v-text-reveal">
          <h2>Discover Northern Ireland</h2>
          <p>From Norman Castles to Celtic monuments to the iconic Belfast murals, Northern Ireland’s history is as rich as it is troubled. Whether you’re here for GoT or our world-renowned ‘craic’, get to know this most misunderstood and beautiful of nations.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DiscoverBlock",
  mounted() {
    ScrollReveal().reveal(".v-text-reveal", { duration: 800, delay: 600 });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.discover {
  background-image: url("../../../public/block_images/giants_causeway.png");
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 0px 40px 0px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $c-white;
    opacity: 0.6;
  }
}

.discover-text {
  position: relative;
  padding: 40px;
  margin-right: auto;
  // background-color: $c-white;

}

@media (min-width: $screen-md) {
  .discover {
    background-image: url("../../../public/block_images/giants_causeway.png");
    padding: 120px 0px 120px 0px;
  }
  .discover-text {
    width: 60%;
    // border: 3px solid rgba(255, 255, 255, 0.8);
    // background-clip: padding-box;
    // background-color: transparent;
      background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>
