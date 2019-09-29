<template :key="bannerObj.name">
  <section class="banner">
    <div class="container">
      <div class="content">
        <h1>Clenaghans Accommodation</h1>
        <p class="preamble">
          For almost 300 years, we’ve been opening our doors to travellers from around the world.
          <br>Make us your next stop.
        </p>
        <a href="https://app.thebookingbutton.com/properties/bfs6371?" target="_blank">
          <button class="gold">Check Availability</button>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeBanner"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  position: relative;
  text-align: center;
  background-image: url("../../../public/block_images/ivy-sm.png");
  background-size: cover;
  padding: 80px 0px 80px 0px;
  color: $c-white;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.6;
  }
}


.content {
  position: relative;
}

@media (min-width: 600px) {
  .banner {
    padding: 250px 0px 180px;
  }
}
</style>
