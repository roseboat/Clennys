<template>
  <section class="two-column">
    <div class="container">
      <div class="columns">
        <div class="column large">
          <h2>{{ twoColumn.header1 }}</h2>
          <p>{{ twoColumn.preamble1 }} {{ twoColumn.body1 }}</p>
          <div v-html="twoColumn.bodyHtml1"></div>
        </div>
        <div class="column regular">
          <h2>{{ twoColumn.header2 }}</h2>
          <p>{{ twoColumn.preamble2 }} {{ twoColumn.body2 }}</p>
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
        padding: 50px;
       
        &.regular {
          
          margin-left: auto;
        }
      }
    }
  }
}
</style>
