import Vue from 'vue';
import './plugins/fontawesome';
import App from './App.vue';
import router from './router';
import Tab from './components/Tab.vue';
import Tabs from './components/Tabs.vue';
import VueScrollTo from 'vue-scrollto';
import VueCarousel from 'vue-carousel/dist/vue-carousel.min.js';
import VueScrollReveal from 'vue-scroll-reveal';
import PictureFill from 'picturefill';
import jQuery from 'jquery';
import Slick from 'vue-slick';
import VueParallaxJs from 'vue-parallax-js'
 

Vue.use(VueParallaxJs)
Vue.use(Slick)
Vue.use(VueCarousel)
Vue.use(VueScrollTo)
Vue.use(VueScrollReveal)
Vue.use(PictureFill)

Vue.component('slick', Slick)
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');




