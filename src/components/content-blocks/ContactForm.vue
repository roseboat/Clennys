<template>
  <section class="contact-form">
    <div class="container">
      <div class="columns contact-text">
        <div class="column">

  <div>
 <h2>Find Us</h2>
          <p>Conveniently located a 5 minute drive away from the Moira Junction (Junction 9) of Northern Ireland’s M1 motorway, we are also:</p>
          <ul>
            <li>
              <b>5 minutes</b> from Moira Train Station (direct line to Belfast city center)
            </li>
            <li>
              <b>15 minutes</b> from Lurgan, Lisburn and Craigavon
            </li>
            <li>
              <b>20 minutes</b> from Belfast International Airport
            </li>
            <li>
              <b>25 minutes</b> from Belfast City Center
            </li>
            <li>
              <b>30 minutes</b> from Belfast City Airport
            </li>
          </ul>
          </div>
          <div class="column-para">
  <h2>Contact Us</h2>
 <p>You can call us on <b>+44 (0)28 92 652 952</b> or email us at <b>info@clenaghans.com</b> or fill out the form on this page. We'll get back to you as soon as we can. Please remember when contacting us that <b>Clenaghans Restaurant</b> is a separately run establishment.</p>
    </div>
</div>

<div class="column email-form">
        <form
          action="mailto:rosa.downing@screenmedia.co.uk"
          method="post"
          enctype="text/plain"
        >
        <h2>Get in touch</h2>
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
      </div></div>
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
  padding: 0px 0px 30px;

.text{
  text-align: left;
}

.column{
padding: 30px 0px 0px;
  
}
.column-para{

    padding-top:30px;

}

  .contact-text {
    input {
      width: 300px;
      font-family: $f-body;
      @include font-size(1.6, 2.4);
      height: 40px;
    }
  }
  @media (min-width: $screen-md) {
 

    .form-input-section {
      padding: 10px 0px;
    }


    .columns {
      display: flex;
      flex-direction: row;

      .column {
        padding: 40px 0px;
         max-width: 70%;

        &.contact-text {
          padding-right: 40px;
         
          margin-left: auto;
        }
        &.email-form {
          padding-left: 70px;
        }
      }
    }



  }
}
</style>
