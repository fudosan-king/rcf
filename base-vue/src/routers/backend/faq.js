import i18n from "../../lang/i18n";

export default [
    {
        path: '/admin/faqs',
        name: 'AdminFaq',
        component: () => import('../../views/backend/faqs/FaqList'),
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]