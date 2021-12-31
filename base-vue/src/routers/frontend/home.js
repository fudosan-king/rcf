import i18n from "../../lang/i18n";
import Home from "../../views/frontend/Home";

export default [
    {
        path: '',
        name: 'home',
        component: Home,
        meta: {
            title: i18n.t('frontend.home.title'),
        }
    },
]