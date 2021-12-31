import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import router from './routers';
import i18n from './lang/i18n';
import store from './stores';
import { ApiService } from './services';
import { BootstrapVue } from 'bootstrap-vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Mixins from './mixins';
import Components from './components/common';
import Directive from './directives';
import Prototypes from './prototypes'

Vue.config.productionTip = false

ApiService.init()
ApiService.setHeader()

Vue.use(VueToast, {
    "position": 'top-right',
    "singleton": true,
});

Vue.use(Vuelidate);
Vue.use(Prototypes)
Vue.use(BootstrapVue)

Mixins(Vue);
Components(Vue);
Directive(Vue);

new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app')