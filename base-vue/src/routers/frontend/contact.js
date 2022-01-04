import i18n from "../../lang/i18n";
import Contact from "../../views/frontend/Contact";

export default [
    {
        path: 'contact',
        name: 'Contact',
        component: Contact,
        meta: {
            title: i18n.t('frontend.contact.contact_title'),
        }
    },

]