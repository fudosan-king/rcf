import i18n from "../../lang/i18n";
import Register from "../../views/frontend/auth/Register";
import Activation from "../../views/frontend/auth/Activation";
import Registration from "../../views/frontend/auth/Registration";

export default [
    {
        path: '/register',
        name: 'registerUser',
        component: Register,
        meta: {
            title: i18n.t('frontend.auth.register'),
        }
    },
    {
        path: '/activation',
        name: 'Activation',
        component: Activation,
        meta: {
            title: i18n.t('frontend.auth.activation.title'),
        }
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration,
        meta: {
            title: i18n.t('frontend.auth.activation.title'),
        }
    },
]