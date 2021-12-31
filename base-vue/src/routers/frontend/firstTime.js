import i18n from "../../lang/i18n";
import firstTime from "../../views/frontend/firstTime";

export default [
    {
        path: 'first-time',
        name: 'firstTime',
        component: firstTime,
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]