import i18n from "../../lang/i18n";


export default [
    {
        path: '/admin/login',
        name: 'login.admin',
        component: () => import('../../views/backend/auth/Login'),
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
    {
        path: '/admin/logout',
        meta: {
            requiresAuth: true
        },
        name: 'logout.admin',
        component: () => import('../../views/backend/auth/Logout'),
    },
]