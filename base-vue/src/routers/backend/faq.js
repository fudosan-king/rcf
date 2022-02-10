import i18n from "../../lang/i18n";
import FaqList from "../../views/backend/faqs/FaqList";

export default [
    {
        path: '/admin/faqs',
        name: 'AdminFaq',
        component: FaqList,
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]