import Vue from 'vue'
import Eagle from 'eagle.js'
import VueVisible from 'vue-visible'
import App from './App.vue'
import 'eagle.js/dist/eagle.css'

Eagle.slideshow.computed.isChild = function() {
  return !!this.parentWindow;
};
Eagle.slideshow.computed.isParent = function() {
  return !!this.childWindow;
};

Eagle.slide.computed.isParent = function() {
  return this.$parent.isParent;
};

Vue.use(VueVisible);
Vue.use(Eagle)

Vue.config.productionTip = false


new Vue({
  render: h => h(App)
}).$mount('#app')
