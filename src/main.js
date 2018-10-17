import Vue from 'vue'
import Eagle, { Options } from 'eagle.js'
import VueVisible from 'vue-visible'
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import App from './App.vue'
import 'eagle.js/dist/eagle.css'
import router from './router'

hljs.registerLanguage('javascript', javascript);
Options.hljs = hljs;

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
  router,
  render: h => h(App)
}).$mount('#app')
