<template :key="bannerObj.name">
  <section class="banner-block" :style="style">
    <div class="container">
      <div class="content">
        <h2>{{ bannerObj.heading }}</h2>
        <p class="preamble">{{bannerObj.preamble}}</p>
        <div v-html="bannerObj.preambleHtml" class="preamble"></div>
        <p>{{bannerObj.subheading }}</p>
        <div v-html="bannerObj.bodyHtml"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerBlock",
  props: ["bannerObj"],
  data() {
    return {
      bannerBackground: this.bannerObj.backgroundImage
    };
  },
  computed: {
    style() {
      return 'background-image: url("' + this.bannerBackground + '")';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner-block {
  position: relative;
  padding: 100px 0px;
  text-align: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0.8;
  }

  .content {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 750px;
  }

  .email-form {
    input {
      width: 50%;
      font-family: $f-body;
    }
  }
}

@media (min-width: $screen-xxl) {
  .banner-block {
    padding: 150px 0px;
  }
}

@media (min-width: 2300px) {
  .banner-block {
    padding: 250px 0px;
  }
}
</style>
