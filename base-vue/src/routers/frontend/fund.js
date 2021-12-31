import i18n from "../../lang/i18n";
import FundList from "../../views/frontend/Fund/FundList";
import FundDetail from "../../views/frontend/Fund/FundDetail";

export default [
    {
        path: 'fund',
        name: 'FundList',
        component: FundList,
        meta: {
            title: i18n.t('frontend.fund.title'),
        }
    },
    {
        path:'fund/:id',
        name: 'FundDetail',
        component: FundDetail,
        meta: {
            title: i18n.t('frontend.fund.title'),
        },
    }

]