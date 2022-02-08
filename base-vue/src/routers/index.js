import Vue from 'vue'
import VueRouter from 'vue-router'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import PageNotFound from "../components/common/PageNotFound";
import store from "../stores";
import i18n from "../lang/i18n";
import authAdmin from "./backend/auth";
import LayoutAdmin from "../components/layouts/LayoutAdmin";
import Layout from "../components/layouts/Layout";
import firstTime from "./frontend/firstTime";
import home from "./frontend/home";
import fund from "./frontend/fund";
import flow from "./frontend/flow";
import faq from "./frontend/faq";
import authUser from "./frontend/auth";
import customer from "./frontend/customer";
import contact from "./frontend/contact";
import transaction from "./frontend/transaction";
import homeAdmin from "./backend/home";



Vue.use(VueToast, {
    position: 'top-right'
});

Vue.use(VueRouter)

const routes = [
    ...authAdmin,
    {
        path: "*",
        component: PageNotFound,
    },
    {
        path: 'admin',
        component: LayoutAdmin,
        meta: {
            // requiresAuth: true
        },
        children: [
            // route modules
            ...homeAdmin
        ]
    },
    {
        path: '',
        component: Layout,
        meta: {
            // isLogin: true
        },
        children: [
            // route modules
            ...authUser,
            ...home,
            ...firstTime,
            ...fund,
            ...flow,
            ...faq,
            ...transaction,
            ...customer,
            ...contact,
        ]
    }
]

window.popStateDetected = false
window.addEventListener('popstate', () => {
    window.popStateDetected = true
})

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
    const isLogin = to.matched.some(x => x.meta.isLogin)
    const isAuthenticated = store.getters.isAuthenticated || !!localStorage.getItem('accessToken');
    if (requiresAuth && !isAuthenticated) {
        next('')
    }
    if (isLogin && isAuthenticated) {
        next('')
    }
    document.title = to.meta.title || i18n.t('app.title');
    next()
})

export default router