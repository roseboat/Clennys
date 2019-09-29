<template>
  <div>
    <div class="tabs">
      <div class="container">
        <ul>
          <li v-for="tab in tabs" v-bind:key="tab.id" :class="{ 'is-active': tab.isActive }">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs",
  data() {
    return { tabs: [] };
  },

  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });

      var options = {
        easing: "ease-in"
      };
      if (window.innerWidth < 767) {
        this.$scrollTo(".tabs-details");
      } else {
        this.$scrollTo(".tabs");
      }
    }
  }
};
</script>


<style lang="scss" scoped>
ul {
  list-style: none;
  display: block;
  padding: 0px;

  li {
    @include font-size(2, 2.8);
    display: block;
    text-align: center;
    font-weight: normal !important;
  }
}
.tabs {
  border-bottom: 1px solid $c-superlightgrey;

  ul {
    margin: 0px;
  }

  li a:hover {
    color: $c-lightlink;
    background-color: $c-superlightgrey;
  }

  li.is-active {
    a {
      color: $c-lightlink;
    }
  }
  a {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid $c-superlightgrey;
    color: $c-mediumgrey;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 25px;
  }
}

@media (min-width: $screen-sm) {
  .tabs {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 1rem;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;

    ul {
      padding: 15px 0px 0px 40px;
      border-bottom: 1px solid $c-superlightgrey;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }

    li a:hover {
      color: $c-lightlink;
      background-color: $c-white;
    }

    li.is-active {
      a {
        border-bottom-color: $c-lightlink;
        color: $c-lightlink;
      }
    }
    a {
      border-bottom: 1px solid $c-superlightgrey;
      color: $c-mediumgrey;
      margin-bottom: -1px;
      padding: 10px 20px;
      vertical-align: top;
    }
  }
}

@media (min-width: $screen-lg) {
  .tabs a {
    padding: 10px 60px;
  }
}
</style>
