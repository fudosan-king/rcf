import i18n from "../../lang/i18n";
import Setting from "../../views/backend/settings/Setting";

export default [
    {
        path: '/admin/setting',
        name: 'AdminSetting',
        component: Setting,
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]