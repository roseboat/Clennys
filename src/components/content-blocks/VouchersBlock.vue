<template>
  <section class="vouchers">
    <div class="container">
      <div class="voucher-text">
        <h4>Choose Your Voucher</h4>

        <p>
          We endeavour to post all vouchers within 24 hours of receiving your order.
          Vouchers are sent by Royal Mail First Class Signed For and we will provide proof of purchase shortly after posting - for this there is a charge of £1.50 added at checkout. Vouchers being sent to the Republic of Ireland will be sent by Royal Mail International Standard.
        </p>
        <p>
          <i>
            Vouchers purchased here are only for use at
            <b>Clenaghan’s Accommodation</b>. Vouchers for the restaurant may be purchased at their website,
            <a
              href="www.clenaghansrestaurant.com"
              target="_blank"
            >here</a>
          </i>.
        </p>

        <div class="voucher-columns">
          <img src="https://via.placeholder.com/300x200" class="voucher-placeholder">
          <img src="https://via.placeholder.com/300x200" class="voucher-placeholder">
          <img src="https://via.placeholder.com/300x200" class="voucher-placeholder">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VoucherBlock",
  props: ["vouchers"]
};
</script>

<style scoped lang="scss">
.vouchers {
  padding: 50px 0px;

  .voucher-columns {
    padding: 30px 0px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    .voucher-placeholder {
      display: inline-block;
      padding: 0px 20px;
    }
  }
}
</style>
