import i18n from "../../lang/i18n";
import Dashboard from "../../views/backend/dashboard/Dashboard";

export default [
    {
        path: '/admin',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            // requiresAuth: true,
            title: i18n.t('pages.auth.login.title'),
        },
    },
]