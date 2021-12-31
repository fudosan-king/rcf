import i18n from "../../lang/i18n";
import FundCondition from "../../views/frontend/Transaction/FundCondition";
import Portfolio from "../../views/frontend/Transaction/Portfolio";
import TransitionHistory from "../../views/frontend/Transaction/TransitionHistory";
import TransitionDocument from "../../views/frontend/Transaction/TransitionDocument";

export default [
    {
        path: '/transaction/fund',
        name: 'FundCondition',
        component: FundCondition,
        meta: {
            title: i18n.t('frontend.navbar.transition.fund_condition'),
        }
    },
    {
        path: '/transaction/portfolio',
        name: 'TransPortfolio',
        component: Portfolio,
        meta: {
            title: i18n.t('frontend.navbar.transition.portfolio'),
        }
    },
    {
        path: '/transaction/history',
        name: 'TransitionHistory',
        component: TransitionHistory,
        meta: {
            title: i18n.t('frontend.navbar.transition.transaction_history'),
        }
    },
    {
        path: '/transaction/document',
        name: 'TransitionDocument',
        component: TransitionDocument,
        meta: {
            title: i18n.t('frontend.navbar.transition.document'),
        }
    }
]