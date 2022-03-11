import i18n from "../../lang/i18n";

export default [
    {
        path: '/admin/users',
        name: 'UserAdmin',
        component: () => import('../../views/backend/users/UserList'),
        meta: {
            requiresAuth: true,
            title: i18n.t('pages.auth.login.title'),
        }
    },
    {
        path: '/admin/users',
        name: 'UserAdminCreate',
        component: () => import('../../views/backend/users/UserCreate'),
        meta: {
            requiresAuth: true,
            title: i18n.t('pages.auth.login.title'),
        }
    },
    {
        path: '/admin/users/update/:id',
        name: 'UserAdminUpdate',
        component: () => import('../../views/backend/users/UserUpdate'),
        meta: {
            requiresAuth: true,
            title: i18n.t('pages.auth.login.title'),
        }
    },
]