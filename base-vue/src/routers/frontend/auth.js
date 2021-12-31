import i18n from "../../lang/i18n";
import Register from "../../views/frontend/auth/Register";

export default [
    {
        path: '/register',
        name: 'registerUser',
        component: Register,
        meta: {
            title: i18n.t('frontend.auth.register'),
        }
    },
]