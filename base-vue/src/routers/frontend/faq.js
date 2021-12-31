import i18n from "../../lang/i18n";
import Faq from "../../views/frontend/Faq";

export default [
    {
        path: 'faq',
        name: 'Faq',
        component: Faq,
        meta: {
            title: i18n.t('frontend.faq.title'),
        }
    },

]