import i18n from "../../lang/i18n";

export default [
    {
        path: '/admin/customers',
        name: 'Customer',
        component: () => import('../../views/backend/customers/CustomerList'),
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]