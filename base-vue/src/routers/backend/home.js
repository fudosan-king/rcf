import i18n from "../../lang/i18n";
import Home from "../../views/backend/Home";

export default [
    {
        path: '/admin',
        name: 'homeAdmin',
        component: Home,
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]