import i18n from "../../lang/i18n";

export default [
    {
        path: '/admin/setting',
        name: 'AdminSetting',
        component: () => import('../../views/backend/settings/Setting'),
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]