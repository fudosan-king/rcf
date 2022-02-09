import i18n from "../../lang/i18n";
import Login from "../../views/backend/auth/Login";

export default [
    {
        path: '/admin/login',
        name: 'loginAdmin',
        component: Login,
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]