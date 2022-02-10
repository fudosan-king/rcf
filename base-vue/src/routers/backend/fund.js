import i18n from "../../lang/i18n";
import FundList from "../../views/backend/funds/FundList";

export default [
    {
        path: '/admin/funds',
        name: 'AdminFund',
        component: FundList,
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]