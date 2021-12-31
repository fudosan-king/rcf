import i18n from "../../lang/i18n";
import CustomerInfo from "../../views/frontend/Customer/CustomerInfo";
import Logout from "../../views/frontend/auth/Logout";

export default [
    {
        path: '/customer/profile',
        name: 'CustomerInfo',
        component: CustomerInfo,
        meta: {
            title: i18n.t('frontend.fund.title'),
        }
    },
    {
        path:'logout',
        name: 'Logout',
        component: Logout,
        meta: {
            title: i18n.t('frontend.fund.title'),
        },
    }

]