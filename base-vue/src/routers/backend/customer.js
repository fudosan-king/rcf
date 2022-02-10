import i18n from "../../lang/i18n";
import CustomerList from "../../views/backend/customers/CustomerList";

export default [
    {
        path: '/admin/customers',
        name: 'Customer',
        component: CustomerList,
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]