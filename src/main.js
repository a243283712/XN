import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import routerConfig from './router.config.js'

import './assets/css/animate.css'
import './assets/css/1.css';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);
const router=new VueRouter(routerConfig);



//每次进入新组件后滚动条回到顶部
router.afterEach(function(to){
    window.scrollTo(0,0)
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
