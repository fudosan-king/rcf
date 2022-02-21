import Vue from 'vue'
import VueRouter from 'vue-router'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import PageNotFound from "../components/common/PageNotFound";
import store from "../stores";
import i18n from "../lang/i18n";
import authAdmin from "./backend/auth";
import Layout from "../components/layouts/frontend/Layout";
import firstTime from "./frontend/firstTime";
import home from "./frontend/home";
import fund from "./frontend/fund";
import flow from "./frontend/flow";
import faq from "./frontend/faq";
import authUser from "./frontend/auth";
import customer from "./frontend/customer";
import contact from "./frontend/contact";
import transaction from "./frontend/transaction";

//Admin Management
import fundAdmin from "./backend/fund";
import transactionAdmin from "./backend/transaction";
import customerAdmin from "./backend/customer";
import userAdmin from "./backend/userAdmin";
import faqAdmin from "./backend/faq";
import setting from "./backend/setting";
import {FORBIDDEN} from "@/helpers/message";


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
        path: '/admin',
        component: () => import('../components/layouts/admin/LayoutAdmin'),
        meta: {
            requiresAuth: true
        },
        children: [
            // route modules
            {
                path: '/admin',
                name: 'Dashboard',
                component: () => import('../views/backend/dashboard/Dashboard'),
                meta: {
                    requiresAuth: true,
                    title: i18n.t('pages.auth.login.title'),
                },
            },
            ...transactionAdmin,
            ...fundAdmin,
            ...customerAdmin,
            ...userAdmin,
            ...faqAdmin,
            ...setting

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
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const isAuthenticated = store.getters.isAuthenticated || !!localStorage.getItem('accessToken')
    if (requiresAuth && !isAuthenticated) {
        next('/admin/login')
    } else if (to.path === '/admin/login' && isAuthenticated) {
        next('/admin')
    } else if (to.meta.requiresRoles) {
        // check USER PERMISSION HERE:
        const userRole = store.getters.authUser ? store.getters.authUser.role_id : (JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')).role_id : null)
        if (!to.meta.requiresRoles.includes(userRole)) {
            Vue.$toast.error(FORBIDDEN)
            next('403')
        }
    }
    document.title = to.meta.title || i18n.t('app.title');
    next()
})

export default router