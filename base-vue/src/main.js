import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import i18n from './lang/i18n';
import store from './stores';
import {ApiService} from './services';
// import { BootstrapVue } from 'bootstrap-vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'vue2-datepicker/scss/index.scss';
import 'vue2-datepicker/locale/ja'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue-multiselect/dist/vue-multiselect.min.css"
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Mixins from './mixins';
import Components from './components/common';
import Directive from './directives';
import Prototypes from './prototypes';
import Yubinbango from 'yubinbango-core';
import DatePicker from "vue2-datepicker";
import vueDropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import router from './routers';
import VueApexCharts from 'vue-apexcharts'
import Toasted from 'vue-toasted';
import VueNestable from 'vue-nestable'



Vue.use(VueApexCharts)

Vue.config.productionTip = false

ApiService.init()
ApiService.setHeader()
Vue.component('apexchart', VueApexCharts)
Vue.use(VueToast, {
    "position": 'top-right',
    "singleton": true,
});
Vue.use(Toasted, {
    position: 'top-right',
    singleton: true,
});
Vue.use(VueNestable)


// Vue.use(BootstrapVue)
Vue.use(Vuelidate);
Vue.use(Prototypes)
Vue.use(Yubinbango)
Vue.use(DatePicker)
Vue.use(vueDropzone)


Mixins(Vue);
Components(Vue);
Directive(Vue);

new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app')