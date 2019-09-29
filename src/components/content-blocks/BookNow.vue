<template>
  <section class="bookNow">
    <div class="container" data-region="emea" data-channelcode="bfs6371">
      <!-- <h2>Book Your Stay</h2> -->
      <!-- <p class="preamble">Fill out this short form to be taken to our dedicated booking site.</p> -->
      <form action="#" class="ibe" data-region="emea" data-channelcode="bfs6371" target="_blank">
        <p class="form-field">
          <label>Check In Date:</label>
          <br>
          <input name="check_in_date" type="date">
        </p>
        <p class="form-field">
          <label>Number of Nights:</label>
          <br>
          <input name="number_nights" type="number" min="1" value="1">
        </p>
        <p class="form-field">
          <label>People:</label>
          <br>
          <input max="14" min="1" name="number_adults" type="number" value="2">
        </p>
        <p>
          <button type="submit">Check Availability</button>
        </p>
      </form>
    </div>
  </section>
</template>


<script>
export default {
  mounted: function() {
    require("@/ibe.js");
  }
};
</script>


<style lang="scss">
.bookNow {
  padding: 45px 0px 0px;
  .ibe {
    text-align: center;
    padding: 0px 0px 90px;

    .form-field {
      display: inline-block;
      margin: 30px;
      input {
        height: 30px;
        text-align: center;
        min-width: 50px;
        padding: 15px;
      }
    }
    label {
      @include font-size(2.2, 3);
    }
  }
}

@media (min-width: $screen-xxl) {
  .bookNow {
    padding-bottom: 40px;
  }
}
</style>
