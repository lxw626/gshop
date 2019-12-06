import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import './mock/mockServer' // 加载mockServer即可
import './filters'
import loading from './common/imgs/loading.gif'

// 注册全局组件
Vue.component(Button.name,Button) // <mt-button>
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
