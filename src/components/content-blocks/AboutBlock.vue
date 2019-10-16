<template>
  <section class="about">
    <div class="container">
      <div class="columns">
        <div class="column text">
          <h2>{{ aboutObj.header }}</h2>
          <p class="preamble">{{ aboutObj.preamble }}</p>
          <p>HIYA {{ aboutObj.body }}</p>
          <div v-html="aboutObj.bodyHtml"></div>
          <router-link to="/about">
            <button v-if="aboutObj.aboutCTA">{{ aboutObj.aboutCTA }}</button>
          </router-link>
          <router-link to="/book-now" v-if="aboutObj.checkAvail">
            <button v-if="aboutObj.checkAvail">{{ aboutObj.checkAvail }}</button>
          </router-link>
        </div>
        <div class="column img" v-if="aboutObj.image">
          <img :src="aboutObj.image" v-bind:key="aboutObj.image.id">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutBlock",
  props: ["aboutObj"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../scss/views/contentblocks/aboutBlock.scss";
</style>
