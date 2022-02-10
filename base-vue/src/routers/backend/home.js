import i18n from "../../lang/i18n";
import Dashboard from "../../views/backend/Dashboard";

export default [
    {
        path: '/admin/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            // requiresAuth: true,
            title: i18n.t('pages.auth.login.title'),
        },
    },
]