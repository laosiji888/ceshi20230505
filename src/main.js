 import Vue from 'vue'

 import App from './App.vue'
 import axios from 'axios'
 import router from './router'
 import store from './store'
 import i18n from './i18n/index'
 import './assets/css/iconfont/iconfont.css'
 import Mock from '@/mock'
 import './assets/css/font/global.css'
 import './plugins/element.js'
 import locale from 'element-ui/lib/locale/lang/en'
 import VuePreview from 'vue-preview';





 Vue.prototype.axios = axios
 axios.defaults.baseURL = 'http://api.geekpandashare.com/'

 Vue.use(VuePreview)


 // Vue.use(ElementUI, { locale })\

 Vue.config.productionTip = false

 new Vue({
     i18n,
     router,
     store,
     render: h => h(App)
 }).$mount('#app')