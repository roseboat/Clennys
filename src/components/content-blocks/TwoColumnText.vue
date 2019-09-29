<template>
  <section class="two-column">
    <div class="container">
      <div class="columns">
        <div class="column large">
          <h2>{{ twoColumn.header1 }}</h2>
          <p class="preamble">{{ twoColumn.preamble1 }}</p>
          <p>{{ twoColumn.body1 }}</p>
          <div v-html="twoColumn.bodyHtml1"></div>
        </div>
        <div class="column regular">
          <h2>{{ twoColumn.header2 }}</h2>
          <p class="preamble">{{ twoColumn.preamble2 }}</p>
          <p>{{ twoColumn.body2 }}</p>
          <div v-html="twoColumn.bodyHtml2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TwoColumn",
  props: ["twoColumn"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.two-column {
  padding: 30px 0px;
  background-color: $c-lightgold;

  @media (min-width: $screen-lg) {
    padding: 60px 0px;

    .columns {
      display: flex;
      flex-direction: row;

      .column {
        max-width: 50%;
        padding: 30px;
        
        &.large{
          padding-right: 15px;
        }      

        &.regular {
          padding-left: 15px;
          margin-left: auto;
        }
      }
    }
  }
}
</style>
