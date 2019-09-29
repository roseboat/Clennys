<template>
  <section class="contact-form">
    <div class="container">
      <div class="contact-text">
        <form
          action="mailto:rosa.downing@screenmedia.co.uk"
          method="post"
          enctype="text/plain"
          class="email-form"
        >
          <p class="form-input-section">
            Name:
            <br>
            <input type="text" name="name" size="40">
          </p>
          <p class="form-input-section">
            <span class="text">Your E-mail:</span>
            <br>
            <input type="text" name="email-address" size="40">
          </p>
          <p class="form-input-section">
            Your Message:
            <br>
            <input type="text" name="message" size="40" class="message">
          </p>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  props: ["contact-form"]
};
</script>

<style scoped lang="scss">
.contact-form {
  text-align: center;
  padding: 0px 0px 30px;

.text{
  text-align: left;
}

  .contact-text {
    input {
      width: 300px;
      font-family: $f-body;
      @include font-size(1.6, 2.4);
      height: 40px;
    }
  }
  @media (min-width: $screen-sm) {
    padding: 0px 0px 40px;
    .form-input-section {
      padding: 10px 0px;
    }
    .contact-text {
      input {
        width: 80%;
        @include font-size(2, 2.8);
      }
    }
  }
}
</style>
