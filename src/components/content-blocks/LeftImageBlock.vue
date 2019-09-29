<template>
  <section class="left-block" :style="style">
    <div class="container">
      <div class="columns">
        <div class="column img" v-if="leftObj.image">
          <img :src="leftObj.image" v-bind:key="leftObj.image.id">
        </div>
        <div class="column text">
          <h2>{{ leftObj.header }}</h2>
          <div v-html="leftObj.bodyHtml"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LeftBlock",
  props: ["leftObj"],
  data() {
    return {
      bannerBackground: this.leftObj.backgroundImage
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
.left-block {
  padding: 40px 0px;
  position: relative;
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
  .columns {
    display: block;
    position: relative;

    .text {
      padding: 30px 0px 30px 0px;
    }

    img {
      margin-right: auto;
      margin-left: auto;
      padding: 0px 30px 0px 0px;
      max-height: 450px;
    }
  }
}
@media (min-width: 950px) {
  .left-block {
    padding: 60px 0px;

    .columns {
      display: flex;
      flex-direction: row;

      .img {
        margin-right: auto;
      }

      .text {
        padding: 0px;
        max-width: 65%;
      }
    }
  }
}
</style>
