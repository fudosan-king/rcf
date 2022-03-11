import i18n from "../../lang/i18n";

export default [
    {
        path: '/admin/funds',
        name: 'AdminFund',
        component: () => import('../../views/backend/funds/FundList'),
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]