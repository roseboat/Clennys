<template>
  <transition mode="out-in" name="slide">
    <section class="iconList">
      <div class="container">
        <div class="icons">
          <h2>{{ iconProps.header }}</h2>
          <ul>
            <li v-for="item in iconProps.icons" v-bind:key="item.id">
             
              {{ item.key }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: "IconBlock",
  props: ["iconProps"]
};
</script>



<style scoped lang="scss">
.iconList {
  padding: 30px 0px 30px;

  h1 {
    text-align: center;
    padding: 25px;
  }

  ul {
    padding: 20px 0px;
    list-style-type: none;
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    align-items: center;

    li {
      text-align: left;
      @include font-size(1.8, 2.6);
      padding: 5px;
    }
  }
}

.slide-leave-active,
.slide-enter-active {
  transition: 3s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

@media (min-width: $screen-md) {
  .iconList {
    ul li {
      @include font-size(2.5, 3.3);
    }
  }
}
@media (min-width: $screen-lg) {
  .iconList {
    ul {
      list-style-type: none;
      -webkit-columns: 3;
      -moz-columns: 3;
      columns: 3;
      align-items: center;
    }
  }
}
</style>
