import i18n from "../../lang/i18n";

export default [
    {
        path: 'faq',
        name: 'Faq',
        component: () => import('../../views/frontend/Faq'),
        meta: {
            title: i18n.t('frontend.faq.title'),
        }
    },

]